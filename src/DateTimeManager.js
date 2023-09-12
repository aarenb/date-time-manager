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
    } else if (time.charAt(5) === 'p' && time.charAt(6) === 'm') { // if pm
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
