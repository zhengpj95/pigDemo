import { BaseInfoBase } from "./BaseInfo.generated";
import { getProxy } from "@base/mvc/Facade";
import { ModuleType, ProxyType } from "@def/ModuleConst";
import { IHomeData } from "@def/home";
import { HomeProxy } from "../HomeProxy";
import { emitter } from "@base/mgr/MessageMgr";
import { CommonEvent, IAlertDialogData } from "@def/misc";
import { TimeUtils } from "@base/utils/TimeUtils";
import Handler = Laya.Handler;
import Box = Laya.Box;
import Label = Laya.Label;

const { regClass } = Laya;

@regClass()
export class BaseInfo extends BaseInfoBase {

  onAwake() {
    super.onAwake();
    this.listItem.renderHandler = Handler.create(this, this.onRenderListItem, undefined, false);
    this.listItem.selectHandler = Handler.create(this, this.onSelectListItem, undefined, false);
    this.listItem.vScrollBarSkin = "";
  }

  onEnable() {
    super.onEnable();
  }

  onOpened(param: any) {
    super.onOpened(param);
    const proxy: HomeProxy = getProxy(ModuleType.HOME, ProxyType.HOME);
    this.listItem.array = proxy.getDayList();
  }

  private onRenderListItem(item: Box, index: number): void {
    const data: IHomeData = this.listItem.getItem(index);
    const labDesc = <Label>item.getChildByName("labDesc");
    labDesc.text = data.title;
    const labDay = <Label>item.getChildByName("labDay");
    const date = new Date(data.date[0], data.date[1] - 1, data.date[2]);
    labDay.html = true;
    labDay.text = data.type === 1
      ? "已经 " + this.generateHtml(TimeUtils.calDays(date.getTime()), "#239e5a")
      : "还有 " + this.generateHtml(TimeUtils.calFutureDays(date.getTime()), "#e64a4a");
  }

  // html,ubb
  private generateHtml(str: string | number, color: string = "#000000"): string {
    return `[color=${color}]${str}[/color]`;
  }

  private onSelectListItem(index: number): void {
    if (index < 0) return;
    const data: IHomeData = this.listItem.getItem(index);
    this.listItem.selectedIndex = -1;

    const timeList: number[] = data.date;
    let timeStrList: string[] = [];
    for (const d of timeList) {
      timeStrList.push(("" + d).padStart(2, "0"));
    }
    const desc = timeStrList.join("-")
      + ("\n".repeat(2))
      + data.desc;
    emitter.emit(CommonEvent.ALERT_DIALOG, <IAlertDialogData>{
      title: data.title,
      desc: desc,
    });
  }
}