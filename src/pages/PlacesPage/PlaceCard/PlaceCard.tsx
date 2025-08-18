import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton/LazyMediaWithSkeleton';

const PlaceCard = ({
  click,
  title,
  image,
}: {
  click: () => void;
  title: string;
  image: string;
}) => {
  return (
    <article
      onClick={click}
      className="card relative w-full cursor-pointer rounded-[6px] bg-[--bg-neutral] transition after:absolute after:top-0 after:left-0 after:z-50 after:block after:h-full after:w-full after:duration-500 hover:bg-[--bg-neutralHover] hover:after:bg-[#00000038]"
    >
      <LazyMediaWithSkeleton
        type="image"
        height="400px"
        alt={title}
        src={`${import.meta.env.BASE_URL}${image}`}
        className="w-full object-cover"
      />
    </article>
  );
};

export default PlaceCard;
