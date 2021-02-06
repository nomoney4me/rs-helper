const fetch = require('node-fetch');

module.exports = {
  getPlayerProfile: (username, activities) => {
    return fetch(`https://apps.runescape.com/runemetrics/profile/profile?user=${username}&activities=${activities}`).then(res => res.json())
  }
}