import { BaseController } from "../../core/common";

export class CommandController extends BaseController {
  public run() {
    console.log("run");
  }

  public help() {
    console.log("help");
  }
}
