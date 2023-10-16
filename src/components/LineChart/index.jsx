import { Chart } from "react-google-charts";

export const data = [
  [
    "Day",
    "Guardians of the Galaxy",
    "The Avengers",
    "Transformers: Age",
    "the x",
  ],
  [1, 37.8, 80.8, 41.8, 94],
  [2, 30.9, 69.5, 32.4, 84],
  [3, 25.4, 57, 25.7, 64],
  [4, 11.7, 18.8, 10.5, 74],
  [5, 11.9, 17.6, 10.4, 54],
  [6, 8.8, 13.6, 7.7, 74],
  [7, 7.6, 12.3, 9.6, 34],
  [8, 12.3, 29.2, 10.6, 14],
  [9, 16.9, 42.9, 14.8, 24],
  [10, 12.8, 30.9, 11.6, 34],
  [11, 5.3, 7.9, 4.7, 64],
  [12, 6.6, 8.4, 5.2, 99],
  [13, 4.8, 6.3, 3.6, 91],
  [14, 4.2, 6.2, 3.4, 4],
];

export const options = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
  },
};

export function LineChart() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
