import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, CartesianGrid } from 'recharts';
import { getChartData } from '../utils/getChartData';

const ContinentChart = () => {
  const data = getChartData();

  return (
    <div className="w-full max-w-5xl mx-auto p-2.5 sm:p-4 bg-white shadow-md rounded-[6px]">
      <h2 className="text-base/tight sm:text-xl/tight font-semibold mb-4 text-center">
        Средний чек по материкам
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className="hidden sm:block" dataKey="continent" />
          <YAxis tickFormatter={(value) => `$${value}`} />
          <Tooltip
            formatter={(value: number) => `$${value}`}
            labelFormatter={(label: string) => `${label}`}
          />
          <Bar dataKey="Среднее" fill="var(--purple)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContinentChart;
