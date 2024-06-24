import { BaseModule } from "@base/mvc/BaseModule";
import { ModuleType, ProxyType } from "@def/ModuleConst";
import { HomeProxy } from "./HomeProxy";

/**
 * @date 2024/6/3
 */
export class HomeModule extends BaseModule {
  constructor() {
    super(ModuleType.HOME);
  }

  initProxy() {
    super.initProxy();
    this.regProxy(ProxyType.HOME, HomeProxy);
  }

  initMdr() {
    super.initMdr();
  }
}