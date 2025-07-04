const ArticleParagraphBlock = ({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph, index) => (
        <p className="text-sm/relaxed lg:text-base/relaxed text-justify indent-4" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ArticleParagraphBlock;
