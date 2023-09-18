/**
 * Represents a date.
 */
export class Date {
  #yyyy
  #yy
  #mm
  #month
  #dd
  /**
   * Initializes a new instance of the Date class.
   *
   * @param {string} year - The year (yyyy)
   * @param {string} month - The month (mm)
   * @param {string} day - The day (dd)
   */
  constructor (year, month, day) {
    // TODO: Add error handling!
    this.#yyyy = year
    this.#yy = `${year.charAt(2)}${year.charAt(3)}`
    this.#mm = month
    this.#month = this.#getMonthName(month)
    this.#dd = day
  }

  /**
   * Returns the date in a certain format.
   *
   * @param {string} format - The format to return the date in, (ex. dd/mm/yy).
   * @returns {string} The formated date.
   */
  getFormatedDate (format) {
    // TODO: Add error handling!!
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
      case 'mm/dd/yy':
        date = `${this.#mm}/${this.#dd}/${this.#yy}`
        break
      case 'mm/dd/yyyy':
        date = `${this.#mm}/${this.#dd}/${this.#yyyy}`
        break
      case 'dd month yyyy':
        date = `${this.#dd} ${this.#month} ${this.#yyyy}`
        break
    }
    return date
  }

  /**
   * Add a certain amount of time to the date.
   *
   * @param {number} years - The amount of years to add.
   * @param {number} months - The amount of months to add.
   * @param {number} days - The amount of days to add.
   */
  addTime (years, months, days) {
    // check what each param is
    // make the year/month/date into numbers in date and then add the new ones onto this
    // somehow loop through so that if days become over a certain amount (like 30), another month is added instead (have to know if it's a leap year!)
    // if month = 13, year++
  }

  /**
   * Returns the full month name.
   *
   * @param {string} month - The month (mm)
   * @returns {string} The month name.
   */
  #getMonthName (month) {
    let monthName = ''
    switch (month) {
      case '01':
        monthName = 'January'
        break
      case '02':
        monthName = 'February'
        break
      case '03':
        monthName = 'March'
        break
      case '04':
        monthName = 'April'
        break
      case '05':
        monthName = 'May'
        break
      case '06':
        monthName = 'June'
        break
      case '07':
        monthName = 'July'
        break
      case '08':
        monthName = 'August'
        break
      case '09':
        monthName = 'September'
        break
      case '10':
        monthName = 'October'
        break
      case '11':
        monthName = 'November'
        break
      case '12':
        monthName = 'December'
        break
    }
    return monthName
  }
}
