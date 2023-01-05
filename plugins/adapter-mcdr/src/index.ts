import { Bot, Logger, Schema } from 'koishi'
import {
  DefinePlugin, InjectLogger,
  PluginDef, PluginSchema, RegisterSchema,
  Reusable, SchemaProperty, UsePlugin
} from "koishi-thirdeye";

import { MCDReforgedAdapter } from './adapter'
import { name } from './consts'
export { name }

@RegisterSchema()
export class MCDReforgedBotConfig {
  @SchemaProperty({
    description: "MessageBridge加密私钥",
    type: Schema.string(),
    required: true
  })
  privateKey: string;

  platform = 'mcdr';
  get selfId() {
    return "123";
  }
}

@Reusable()
@PluginSchema(MCDReforgedBotConfig)
@DefinePlugin()
export default class MCDReforgedBot extends Bot<Partial<MCDReforgedBotConfig>> {
  internal = {};

  @InjectLogger(name)
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
