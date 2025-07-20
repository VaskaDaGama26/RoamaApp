import { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="
          fixed top-5 right-5
          bg-purple-700 text-white
          px-5 py-3 rounded-lg
          shadow-lg
          animate-fadeInOut
          z-[1100]
        "
      role="alert"
    >
      {message}
    </div>
  );
};

export default Toast;
