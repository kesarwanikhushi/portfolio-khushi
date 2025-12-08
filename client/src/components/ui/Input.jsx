const Input = ({ 
  label, 
  type = 'text', 
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-dark-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-2.5 rounded-lg border transition-all duration-200
          ${error 
            ? 'border-red-500 focus:border-red-600 focus:ring-red-500' 
            : 'border-dark-300 focus:border-primary-500 focus:ring-primary-500'
          }
          focus:outline-none focus:ring-2 focus:ring-offset-0
          disabled:bg-dark-100 disabled:cursor-not-allowed
          text-dark-900 placeholder-dark-400
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
