/**
 * @date 2024/6/3
 */

export interface IHomeProxy {
}

export interface IHomeData {
  title: string;
  date: number[];
  desc: string;
  type: number; // 1过去，2未来
}

export interface IHabitData {
  id: number;
  desc: string;
  score: number;
  isDone: number;//1是完成
}