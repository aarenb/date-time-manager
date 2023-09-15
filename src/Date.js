/**
 * Represents a date.
 */
export class Date {
  #yyyy
  #yy
  #mm
  #dd
  /**
   * Initializes a new instance of the Date class.
   *
   * @param {string} year - The year (yyyy)
   * @param {string} month - The month (mm)
   * @param {string} day - The day (dd)
   */
  constructor (year, month, day) {
    this.#yyyy = year
    this.#yy = `${year.charAt(2)}${year.charAt(3)}`
    this.#mm = month
    this.#dd = day
  }

  /**
   * Returns the date in a certain format.
   *
   * @param {string} format - The format to return the date in, (ex. dd/mm/yy).
   * @returns {string} The formated date.
   */
  getFormatedDate (format) {
    let date = ''
    switch (format) {
      case 'dd/mm/yyyy':
        date = `${this.#dd}/${this.#mm}/${this.#yyyy}`
        break
      case 'dd/mm/yy':
        date = `${this.#dd}/${this.#mm}/${this.#yy}`
        break
      case 'yyyy/mm/dd':
        date = `${this.#yyyy}/${this.#mm}/${this.#dd}`
        break
      case 'yy/mm/dd':
        date = `${this.#yy}/${this.#mm}/${this.#dd}`
        break
    }
    return date
  }
}
