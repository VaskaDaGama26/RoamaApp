import BlockHeading from '../../../components/BlockHeading';
import type { AppData } from '../types';
import appStore from '/icons/practical/appstore.svg';
import googlePlay from '/icons/practical/googleplay.svg';

const AppsBlock = ({ data }: { data: AppData[] }) => {
  return (
    <div className="flex flex-col items-center gap-9 mt-16 mb-24 px-2.5 lg:px-0">
      <BlockHeading label="Полезные приложения" />
      <div className="flex flex-row flex-wrap gap-10 justify-center lg:justify-between">
        {data.map((app, index) => (
          <div key={index} className="flex flex-row gap-4">
            <img
              className="border border-stone-300 w-fit rounded-full h-10"
              src={`/RoamaApp/${app.icon}`}
              alt={app.title}
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2 max-w-56">
                <h3 className="text-lg/tight font-medium">{app.title}</h3>
                <p className="text-sm/tight text-(--gray)">{app.desc}</p>
              </div>

              <div className="flex flex-row justify-start gap-4 mt-3">
                {app.googleLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer duration-300 hover:scale-95"
                    href={app.googleLink}
                  >
                    <img className="h-8" src={googlePlay} alt="" />
                  </a>
                )}
                {app.appleLink && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer duration-300 hover:scale-95"
                    href={app.appleLink}
                  >
                    <img className="h-8" src={appStore} alt="" />
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
