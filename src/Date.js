/**
 * Represents a date.
 */
export class Date {
  #yyyy
  #mm
  #dd
  /**
   * Initializes a new instance of the Date class.
   *
   * @param {number} year - The year (yyyy)
   * @param {number} month - The month (mm)
   * @param {number} day - The day (dd)
   */
  constructor (year, month, day) {
    this.#yyyy = year
    this.#mm = month
    this.#dd = day
  }
}
