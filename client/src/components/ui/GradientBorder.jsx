const GradientBorder = ({ 
  children, 
  className = '',
  borderWidth = 1,
  rounded = 'xl' 
}) => {
  return (
    <div 
      className={`relative p-[${borderWidth}px] bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-${rounded} ${className}`}
    >
      <div className={`bg-dark-950 rounded-${rounded} h-full w-full`}>
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;
