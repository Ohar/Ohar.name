const dwPcClassList = [
  require('./list/druid.jsx'),
  require('./list/dwarf.jsx'),
  require('./list/incinerator.jsx'),
  require('./list/inventor.jsx'),
  require('./list/noble.jsx'),
  require('./list/priest.jsx'),
  require('./list/ranger.jsx'),
  require('./list/rogue.jsx'),
  require('./list/savage.jsx'),
  require('./list/shorty.jsx'),
  require('./list/sorcerer.jsx'),
  require('./list/warlock.jsx'),
  require('./list/warrior.jsx'),
]

module.exports = dwPcClassList

module.exports.dwPcClassCollection = dwPcClassList.reduce(
  (collection, item) => ({
    ...collection,
    [item.id]: item,
  }),
  {}
)
