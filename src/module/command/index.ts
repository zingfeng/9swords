import { Module } from "../../core/common";
import { CommandController } from "./command.controller";

@Module({
  name: "command",
  description:
    "module for run command in terminal. No need to remember all commands",
  controller: CommandController,
})
export class CommandModule {}
