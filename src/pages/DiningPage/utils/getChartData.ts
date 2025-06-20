import diningData from '../diningData.json';

export const getChartData = () => {
  const continentSums: Record<string, number> = {};
  const continentCounts: Record<string, number> = {};

  diningData.forEach(({ continent, bill }) => {
    const numericBill = parseFloat(bill);
    if (!isNaN(numericBill)) {
      continentSums[continent] = (continentSums[continent] || 0) + numericBill;
      continentCounts[continent] = (continentCounts[continent] || 0) + 1;
    }
  });

  return Object.entries(continentSums).map(([continent, sum]) => {
    const count = continentCounts[continent] || 1;
    return {
      continent,
      Среднее: Math.round(sum / count),
    };
  });
};
