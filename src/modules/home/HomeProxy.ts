import { BaseProxy } from "@base/mvc/BaseProxy";
import { IHabitData, IHomeData, IHomeProxy } from "@def/home";
import { Second, TimeUtils } from "@base/utils/TimeUtils";

/**
 * @date 2024/6/3
 */
export class HomeProxy extends BaseProxy implements IHomeProxy {
  private _days: IHomeData[] = [];
  private _habits: IHabitData[] = [];
  private _dateTime: number;

  public init() {
    this._dateTime = Math.floor(Date.now() / 1000);
    Laya.loader.load("resources/json/day.json", Laya.Loader.JSON).then(a => {
      if (a["data"]) {
        this._days.push(...a["data"]);
      }
    });

    Laya.loader.load("resources/json/habit.json", Laya.Loader.JSON).then(a => {
      if (a["data"]) {
        this._habits.push(...a["data"]);
      }
    });

    // Laya.loader.fetch("resources/json/habit.json", "json").then(a => {
    //   console.log("fetch: ", a);
    // });
  }

  public getDayList(): IHomeData[] {
    return this._days.concat();
  }

  public getHabitList(): IHabitData[] {
    this.resetHabitList();
    return this._habits.concat().sort((a, b) => a.isDone - b.isDone);
  }

  public setHabitState(id: number, isDone = true): void {
    this.resetHabitList();
    for (let data of this._habits) {
      if (data.id === id) {
        data.isDone = isDone ? 1 : 0;
        return;
      }
    }
  }

  // 今日积分
  public getDailyScore(): number {
    let score = 0;
    for (let item of this._habits) {
      if (item.isDone) {
        score += item.score;
      }
    }
    return score;
  }

  // 总积分
  public getTotalScore(): number {
    return this.getDailyScore() + 10;
  }

  // 重置
  private resetHabitList(): void {
    const lastZeroTime = TimeUtils.getZeroTime(this._dateTime ?? 0);
    const curZeroTime = TimeUtils.getZeroTime(Date.now() / 1000);
    if (curZeroTime - lastZeroTime >= Second.DAY) {
      this._habits.map(item => item.isDone = 0);// 跨天后重置
      this._dateTime = Math.floor(Date.now() / 1000);
    }
  }
}