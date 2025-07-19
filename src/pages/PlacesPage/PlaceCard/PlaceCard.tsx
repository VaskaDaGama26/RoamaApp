import type { PlaceItemData } from '../types';
import LazyMediaWithSkeleton from '../../../components/LazyMediaWithSkeleton';

const PlaceCard: React.FC<{ click: () => void; item: PlaceItemData }> = ({ click, item }) => {
  return (
    <article
      onClick={click}
      className="bg-[--bg-neutral] relative hover:bg-[--bg-neutralHover] rounded-[6px] w-full card cursor-pointer transition after:absolute after:block after:w-full after:h-full after:top-0 after:left-0 after:z-50 after:duration-500 hover:after:bg-[#00000038]"
    >
      <LazyMediaWithSkeleton
        type="image"
        height="400px"
        src={`${import.meta.env.BASE_URL}${item.image}`}
        className="w-full object-cover"
      />
    </article>
  );
};

export default PlaceCard;
