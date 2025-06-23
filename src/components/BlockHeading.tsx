interface BlockHeadingProps {
  label: string;
  image?: string;
  imageClasses?: string;
}

const BlockHeading = ({ label, image, imageClasses }: BlockHeadingProps) => {
  return (
    <div className="relative w-full flex flex-row justify-center">
      <h2 className="text-xl/tight sm:text-2xl/tight text-center w-fit font-semibold pb-1 border-b-2 border-(--gray25)">
        {label}
      </h2>
      <img className={`absolute ${imageClasses}`} src={image} alt="" />
    </div>
  );
};

export default BlockHeading;
