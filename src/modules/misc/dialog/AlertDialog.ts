import { AlertDialogBase } from "./AlertDialog.generated";
import { IAlertDialogData } from "@def/misc";

const { regClass } = Laya;

@regClass()
export class AlertDialog extends AlertDialogBase {

  onEnable() {
    super.onEnable();
    this.labTitle.text = "";
  }

  open(closeOther?: boolean, param?: IAlertDialogData) {
    super.open(closeOther, param);

    this.labTitle.text = param.title;
    this.labDesc.text = param.desc;
  }
}