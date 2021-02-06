const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const players = require('./lib/funcs/players');

client.once('ready', () => {
  console.log('ready')
})

client.login(config.token)


client.on('message', message => {
  var embed = {

  }


  var content = message.content.split(' ');
  console.log(content)
  var command = content.shift()
  if(command === '!profile') {
    players.getPlayerProfile(content[0], 5).then(res => {
      message.channel.send(JSON.stringify(res))
    })
    // message.channel.send(`fetching profile of: ${content.join(' ')}`)
  }
})


// const fs = require('fs');
// const fetch = require('node-fetch');

const item = require('./lib/funcs/item.js');

const func = async () => {
  var x = await item.getItemIdByName('Bread dough');
  console.log(x)
}

func()


// const items = JSON.parse(fs.readFileSync('./cache/items.json', 'utf-8'))
// console.log(items[0])



// var category = fs.readFileSync('./rest/category.txt', 'utf-8').split('\r\n').reduce((acc, rowstr) => {
//   var row = rowstr.replace(' ', '').split('\t')
//   var type = row[1]
//   var key = row[0]
//   acc[type] = key;
//   return acc;
// }, {})


// console.log(category)



// // ## Get character profile
