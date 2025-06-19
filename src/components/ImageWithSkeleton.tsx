import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

const ImageWithSkeleton = ({
  height,
  smHeight,
  src,
  alt,
}: {
  height: string;
  smHeight?: string;
  src: string;
  alt: string;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Skeleton height={height} />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          display: loaded ? 'block' : 'none',
          width: '100%',
          objectFit: 'cover',
          height: smHeight ?? height,
        }}
      />
    </>
  );
};

export default ImageWithSkeleton;
