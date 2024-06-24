import { BaseCommand } from "@base/mvc/BaseCommand";
import { IAlertDialogData } from "@def/misc";

/**
 * @date 2024/6/11
 */
export class AlertDialogCmd extends BaseCommand {
  public exec(args: IAlertDialogData) {
    Laya.loader.load("prefabs/AlertDialog.lh").then(res => {
      let dlg: Laya.Dialog = res.create();
      dlg.open(true, args);
    });
  }
}