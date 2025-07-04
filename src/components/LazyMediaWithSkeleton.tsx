import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type MediaType = 'image' | 'video';

type Props = {
  type: MediaType;
  src: string;
  alt?: string;
  height?: string;
  smHeight?: string;
  className?: string;
  poster?: string;
};

const LazyMediaWithSkeleton = ({
  type,
  src,
  alt = '',
  height = '320px',
  smHeight,
  className = '',
  poster = '',
}: Props) => {
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: smHeight ?? height,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {(!loaded || !inView) && (
        <Skeleton height="100%" width="100%" style={{ position: 'absolute', top: 0, left: 0 }} />
      )}

      {inView && type === 'image' && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={className}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}

      {inView && type === 'video' && (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          playsInline
          loop
          onLoadedData={() => setLoaded(true)}
          className={className}
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}
    </div>
  );
};

export default LazyMediaWithSkeleton;
