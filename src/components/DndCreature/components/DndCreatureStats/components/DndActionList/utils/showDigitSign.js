export default digit => digit === 0
  ? digit
  : digit > 0
    ? `+${digit}`
    : `−${digit}`
