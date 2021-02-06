// const path = require('path');
// const fs = require('fs');
// const items = require(path.join(__dirname, '..', 'cache', 'items.json'))
// const item_json = JSON.parse(items);

// console.log(item_json)

const fetch = require('node-fetch');

module.exports = {
  getItemIdByName: (name) => {
    return fetch(`https://runescape.wiki/api.php?action=ask&query=%5B%5BItem+name%3A%3A${name}%5D%5D%7C%3FItem+ID&format=json`).then(res => res.json()).then(res => res.query.results)
  }
}