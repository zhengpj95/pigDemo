/**
 * @date 2024/6/3
 */
export const enum Second {
  SECOND = 60,
  HOUR = 3600,
  DAY = 86400,
}

export class TimeUtils {
  /**计算距离这个时间多少天*/
  public static calDays(timeSec: number, isMs = true): number {
    if (!isMs) {
      timeSec *= 1000;
    }
    const date = new Date(timeSec);
    const startTime = date.getTime() / 1000;
    const curTime = Date.now() / 1000;
    return Math.ceil((curTime - startTime) / Second.DAY);
  }

  public static calFutureDays(timeSec: number, isMs = true): number {
    return Math.abs(this.calDays(timeSec, isMs)) + 1;
  }

  /**返回当前时间的0点时间，返回秒*/
  public static getZeroTime(timeSec: number): number {
    const date = new Date(timeSec * 1000);
    return date.setHours(0, 0, 0, 0) / 1000;
  }
}