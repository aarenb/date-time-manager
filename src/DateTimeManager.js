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
      return 'am'
    } else if (time.charAt(5) === 'p' && time.charAt(6) === 'm') { // if pm
      return 'pm'
    } else {
      throw new TypeError('The passed argument is not a valid 12h clock timestamp.') // TODO, change error text??
    }
  }
}
