function isHexColor (hex) {
    return typeof hex === 'string'
        && hex.length === 6
        && !isNaN(Number('0x' + hex))
  }
  
  // or as arrow function (ES6+)
  isHexColor = hex => typeof hex === 'string' && hex.length === 6 && !isNaN(Number('0x' + hex))
  
  console.log(isHexColor('AABBCC'))   // true
  console.log(isHexColor('AABBCC11')) // false
  console.log(isHexColor('XXBBCC'))   // false
  console.log(isHexColor('AAXXCC'))   // false