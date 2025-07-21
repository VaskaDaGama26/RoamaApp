import moreIcon from '/icons/more.svg';
import calendarIcon from '/events/icons/calendar.svg';
import pathIcon from '/events/icons/path.svg';

const ArticleDetails = ({
  place,
  time,
  link,
}: {
  place: string | undefined;
  time: string | undefined;
  link?: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between w-full items-start">
      {(place || time) && (
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          {place && (
            <p className="text-gray-500 flex flex-row gap-1">
              <img src={pathIcon} alt="Время проведения" />
              {place}
            </p>
          )}
          {time && (
            <p className="text-gray-500 flex flex-row gap-1">
              <img src={calendarIcon} alt="Время проведения" /> {time}
            </p>
          )}
        </div>
      )}

      {link && (
        <a
          className="text-gray-500 text-sm lg:text-base flex flex-row gap-1 items-center group transition-transform"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          Подробнее
          <img
            className="duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1 w-4 h-4"
            src={moreIcon}
            alt="Подробнее"
          />
        </a>
      )}
    </div>
  );
};

export default ArticleDetails;
