import { Bot, Context, Logger, Schema} from 'koishi'

import { PluginSchema, RegisterSchema, Reusable, SchemaProperty, DefinePlugin, InjectLogger, UsePlugin, PluginDef } from "koishi-thirdeye";

import {MCDReforgedAdapter} from './adapter'

@RegisterSchema()
export class MCDReforgedBotConfig {
  constructor(_config: any) { }

  @SchemaProperty({
    description: "MessageBridge加密私钥",
    required: true
  })
  privateKey!: string;

  platform = 'mcdr';
  get selfId(){
    return "123";
  }
}

@Reusable()
@PluginSchema(MCDReforgedBotConfig)
@DefinePlugin()
export default class MCDReforgedBot extends Bot<Partial<MCDReforgedBotConfig>> {
  internal = {};

  @InjectLogger()
  logger!: Logger;

  @UsePlugin()
  private loadAdapter() {
    return PluginDef(MCDReforgedAdapter, this)
  }

  async sendMessage(channelId: string, content: string) {
    this.logger.debug('send:', content)
    return []
  }
}
