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
    if (value <= 18.1 || value >= 23.5) return '#ff0000';
    else if (value > 18.1 && value < 20.3) return '#2bfe00';
    else if (value >= 21.5 && value < 23.5 ) return '#2bfe00';
    else return '#0091ff';
}