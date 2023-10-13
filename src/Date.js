import { ExceptionHandler } from './ExceptionHandler'

/**
 * Represents a date.
 */
export class Date {
  #fullYear
  #month
  #day
  #exceptionHandler
  /**
   * Initializes a new instance of the Date class.
   *
   * @param {number} year - The year
   * @param {number} month - The month
   * @param {number} day - The day
   */
  constructor (year, month, day) {
    this.#exceptionHandler = new ExceptionHandler()

    this.#exceptionHandler.guardAgainstNotNumber(year)
    this.#exceptionHandler.guardAgainstNotNumber(month)
    this.#exceptionHandler.guardAgainstNotNumber(day)

    this.#setYear(year)
    this.#setMonth(month)
    this.#setDay(day)
  }

  /**
   * Returns the date in a certain format.
   *
   * @param {string} format - The format to return the date in, (ex. dd/mm/yy).
   * @returns {string} The formated date.
   */
  getFormatedDate (format) {
    this.#exceptionHandler.guardAgainstNotString(format)

    const twoDigitsYear = `${this.#fullYear.charAt(2)}${this.#fullYear.charAt(3)}`
    const monthName = this.#getMonthName(this.#month)

    let date = ''
    switch (format) {
      case 'dd/mm/yyyy':
        date = `${this.#day}/${this.#month}/${this.#fullYear}`
        break
      case 'dd/mm/yy':
        date = `${this.#day}/${this.#month}/${twoDigitsYear}`
        break
      case 'yyyy/mm/dd':
        date = `${this.#fullYear}/${this.#month}/${this.#day}`
        break
      case 'yy/mm/dd':
        date = `${twoDigitsYear}/${this.#month}/${this.#day}`
        break
      case 'mm/dd/yy':
        date = `${this.#month}/${this.#day}/${twoDigitsYear}`
        break
      case 'mm/dd/yyyy':
        date = `${this.#month}/${this.#day}/${this.#fullYear}`
        break
      case 'dd month yyyy':
        date = `${this.#day} ${monthName} ${this.#fullYear}`
        break
      default:
        throw new TypeError('The passed argument is not a valid date format')
    }
    return date
  }

  /**
   * Adds a certain amount of days to the date.
   *
   * @param {number} days - The amount of days to add.
   */
  addDays (days) {
    this.#exceptionHandler.guardAgainstNotNumber(days)

    let currentDay = Number(this.#day)

    for (let i = 0; i < days; i++) {
      currentDay++
      switch (Number(this.#month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          currentDay = this.handleIfLargerThanMaxDays(currentDay, 31)
          break
        case 4:
        case 6:
        case 9:
        case 11:
          currentDay = this.handleIfLargerThanMaxDays(currentDay, 30)
          break
        case 2:
          if (this.#isLeapYear(Number(this.#fullYear))) {
            currentDay = this.handleIfLargerThanMaxDays(currentDay, 29)
          } else {
            currentDay = this.handleIfLargerThanMaxDays(currentDay, 28)
          }
          break
      }
    }

    this.#setDay(currentDay)
  }

  /**
   * Checks if a year is a leap year.
   *
   * @param {number} year - The year to check.
   * @returns {boolean} True if leap year, otherwise false.
   */
  #isLeapYear (year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true
        }
        return false
      }
      return true
    }
    return false
  }

  /**
   * Adds a certain amount of months to the date.
   *
   * @param {number} months - The amount of months to add.
   */
  addMonths (months) {
    this.#exceptionHandler.guardAgainstNotNumber(months)

    let currentMonth = Number(this.#month)

    for (let i = 0; i < months; i++) {
      currentMonth++
      if (currentMonth > 12) {
        this.addYears(1)
        currentMonth = 1
      }
    }

    this.#setMonth(currentMonth)
  }

  /**
   * Adds a certain amount of years to the date.
   *
   * @param {number} years - The amount of years to add.
   */
  addYears (years) {
    this.#exceptionHandler.guardAgainstNotNumber(years)

    let currentYear = Number(this.#fullYear)
    currentYear += years
    this.#setYear(currentYear)
  }

  /**
   * Checks if the current day is larger than the max amount of days, and if so adds a month and makes current day 1.
   *
   * @param {number} currentDay - The current day to check.
   * @param {number} maxDays - The max amount of days of the month.
   * @returns {number} - The current day after checking, possibly changed.
   */
  #handleIfLargerThanMaxDays (currentDay, maxDays) { // TODO: Change name?
    if (currentDay > maxDays) {
      this.addMonths(1)
      currentDay = 1
    }
    return currentDay
  }

  /**
   * Subtracts a certain amount of days from the date.
   *
   * @param {number} days - The amount of days to subtract.
   */
  subtractDays (days) {
    this.#exceptionHandler.guardAgainstNotNumber(days)

    let currentDay = Number(this.#day)

    for (let i = 0; i < days; i++) {
      currentDay--
      switch (Number(this.#month)) {
        case 1:
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
          currentDay = this.handleDaySmallerThanOne(currentDay, 31)
          break
        case 3:
          if (this.#isLeapYear(Number(this.#fullYear))) {
            currentDay = this.handleDaySmallerThanOne(currentDay, 29)
          } else {
            currentDay = this.handleDaySmallerThanOne(currentDay, 28)
          }
          break
        case 5:
        case 7:
        case 10:
        case 12:
          currentDay = this.handleDaySmallerThanOne(currentDay, 30)
          break
      }
    }

    this.#setDay(currentDay)
  }

  /**
   * Subtracts a certain amount of months from the date.
   *
   * @param {number} months - The amount of months to subtract.
   */
  subtractMonths (months) {
    this.#exceptionHandler.guardAgainstNotNumber(months)

    let currentMonth = Number(this.#month)

    for (let i = 0; i < months; i++) {
      currentMonth--
      if (currentMonth < 1) {
        this.subtractYears(1)
        currentMonth = 12
      }
    }

    this.#setMonth(currentMonth)
  }

  /**
   * Subtracts a certain amount of years from the date.
   *
   * @param {number} years - The amount of years to subtarct.
   */
  subtractYears (years) {
    this.#exceptionHandler.guardAgainstNotNumber(years)

    let currentYear = Number(this.#fullYear)
    currentYear -= years
    this.#setYear(currentYear)
  }

  /**
   * Checks if current day is smaller than one, if so subtracts a month and sets current day accordingly.
   *
   * @param {number} currentDay - The current day.
   * @param {number} nextMonthMaxDays - The max amount of days in the next month (current month - 1)
   * @returns {number} - The current day after checking, possibly changed.
   */
  #handleDaySmallerThanOne (currentDay, nextMonthMaxDays) {
    if (currentDay < 1) {
      this.subtractMonths(1)
      currentDay = nextMonthMaxDays
    }
    return currentDay
  }

  /**
   * Sets the day.
   *
   * @param {number} day - The day to set.
   */
  #setDay (day) {
    if (day < 10) {
      this.#day = `0${day.toString()}`
    } else {
      this.#day = day.toString()
    }
  }

  /**
   * Sets the month.
   *
   * @param {number} month - The month to set.
   */
  #setMonth (month) {
    if (month < 10) {
      this.#month = `0${month.toString()}`
    } else {
      this.#month = month.toString()
    }
  }

  /**
   * Sets the year.
   *
   * @param {number} year - The year to set.
   */
  #setYear (year) {
    this.#fullYear = year.toString()
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
