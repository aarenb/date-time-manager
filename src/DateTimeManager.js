/**
 * Represents a DateTimeManager.
 */
export class DateTimeManager {
  /**
   * Formats time into the 24 hour clock.
   *
   * @param {string} time - The time to format in 12 hour clock (hh:mmxm).
   * @returns {string} The time formated in the 24 hour clock (hh:mm).
   */
  to24HourClock (time) {
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
}
