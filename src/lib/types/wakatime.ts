type Category = {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
};

type Language = {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
};

type Editor = {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
};

type OperatingSystem = {
  name: string;
  total_seconds: number;
  percent: number;
  digital: string;
  text: string;
  hours: number;
  minutes: number;
  seconds: number;
};

type BestDay = {
  date?: string;
  text?: string;
};

type Range = {
  start: string;
  start_date: string;
  start_text: string;
  end: string;
  end_date: string;
  end_text: string;
  timezone: string;
};

export type WakatimeAll = {
  total_seconds: number;
  text: string;
  decimal: string;
  digital: string;
  daily_average: number;
  is_up_to_date: boolean;
  percent_calculated: number;
  range: Range;
  timeout: number;
};

export type Wakatime7Days = {
  total_seconds: number;
  total_seconds_including_other_language: number;
  daily_average: number;
  daily_average_including_other_language: number;
  human_readable_total: string;
  human_readable_total_including_other_language: string;
  human_readable_daily_average: string;
  human_readable_daily_average_including_other_language: string;
  days_including_holidays: number;
  days_minus_holidays: number;
  holidays: number;
  categories: Category[];
  languages: Language[];
  editors: Editor[];
  operating_systems: OperatingSystem[];
  status: string;
  is_up_to_date: boolean;
  is_up_to_date_pending_future: boolean;
  range: string;
  percent_calculated: number;
  timeout: number;
  writes_only: boolean;
  is_already_updating: boolean;
  is_stuck: boolean;
  user_id: string;
  username: string;
  is_including_today: boolean;
  human_readable_range: string;
  is_coding_activity_visible: boolean;
  is_other_usage_visible: boolean;
  start: string;
  end: string;
  modified_at: string;
  best_day?: BestDay;
};
