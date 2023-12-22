import dayjs from "dayjs";

export function toDate(timeStr: string | Date) {
  return dayjs(timeStr).format("YYYY-MM-DD");
}

export function toDateUnix(timeStr: string | Date) {
  return dayjs(dayjs(timeStr).format("YYYY-MM-DD")).unix();
}

export function toFullTimeWithHour(timeStr: string | Date) {
  return dayjs(timeStr).format("YYYY-MM-DD HH");
}

export function toFullTimeWithMinute(timeStr: string | Date) {
  return dayjs(timeStr).format("YYYY-MM-DD HH:mm");
}

export function toFullTimeWithSecond(timeStr: string | Date) {
  return dayjs(timeStr).format("YYYY-MM-DD HH:mm:ss");
}

export function toFullTimeWithSecondUnix(timeStr: string | Date) {
  return dayjs(timeStr).unix();
}

export function toTimeWithHour(timeStr: string | Date) {
  return dayjs(timeStr).format("HH");
}

export function toTimeWithMinute(timeStr: string | Date) {
  return dayjs(timeStr).format("HH:mm");
}

export function toTimeWithSecond(timeStr: string | Date) {
  return dayjs(timeStr).format("HH:mm:ss");
}
