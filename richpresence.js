const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('')
    .setType('STREAMING')
    .setURL('https://twitch.tv/rpc')
    .setState('')
    .setName('')
    .setDetails('')
    .setParty({
        max: 9999,
        current: 9998,
        id: Discord.getUUID(),
    })

    .setAssetsLargeImage('') /*add a url*/
    .setAssetsLargeText('')
    .setAssetsSmallImage('') /*add a url*/
    .setAssetsSmallText('')
    .addButton('NAME', 'URL')
    .addButton('NAME', 'URL')
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); /*dnd, online, invisible, idle*/
})

client.login("TOKEN HERE")