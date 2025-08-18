import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="my-10 flex flex-col items-center justify-start px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold">404</h1>
      <p className="mb-6 text-xl">Упс! Такой страницы не существует.</p>
      <Link
        to="/"
        className="rounded-lg bg-neutral-900 px-6 py-2 text-white transition duration-200 hover:bg-neutral-700"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
