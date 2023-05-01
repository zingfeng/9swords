import { Module } from "../../core/common";
import { CommandController } from "./command.controller";

@Module({
  name: "command",
  description: "command module",
  controller: CommandController,
})
export class CommandModule {}
