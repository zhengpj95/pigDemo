import { initModules } from "./modules/InitModules";
import { initFacade } from "@base/mvc/Facade";
import { initEmitter } from "@base/mgr/MessageMgr";
import { LayerMgr } from "@base/mgr/LayerMgr";

/**
 * @date 2024/6/3
 */
export default class App {
  public static init(): void {
    initEmitter();
    initFacade();

    // 注册所有模块
    initModules();

    // Laya.stage.on(Laya.Event.RESIZE, App.onResize);
  }

  public static onResize() {
    console.log(11111, "onResize");
    LayerMgr.ins().onResize();
  }
}
