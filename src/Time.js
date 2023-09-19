/**
 * Represents a certain time.
 */
export class Time {
  #twelveH
  #twentyFourH
  /**
   * Initializes a new instance of the Time class.
   *
   * @param {string} time - The time
   * @param {number} format - The format of the entered time (12/24)
   */
  constructor (time, format) {
    if (format === 12) {
      this.twelveH = time
    }
  }
}
