'use client'
import React from 'react';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  className?: string; // For the wrapper div
  textareaClassName?: string; // Specifically for the textarea element
}

const FormTextarea: React.FC<FormTextareaProps> = ({ label, id, className, textareaClassName, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs text-gray-600 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className={`w-full p-2.5 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-red-500 focus:border-red-500 text-sm ${textareaClassName || ''}`}
        {...props}
      />
    </div>
  );
};

export default FormTextarea;
