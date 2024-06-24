import { BaseModule } from "@base/mvc/BaseModule";
import { ModuleType, ProxyType } from "@def/ModuleConst";
import { MemoProxy } from "./MemoProxy";

/**
 * @date 2024/6/3
 */
export class MemoModule extends BaseModule {
  constructor() {
    super(ModuleType.MEMO);
  }

  initProxy() {
    super.initProxy();
    this.regProxy(ProxyType.MEMO, MemoProxy);
  }
}