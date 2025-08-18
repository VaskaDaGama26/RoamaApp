import BlockHeading from '../../../components/BlockHeading/BlockHeading';
import type { AppData } from '../types';
import appStore from '/static/icons/practical/appstore.svg';
import googlePlay from '/static/icons/practical/googleplay.svg';

const AppsBlock = ({ data }: { data: AppData[] }) => {
  return (
    <div className="mt-16 mb-24 flex flex-col items-center gap-9 px-2.5 lg:px-0">
      <BlockHeading label="Полезные приложения" />
      <div className="flex flex-row flex-wrap justify-center gap-10 lg:justify-between">
        {data.map((app, index) => (
          <div key={index} className="flex flex-row gap-4">
            <img
              className="h-10 w-fit rounded-full border border-stone-300"
              src={`${import.meta.env.BASE_URL}${app.icon}`}
              alt={app.title}
            />
            <div className="flex flex-col justify-between">
              <div className="flex max-w-56 flex-col gap-2">
                <h3 className="text-lg/tight font-medium">{app.title}</h3>
                <p className="text-sm/tight text-(--gray)">{app.desc}</p>
              </div>

              <div className="mt-3 flex flex-row justify-start gap-4">
                {app.googleLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer duration-300 hover:scale-95"
                    href={app.googleLink}
                  >
                    <img className="h-8" src={googlePlay} alt="Google Play Link" />
                  </a>
                )}
                {app.appleLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer duration-300 hover:scale-95"
                    href={app.appleLink}
                  >
                    <img className="h-8" src={appStore} alt="App Store Link" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsBlock;
