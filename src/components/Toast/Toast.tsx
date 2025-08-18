import { useEffect, useState, useRef } from 'react';
import './Toast.css';

interface ToastProps {
  message: string;
  onClose: () => void;
  timeout?: number;
}

const Toast = ({ message, onClose, timeout }: ToastProps) => {
  const [closing, setClosing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (timeout === undefined) return;

    const timer = setTimeout(() => setClosing(true), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;

    const handleAnimationEnd = () => {
      if (closing) onClose();
    };

    node.addEventListener('animationend', handleAnimationEnd);
    return () => node.removeEventListener('animationend', handleAnimationEnd);
  }, [closing, onClose]);

  return (
    <div
      ref={ref}
      onClick={() => setClosing(true)}
      className={`
        fixed top-5 right-5
        bg-purple-700 text-white
        px-5 py-3 rounded-lg
        shadow-lg
        cursor-pointer
        z-[1100]
        toast
        ${closing ? 'animate-fadeOut' : 'animate-fadeIn'}
      `}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Toast;
