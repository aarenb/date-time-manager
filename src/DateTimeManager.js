/**
 * Formats time into the 24 hour clock.
 *
 * @param {string} time - The time to format in 12 hour clock (hh:mmxm).
 * @returns {string} The time formated in the 24 hour clock (hh:mm).
 */
export function to24HourClock (time) {
  if (typeof time !== 'string') {
    throw new TypeError('The passed argument is not a string.') // TODO: break this out later?
  }

  let newHH = ''
  const hh = `${time.charAt(0)}${time.charAt(1)}`
  const mm = `${time.charAt(3)}${time.charAt(4)}`
  const xm = `${time.charAt(5)}${time.charAt(6)}`

  if (xm === 'am') {
    if (hh === '12') { // TODO: break this out?
      newHH = '00'
    } else {
      newHH = hh
    }
    return `${newHH}:${mm}`
  } else if (xm === 'pm') {
    switch (hh) { // TODO: break this out?
      case '01':
        newHH = '13'
        break
      case '02':
        newHH = '14'
        break
      case '03':
        newHH = '15'
        break
      case '04':
        newHH = '16'
        break
      case '05':
        newHH = '17'
        break
      case '06':
        newHH = '18'
        break
      case '07':
        newHH = '19'
        break
      case '08':
        newHH = '20'
        break
      case '09':
        newHH = '21'
        break
      case '10':
        newHH = '22'
        break
      case '11':
        newHH = '23'
        break
      case '12':
        newHH = '12'
        break
    }
    return `${newHH}:${mm}` // TODO: remove dublicate??
  } else {
    throw new TypeError('The passed argument is not a valid 12h clock timestamp.') // TODO, change error text?? + should this be just 'error'?
  }
}

/**
 * Formats time into the 12 hour clock.
 *
 * @param {string} time - The time formated in the 24 hour clock (hh:mm).
 * @returns {string} The time to format in 12 hour clock (hh:mmxm).
 */
export function to12HourClock (time) {
  if (typeof time !== 'string') {
    throw new TypeError('The passed argument is not a string.') // TODO: break this out later?
  }

  // TODO: dublicated code, break out???
  let newHH = ''
  const hh = `${time.charAt(0)}${time.charAt(1)}`
  const mm = `${time.charAt(3)}${time.charAt(4)}`

  if (parseInt(hh) < 12 && parseInt(hh) > 0) {
    newHH = hh
    return `${newHH}:${mm}am`
  } else if (hh === '00') {
    newHH = 12
    return `${newHH}:${mm}am`
  } else {
    switch (hh) { // TODO: break this out?
      case '12':
        newHH = hh
        break
      case '13':
        newHH = '01'
        break
      case '14':
        newHH = '02'
        break
      case '15':
        newHH = '03'
        break
      case '16':
        newHH = '04'
        break
      case '17':
        newHH = '05'
        break
      case '18':
        newHH = '06'
        break
      case '19':
        newHH = '07'
        break
      case '20':
        newHH = '08'
        break
      case '21':
        newHH = '09'
        break
      case '22':
        newHH = '10'
        break
      case '23':
        newHH = '11'
        break
    }
    return `${newHH}:${mm}pm`
  }
}

// What if you make a date object and then are able to get different formats from the date object??
/**
 * Format a certain date.
 *
 * @param {string} date - The date to format (mm/dd/yy)
 * @param {string} format - The format you want it in (ex.dd/mm/yy)
 * @returns {string} The formated date.
 */
export function formatDate (date, format) {
  return 'date'
}
