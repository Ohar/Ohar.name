module.exports = text => text
  .toLowerCase()
  .replace(/_/g, ' ')
  .replace(/Ё/g, 'Е')
  .replace(/ё/g, 'е')
  .replace(/[.,:\-]/g, '')
