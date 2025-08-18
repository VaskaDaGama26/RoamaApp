import type { ReactNode } from 'react';

interface FeedbackInputWrapperProps {
  label: string;
  error?: string;
  children: ReactNode;
}

const FeedbackInputWrapper = ({ label, error, children }: FeedbackInputWrapperProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-sm sm:text-base">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FeedbackInputWrapper;
