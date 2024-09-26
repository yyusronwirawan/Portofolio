'use client';

import { Pie, PieChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/molecules';
import { Wakatime7Days } from '@/lib/types';
import { languageColors } from '@/lib/consts';

type Props = {
  languages: Wakatime7Days['languages'];
};

const useLanguagesChart = (languages: Props['languages']) => {
  const shortedLanguages = languages.filter(x => x.percent >= 1);
  const chartConfig = {} as ChartConfig;
  const chartData = [] as { name: string; value: number; fill: string; }[];

  shortedLanguages.forEach(lang => {
    const key = languageColors[lang.name] ? lang.name : 'Unknown Language';

    chartConfig[key] = { label: key, color: languageColors[key] };
    chartData.push({
      name: lang.name,
      value: lang.percent,
      fill: languageColors[key],
    });
  });

  const shortedTotalPercent = shortedLanguages.reduce((acc, curr) => curr.percent + acc, 0);
  const otherLanguagesPercent = +(100 - shortedTotalPercent).toFixed(2);
  const otherKey = 'Other';

  chartConfig[otherKey] = { label: `${otherKey} (Σ < 1%)`, color: languageColors[otherKey] };
  chartData.push({
    name: otherKey,
    value: otherLanguagesPercent,
    fill: languageColors[otherKey],
  });

  return { chartConfig, chartData };
};

export function ChartLanguages({ languages }: Props) {
  const { chartConfig, chartData } = useLanguagesChart(languages);

  return (
    <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
      <PieChart accessibilityLayer margin={{ top: 0, bottom: 0 }}>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend
          content={<ChartLegendContent className='flex-col items-start gap-2' />}
          layout='vertical'
          align='right'
          verticalAlign='middle'
        />
        <Pie dataKey='value' radius={4} data={chartData} />
      </PieChart>
    </ChartContainer>
  );
}
