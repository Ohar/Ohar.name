const dwPcClassList = [
  require('./list/druid'),
  require('./list/dwarf'),
  require('./list/incinerator'),
  require('./list/inventor'),
  require('./list/noble'),
  require('./list/priest'),
  require('./list/ranger'),
  require('./list/rogue'),
  require('./list/savage'),
  require('./list/shorty'),
  require('./list/sorcerer'),
  require('./list/warlock'),
  require('./list/warrior'),
]

module.exports = dwPcClassList

module.exports.dwPcClassCollection = dwPcClassList.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
