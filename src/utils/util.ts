import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export function formatDateTime(date: Date | string | number): string {
    return dayjs(date).format('YYYY.MM.DD HH:mm:ss');
}

export function formatTime(date: Date | string | number): string {
    return dayjs(date).format('HH:mm:ss');
}

export function getBgColor(value: number): string {
    // const oxy = Number(currentData && currentData.oxy);
    if (value <= 18.1 || value >= 23.5) return '#f50';
    else if (value > 18.1 && value < 18.3) return '#fadb14';
    else if (value >= 23.2 && value < 23.5 ) return '#fadb14';
    else return '#87d068';
}