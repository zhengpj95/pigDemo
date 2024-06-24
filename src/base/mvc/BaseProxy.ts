import { emitter } from "@base/mgr/MessageMgr";

/**
 * @date 2024/6/3
 */
export class BaseProxy {
  public init(): void {
    //
  }

  public emit(event: string, args?: any): void {
    emitter.emit(event, args);
  }

  public on(
    event: string,
    method: (...args: any) => void,
    caller: any,
    args?: any,
  ): void {
    emitter.on(event, method, caller, args);
  }
}
