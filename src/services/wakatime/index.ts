'use server';

import { COMMON_MESSAGE, REVALIDATE_IN_SECONDS } from '@/lib/consts';
import { ServiceResponse, Wakatime7Days, WakatimeAll } from '@/lib/types';

const baseUrl = process.env.WAKATIME_API_URL || 'https://api.wakatime.com/api/v1';
const apiKey = process.env.WAKATIME_API_KEY;

export async function getWakatimeLast7Days(): Promise<ServiceResponse<Wakatime7Days>> {
  try {
    const response = await fetch(`${baseUrl}/users/current/stats/last_7_days`, {
      headers: {
        Authorization: `Basic ${apiKey}`,
      },
      next: {
        revalidate: REVALIDATE_IN_SECONDS,
      },
    });

    if (response.status !== 200) return { error: COMMON_MESSAGE.errorService };

    const result = await response.json() as { data: Wakatime7Days; };

    return {
      success: 'Last 7 days stats fetched successfully',
      data: result.data,
    };

  } catch (error) {
    console.error(error);

    return { error: COMMON_MESSAGE.error };
  }
}

export async function getWakatimeAll(): Promise<ServiceResponse<WakatimeAll>> {
  try {
    const response = await fetch(`${baseUrl}/users/current/all_time_since_today`, {
      headers: {
        Authorization: `Basic ${apiKey}`,
      },
      next: {
        revalidate: REVALIDATE_IN_SECONDS,
      },
    });

    if (response.status !== 200) return { error: COMMON_MESSAGE.errorService };

    const result = await response.json() as { data: WakatimeAll; };

    return {
      success: 'All stats fetched successfully',
      data: result.data,
    };

  } catch (error) {
    console.error(error);

    return { error: COMMON_MESSAGE.error };
  }
}
