import Image = Laya.Image;
import Box = Laya.Box;
import Handler = Laya.Handler;
import Sprite = Laya.Sprite;

const { regClass } = Laya;
import { HomeSceneBase } from "./HomeScene.generated";

@regClass()
export class HomeScene extends HomeSceneBase {
  private _curSel: number = -1;
  private _iconSrc: string[] = ["icon_tree", "icon_luckyClover", "icon_tulip"];

  onAwake() {
    super.onAwake();
    this.iconList.selectHandler = Handler.create(this, this.onSelectIconList, undefined, false);
    this.iconList.renderHandler = Handler.create(this, this.onRenderIconList, undefined, false);
  }

  onEnable() {
    super.onEnable();
    this.iconList.array = [1, 2, 3];
    this.iconList.selectedIndex = 0;
  }

  onOpened(param: any) {
    super.onOpened(param);
  }

  onDestroy() {
    super.onDestroy();
    this._curSel = -1;
    this.iconList.array.length = 0;
  }

  public onSelectIconList(index: number): void {
    this._curSel = index;
    this.iconList.refresh();

    if (index === 0) {
      Laya.Scene.open("scenes/BaseInfo.ls", false).then((s) => {
        Laya.Scene.close("scenes/ScoreInfo.ls");
        Laya.Scene.close("scenes/MineInfo.ls");
      });
    } else if (index === 1) {
      Laya.Scene.open("scenes/ScoreInfo.ls", false).then((s) => {
        Laya.Scene.close("scenes/BaseInfo.ls");
        Laya.Scene.close("scenes/MineInfo.ls");
      });
    } else if (index === 2) {
      Laya.Scene.open("scenes/MineInfo.ls", false).then((s) => {
        Laya.Scene.close("scenes/BaseInfo.ls");
        Laya.Scene.close("scenes/ScoreInfo.ls");
      });
    }
  }

  private onRenderIconList(item: Box, index: number): void {
    const img = <Image>item.getChildByName("icon");
    img.skin = `atlas/icon/${this._iconSrc[index]}.png`;
    const imgSelected = <Sprite>item.getChildByName("imgSelected");
    imgSelected.visible = index === this._curSel;

    // const comp = item.getComponent(ClickScale);
    // console.log(index, comp);
  }
}