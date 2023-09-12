/**
 * Represents a DateTimeManager.
 */
export class DateTimeManager {
  /**
   * Formats time into the 24 hour clock.
   *
   * @param {string} time - The time to format.
   * @returns {string} The time formated in the 24 hour clock.
   */
  to24HourClock (time) {
    if (typeof time !== 'string') {
      throw new TypeError('The passed argument is not a string.')
    }

    if (time.includes('am')) {
      return 'am'
    } else if (time.includes('pm')) {
      return 'pm'
    } else {
      throw new TypeError('The passed argument is not a valid 12h clock timestamp.') // TODO, change error text??
    }
  }
}
