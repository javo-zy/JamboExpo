
import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  className?: string; // For the wrapper div
  inputClassName?: string; // Specifically for the input element
}

const FormInput: React.FC<FormInputProps> = ({ label, id, type = 'text', className, inputClassName, ...props }) => {
  return (
    <div className={className}>
      {label.trim() && ( // Only render label if it's not empty (for grid alignment cases)
         <label htmlFor={id} className="block text-xs text-gray-600 mb-1">
           {label}
         </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        className={`w-full p-2.5 border border-gray-300 rounded-md shadow-sm bg-white focus:ring-red-500 focus:border-red-500 text-sm ${inputClassName || ''}`}
        {...props}
      />
    </div>
  );
};

export default FormInput;