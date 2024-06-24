import { BaseModule } from "@base/mvc/BaseModule";
import { OpenViewCmd } from "./cmd/OpenViewCmd";
import { CloseViewCmd } from "./cmd/CloseViewCmd";
import { CommonEvent } from "@def/misc";
import { ModuleType } from "@def/ModuleConst";
import { AlertDialogCmd } from "./cmd/AlertDialogCmd";

/**
 * @date 2024/4/17
 */
export class MiscModule extends BaseModule {
  public constructor() {
    super(ModuleType.MISC);
  }

  initCmd() {
    super.initCmd();
    this.regCmd(CommonEvent.OPEN_VIEW, OpenViewCmd);
    this.regCmd(CommonEvent.CLOSE_VIEW, CloseViewCmd);
    this.regCmd(CommonEvent.ALERT_DIALOG, AlertDialogCmd);
  }
}
