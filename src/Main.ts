import App from "./App";

const { regClass, property } = Laya;

@regClass()
export class Main extends Laya.Script {
  onEnable() {
    //
  }

  onStart() {
    console.log("Game start", this.owner);

    App.init();
    this.initConfig();
    Laya.stage.on(Laya.Event.RESIZE, App.onResize);

    Laya.Scene.open("scenes/HomeScene.ls");
  }

  private initConfig(): void {
    Laya.Dialog.manager.closeEffectHandler = null;
  }
}
