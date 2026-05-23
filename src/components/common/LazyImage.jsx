// Image optimization utility component
import React from 'react';

export const LazyImage = ({ src, alt, className, width, height, ...props }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      style={{
        opacity: isLoaded ? 1 : 0.7,
        transition: 'opacity 0.3s ease-in-out',
      }}
      {...props}
    />
  );
};

export default LazyImage;
