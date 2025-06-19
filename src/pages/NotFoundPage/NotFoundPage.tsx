import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-start items-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Упс! Такой страницы не существует.</p>
      <Link
        to="/"
        className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
