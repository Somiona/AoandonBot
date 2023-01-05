import * as Help from '@koishijs/plugin-help'
import mock from '@koishijs/plugin-mock'
import {App, segment} from 'koishi'

import MCDReforgedBot from '../plugins/adapter-mcdr/src'
import * as Daemon from '../plugins/aoandon-daemon/src'

const app = new App({
  port: 3000,
  host: 'localhost',
  prefix: '.'
})

app.plugin(Help);
app.plugin(mock);
app.plugin(Daemon);

app.plugin(MCDReforgedBot, {
  privateKey: 'testing key'
})

const client = app.mock.client('test_user')

app.on('bot-status-updated', (bot) => {
  console.log(`Bot ${bot.sid} status updated: ${bot.status}`)
})


/***************
 * tests begin *
 ***************/

beforeAll(() => app.start())

it('example', async () => {
  client.shouldReply('mcdr-test', 'pong! from Aoandon powered by Koishi.js')
})

afterAll(() => app.stop())
