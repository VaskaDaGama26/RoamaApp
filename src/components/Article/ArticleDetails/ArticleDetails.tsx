import moreIcon from '/static/icons/more.svg';
import calendarIcon from '/static/events/icons/calendar.svg';
import pathIcon from '/static/events/icons/path.svg';

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
    <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:gap-0">
      {(place || time) && (
        <div className="flex flex-col gap-2 text-sm lg:text-base">
          {place && (
            <p className="flex flex-row gap-1 text-gray-500">
              <img src={pathIcon} alt="Место проведения" />
              {place}
            </p>
          )}
          {time && (
            <p className="flex flex-row gap-1 text-gray-500">
              <img src={calendarIcon} alt="Время проведения" />
              {time}
            </p>
          )}
        </div>
      )}

      {link && (
        <a
          className="group flex flex-row items-center gap-1 text-sm text-gray-500 transition-transform lg:text-base"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          Подробнее
          <img
            className="mt-1 h-4 w-4 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            src={moreIcon}
            alt="Подробнее"
          />
        </a>
      )}
    </div>
  );
};

export default ArticleDetails;
