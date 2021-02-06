const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

const players = require('./lib/funcs/players');

client.once('ready', () => {
  console.log('ready')
})

client.login(token)


client.on('message', message => {
  var content = message.content.split(' ');
  var command = content.shift()
  if(command === `${prefix}profile`) {  
    players.getPlayerProfile(content[0], 5).then(res => {
      if(res.error) 
      throw (`Player \`${content[0]}\` does not exist, check your spelling.`)

      var eventsCombined = res.activities.map(row => {
        return `[${row.date}] ${row.text}\n----- ${row.details}`
      }, [])

      var embed = {
        "content": `\nUser: ${res.name}\nCombat Level: ${res.combatlevel}\nRank: ${res.rank}`,
        "embed": 
          {
            "description": `Logged In: ${res.loggedIn}`,
            "color": 9756011,
            "fields": [
              {
                "name": "Melee / Ranged / Magic",
                "value": `${res.melee} / ${res.ranged} / ${res.magic}`
              },
              {
                "name": "Last 5 Events:",
                "value": eventsCombined.join('\n\n')
              }
            ]
          }
        
      }
      
      message.reply(embed)
    }).catch(e => {
      message.reply(e)
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
