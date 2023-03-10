import { Context, Schema } from 'koishi'

export const name = 'aoandon-daemon'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.on('message', (session) => {
    if (session.content === 'mcdr-test') {
      session.send('pong! from Aoandon powered by Koishi.js')
    }
  })
}
