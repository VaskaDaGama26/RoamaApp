interface BlockHeadingProps {
  label: string;
  image?: string;
  imageClasses?: string;
}

const BlockHeading = ({ label, image, imageClasses }: BlockHeadingProps) => {
  return (
    <div className="relative flex w-full flex-row justify-center">
      <h2 className="w-fit border-b-2 border-(--gray25) pb-1 text-center text-xl/tight font-semibold sm:text-2xl/tight">
        {label}
      </h2>
      <img className={`absolute ${imageClasses}`} src={image} alt={image} />
    </div>
  );
};

export default BlockHeading;
