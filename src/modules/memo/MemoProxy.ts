import { BaseProxy } from "@base/mvc/BaseProxy";
import { IMemoProxy } from "@def/memo";

/**
 * 数据存储
 * @date 2024/6/3
 */
export class MemoProxy extends BaseProxy implements IMemoProxy {

  public saveData(key: string, data: any): boolean {
    return false;
  }

  public getData<T>(key: string): T | undefined {
    return undefined;
  }

}