import { BarChart, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer, CartesianGrid } from 'recharts';
import type { ChartDataPoint } from '../types';

const ContinentChart = ({ data }: { data: Array<ChartDataPoint> }) => {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-[6px] bg-white p-2.5 shadow-md sm:p-4">
      <h2 className="mb-4 text-center text-base/tight font-semibold sm:text-xl/tight">
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
