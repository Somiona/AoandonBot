import {Adapter, Logger} from 'koishi'

import type MCDReforgedBot from './index'

import {DefinePlugin, InjectLogger} from 'koishi-thirdeye'

@DefinePlugin()
export class MCDReforgedAdapter extends Adapter.Server<MCDReforgedBot> {

  @InjectLogger()
  private logger: Logger;

  async start(bot: MCDReforgedBot) {
    this.logger.debug('status:', 'MCDR Adapter started')
  }

  async stop(bot: MCDReforgedBot){}
}
