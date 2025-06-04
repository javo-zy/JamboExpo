import React from 'react';

interface LogoProps {
  className?: string; // Allows controlling overall size and other image properties from parent
  imageUrl?: string; // Optional: allow passing a different image URL if needed
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  imageUrl = 'https://storage.googleapis.com/pai-images/5f13a873e910424194127dd3a4128406.png' 
}) => {
  return (
<img src="" alt="" />
  );
};

export default Logo;