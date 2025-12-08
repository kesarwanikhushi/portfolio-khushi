import { TypeAnimation } from 'react-type-animation';

const AnimatedText = ({ 
  sequence, 
  className = '',
  speed = 50,
  repeat = Infinity 
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={speed}
      className={className}
      repeat={repeat}
    />
  );
};

export default AnimatedText;
