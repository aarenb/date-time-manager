/**
 * Represents a DateTimeManager.
 */
export class DateTimeManager {
  /**
   * Formats time into the 24 hour clock.
   *
   * @param {string} time - The time to format (hh:mm xm).
   * @returns {string} The time formated in the 24 hour clock.
   */
  to24HourClock (time) {
    if (typeof time !== 'string') {
      throw new TypeError('The passed argument is not a string.')
    }

    if (time.charAt(5) === 'a' && time.charAt(6) === 'm') { // if am
      // basically just have to remove the am at the end here
      // 12 = 00
      return 'am'
    } else if (time.charAt(5) === 'p' && time.charAt(6) === 'm') { // if p
      const hh = `${time.charAt(0)}${time.charAt(1)}`
      switch (hh) {
        case '01':
          console.log('13')
          break
        case '02':
          console.log('14')
          break
        case '03':
          console.log('15')
          break
        case '04':
          console.log('16')
          break
        case '05':
          console.log('17')
          break
        case '06':
          console.log('18')
          break
        case '07':
          console.log('19')
          break
        case '08':
          console.log('20')
          break
        case '09':
          console.log('21')
          break
        case '10':
          console.log('22')
          break
        case '11':
          console.log('23')
          break
        case '12':
          console.log('12')
          break
      }
      /*
      01 = 13
      02 = 14
      03 = 15
      04 = 16
      05 = 17
      06 = 18
      07 = 19
      08 = 20
      09 = 21
      10 = 22
      11 = 23
      12 = 12
      */
      return 'pm'
    } else {
      throw new TypeError('The passed argument is not a valid 12h clock timestamp.') // TODO, change error text??
    }
  }
}
