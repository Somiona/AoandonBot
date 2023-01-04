import { Context, Schema } from 'koishi'

export const name = 'aoandon-deamon'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.on('message', (session) => {
    if (session.content === 'mcdr-test') {
      session.send('pong! from Aoandon powered by koishi.js aaa')
    }
  })
}
