module.exports = text => text
  ? text
    .toString()
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/Ё/g, 'Е')
    .replace(/ё/g, 'е')
    .replace(/[.,:-]/g, '')
  : ''
