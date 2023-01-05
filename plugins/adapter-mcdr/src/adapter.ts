import { Adapter, Logger } from "koishi";
import { DefinePlugin, InjectLogger } from "koishi-thirdeye";

import { name } from './consts'
import type MCDReforgedBot from "./index";
export { name }

@DefinePlugin()
export class MCDReforgedAdapter extends Adapter.Server<MCDReforgedBot> {
  @InjectLogger(name)
  private logger: Logger;

  async start(bot: MCDReforgedBot) {
    this.logger.debug("status:", "MCDR Adapter started");
  }

  async stop(bot: MCDReforgedBot) { }
}
