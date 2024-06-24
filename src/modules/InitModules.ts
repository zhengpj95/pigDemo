/**
 * @date 2024/6/3
 */
import { facade } from "@base/mvc/Facade";
import { MiscModule } from "./misc/MiscModule";
import { HomeModule } from "./home/HomeModule";
import { MemoModule } from "./memo/MemoModule";

// 注册所有模块 TODO
function regModules(): void {
  facade.push(MiscModule);
  facade.push(HomeModule);
  facade.push(MemoModule);
}

// 实例化所有模块
function insModules(): void {
  facade.instantiate();
}

export function initModules(): void {
  regModules();
  insModules();
}
