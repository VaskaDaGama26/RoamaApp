// @ts-nocheck
import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import feedbackSchema from '../feedbackSchema';
import Toast from '../../../components/Toast/Toast';
import review from '/static/feedback/review.svg';
import FeedbackInputWrapper from './FeedbackInputWrapper/FeedbackInputWrapper';
import { useMotionValue } from 'motion/react';

import { motion } from 'motion/react';

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      mood: undefined,
      message: '',
      email: '',
      agreement: false,
    },
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isDropped, setIsDropped] = useState(false);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  function checkDrop(event: any) {
    if (!dropZoneRef.current) return false;
    const dropZoneRect = dropZoneRef.current.getBoundingClientRect();
    const dragTarget = event.target.getBoundingClientRect();
    const centerX = dragTarget.left + dragTarget.width / 2;
    const centerY = dragTarget.top + dragTarget.height / 2;
    return (
      centerX >= dropZoneRect.left &&
      centerX <= dropZoneRect.right &&
      centerY >= dropZoneRect.top &&
      centerY <= dropZoneRect.bottom
    );
  }

  function handleDragEnd(event: any) {
    if (checkDrop(event)) {
      setIsDropped(true);
    } else {
      x.set(0);
      y.set(0);
      setIsDropped(false);
    }
  }

  function handleDragStart() {
    setIsDropped(false);
  }

  const [toastVisible, setToastVisible] = useState(false);

  const onSubmit = (data: z.infer<typeof feedbackSchema>) => {
    setToastVisible(true);
    console.log('Sent!', data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto mt-32 flex max-w-3xl flex-col gap-6 px-2.5 lg:px-0"
    >
      <div className="absolute top-0 right-2.5 flex -translate-y-[116px] flex-col items-end gap-4 px-2.5 sm:right-0">
        <p className="rotate-z-3 cursor-default text-xs text-(--gray)">Потяни за картинку...</p>
        <motion.img
          drag
          dragMomentum={false}
          dragElastic={0.2}
          whileDrag={{ scale: 0.75, rotate: 10 }}
          dragTransition={{ bounceStiffness: 50, bounceDamping: 10 }}
          style={{ x, y, cursor: 'grab', display: 'block', margin: '0 auto' }}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          className="h-20 md:h-28"
          src={review}
          alt=""
        />
      </div>

      {/* TOAST */}
      {toastVisible && (
        <Toast
          timeout={5000}
          message="Спасибо за ваш отзыв! 💜"
          onClose={() => setToastVisible(false)}
        />
      )}

      {/* Оценка */}
      <FeedbackInputWrapper
        label="Ваши эмоции от использования:"
        error={errors.mood?.message as string | undefined}
      >
        <Controller
          control={control}
          name="mood"
          render={({ field }) => (
            <div className="flex flex-row items-center justify-center gap-4">
              {[
                { value: 'veryhappy', emoji: '😄' },
                { value: 'happy', emoji: '🙂' },
                { value: 'neutral', emoji: '😐' },
                { value: 'unhappy', emoji: '😕' },
                { value: 'angry', emoji: '😠' },
              ].map((m) => (
                <button
                  type="button"
                  key={m.value}
                  className={`h-9 w-9 transform cursor-pointer rounded-full text-2xl transition hover:scale-110 ${field.value === m.value ? 'ring-2 ring-purple-700' : ''}`}
                  onClick={() => field.onChange(m.value)}
                >
                  {m.emoji}
                </button>
              ))}
            </div>
          )}
        />
      </FeedbackInputWrapper>

      {/* Комментарий */}
      <FeedbackInputWrapper
        label="Комментарий (необязательно):"
        error={errors.message?.message as string | undefined}
      >
        <textarea
          style={{ maxHeight: '200px' }}
          {...register('message')}
          className="border-b border-purple-300 text-xs focus:outline-0 sm:text-sm"
        ></textarea>
      </FeedbackInputWrapper>
      {/* Email */}
      <FeedbackInputWrapper label="Email:" error={errors.email?.message as string | undefined}>
        <input
          required
          {...register('email')}
          className="border-b border-purple-300 text-xs focus:outline-0 sm:text-sm"
          type="email"
        />
      </FeedbackInputWrapper>
      {/* Согласие */}
      <div>
        <label className="inline-flex cursor-pointer items-center gap-2 text-sm accent-purple-700 sm:text-base">
          <input {...register('agreement')} type="checkbox" />Я согласен на обработку персональных
          данных
        </label>
        {errors.agreement && (
          <p className="mt-1 text-sm text-red-500">{errors.agreement.message}</p>
        )}
      </div>
      {/* Submit */}
      <motion.button
        ref={dropZoneRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mx-auto w-[300px] cursor-pointer rounded-2xl bg-(--purple) px-6 py-2 text-sm text-white duration-300 sm:text-base"
        type="submit"
      >
        Отправить
      </motion.button>
    </form>
  );
};

export default FeedbackForm;
// hover:shadow-2xl
