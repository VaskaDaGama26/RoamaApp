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
      className="flex relative flex-col gap-6 px-2.5 lg:px-0 mt-32 mx-auto max-w-3xl"
    >
      <div className="flex flex-col px-2.5 items-end gap-4 absolute top-0 right-2.5 sm:right-0 -translate-y-[116px]">
        <p className="cursor-default text-xs rotate-z-3 text-(--gray)">Потяни за картинку...</p>
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
                  className={`w-9 h-9 cursor-pointer text-2xl transition transform hover:scale-110 rounded-full ${field.value === m.value ? 'ring-2 ring-purple-700' : ''}`}
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
          className="text-xs sm:text-sm border-b border-purple-300 focus:outline-0"
        ></textarea>
      </FeedbackInputWrapper>
      {/* Email */}
      <FeedbackInputWrapper label="Email:" error={errors.email?.message as string | undefined}>
        <input
          required
          {...register('email')}
          className="text-xs sm:text-sm border-b border-purple-300 focus:outline-0"
          type="email"
        />
      </FeedbackInputWrapper>
      {/* Согласие */}
      <div>
        <label className="text-sm sm:text-base inline-flex items-center gap-2 cursor-pointer accent-purple-700">
          <input {...register('agreement')} type="checkbox" />Я согласен на обработку персональных
          данных
        </label>
        {errors.agreement && (
          <p className="text-red-500 text-sm mt-1">{errors.agreement.message}</p>
        )}
      </div>
      {/* Submit */}
      <motion.button
        ref={dropZoneRef}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-(--purple) mx-auto duration-300 text-white text-sm rounded-2xl w-[300px] sm:text-base px-6 py-2 cursor-pointer"
        type="submit"
      >
        Отправить
      </motion.button>
    </form>
  );
};

export default FeedbackForm;
// hover:shadow-2xl
