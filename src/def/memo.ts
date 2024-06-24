/**
 * @date 2024/6/5
 */
export interface IMemoProxy {
  /**保存数据*/
  saveData(key: string, data: any): boolean;

  /**获取数据*/
  getData<T>(key: string): T | undefined;
}