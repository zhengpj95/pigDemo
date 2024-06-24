import Handler = Laya.Handler;
import Box = Laya.Box;
import Label = Laya.Label;
import CheckBox = Laya.CheckBox;

const { regClass } = Laya;
import { ScoreInfoBase } from "./ScoreInfo.generated";
import { HomeProxy } from "../HomeProxy";
import { getProxy } from "@base/mvc/Facade";
import { ModuleType, ProxyType } from "@def/ModuleConst";
import { IHabitData } from "@def/home";

@regClass()
export class ScoreInfo extends ScoreInfoBase {

  private _proxy: HomeProxy;

  onAwake() {
    super.onAwake();
  }

  onEnable() {
    super.onEnable();
    this.listItem.renderHandler = Handler.create(this, this.onRenderListItem, undefined, false);
    this._proxy = getProxy(ModuleType.HOME, ProxyType.HOME);
  }

  onOpened(param: any) {
    super.onOpened(param);
    this.updateListItem();
  }

  private updateListItem(): void {
    this.listItem.array = this._proxy.getHabitList();

    this.labToday.text = "今日获得积分: " + this._proxy.getDailyScore();
    this.labTotal.text = "总积分: " + this._proxy.getTotalScore();
  }

  private onRenderListItem(item: Box, index: number): void {
    if (index < 0) return;
    const data: IHabitData = item.dataSource;
    const labDesc = <Label>item.getChildByName("labDesc");
    labDesc.text = data.desc;
    const labScore = <Label>item.getChildByName("labScore");
    labScore.text = "" + data.score;
    const checkBox = <CheckBox>item.getChildByName("checkBox");
    checkBox.selected = data.isDone === 1;

    checkBox.clickHandler = Handler.create(this, this.onClickCheckBox, [item], false);
  }

  private onClickCheckBox(item: Box): void {
    if (!item) return;
    const checkBox = <CheckBox>item.getChildByName("checkBox");
    const data: IHabitData = item.dataSource;
    this._proxy.setHabitState(data.id, checkBox.selected);
    this.updateListItem();
  }
}