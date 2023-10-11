/**
 * Represents a date.
 */
export class Date {
  #fullYear
  #month
  #day
  /**
   * Initializes a new instance of the Date class.
   *
   * @param {string} year - The year (yyyy)
   * @param {string} month - The month (mm)
   * @param {string} day - The day (dd)
   */
  constructor (year, month, day) {
    if ((typeof year !== 'string') || (typeof month !== 'string') || (typeof day !== 'string')) {
      throw new TypeError('The passed argument is not a string.') // TODO: break this out later?
    }
    this.#fullYear = year
    this.#month = month
    this.#day = day
  }

  /**
   * Returns the date in a certain format.
   *
   * @param {string} format - The format to return the date in, (ex. dd/mm/yy).
   * @returns {string} The formated date.
   */
  getFormatedDate (format) {
    if (typeof format !== 'string') {
      throw new TypeError('The passed argument is not a string.') // TODO: break this out later?
    }

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
   * Adds a certain amount of time to the date.
   *
   * @param {number} years - The amount of years to add.
   * @param {number} months - The amount of months to add.
   * @param {number} days - The amount of days to add.
   */
  addTime (years, months, days) {
    if (typeof years !== 'number' || typeof months !== 'number' || typeof days !== 'number') {
      throw new TypeError('The passed argument is not a number.') // TODO: break this out later?
    }

    let currentYear = Number(this.#fullYear)
    let currentMonth = Number(this.#month)
    let currentDay = Number(this.#day)

    for (let i = 0; i < days; i++) {
      currentDay++
      switch (currentMonth) {
        case 1:
          if (currentDay > 31) { // TODO: break this out?? make more dry
            currentMonth++
            currentDay = 1
          }
          break
        case 2: // TODO: Check if it's a leap year (NOTE: Will need to write new automatic tests after implementing this!!)
          if (currentDay > 28) {
            currentMonth++
            currentDay = 1
          }
          break
        case 3:
          if (currentDay > 31) {
            currentMonth++
            currentDay = 1
          }
          break
        case 4:
          if (currentDay > 30) {
            currentMonth++
            currentDay = 1
          }
          break
        case 5:
          if (currentDay > 31) {
            currentMonth++
            currentDay = 1
          }
          break
        case 6:
          if (currentDay > 30) {
            currentMonth++
            currentDay = 1
          }
          break
        case 7:
          if (currentDay > 31) {
            currentMonth++
            currentDay = 1
          }
          break
        case 8:
          if (currentDay > 31) {
            currentMonth++
            currentDay = 1
          }
          break
        case 9:
          if (currentDay > 30) {
            currentMonth++
            currentDay = 1
          }
          break
        case 10:
          if (currentDay > 31) {
            currentMonth++
            currentDay = 1
          }
          break
        case 11:
          if (currentDay > 30) {
            currentMonth++
            currentDay = 1
          }
          break
        case 12:
          if (currentDay > 31) {
            currentMonth++
            currentDay = 1
          }
          break
      }
    }

    for (let i = 0; i < months; i++) {
      currentMonth++
      if (currentMonth > 12) {
        currentYear++
        currentMonth = currentMonth - 12
      }
    }

    currentYear += years

    this.#fullYear = currentYear.toString()

    if (currentMonth < 10) {
      this.#month = `0${currentMonth.toString()}`
    } else {
      this.#month = currentMonth.toString()
    }
    if (currentDay < 10) {
      this.#day = `0${currentDay.toString()}`
    } else {
      this.#day = currentDay.toString()
    }
  }

  /**
   * Removes a certain amount of time to the date.
   *
   * @param {number} years - The amount of years to remove.
   * @param {number} months - The amount of months to remove.
   * @param {number} days - The amount of days to remove.
   */
  removeTime (years, months, days) {
    if (typeof years !== 'number' || typeof months !== 'number' || typeof days !== 'number') {
      throw new TypeError('The passed argument is not a number.') // TODO: break this out later?
    }

    let currentYear = Number(this.#fullYear)
    let currentMonth = Number(this.#month)
    let currentDay = Number(this.#day)

    // TODO: Fix so that you can't remove time to get a date that doesn't exist, for example 30/02/2007

    for (let i = 0; i < days; i++) {
      currentDay--
      switch (currentMonth) {
        case 1:
          if (currentDay < 1) { // TODO: break this out?? make more dry
            currentMonth--
            currentDay = 31
          }
          break
        case 2: // TODO: Check if it's a leap year (NOTE: Will need to write new automatic tests after implementing this!!)
          if (currentDay < 1) {
            currentMonth--
            currentDay = 31
          }
          break
        case 3:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 28
          }
          break
        case 4:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 31
          }
          break
        case 5:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 30
          }
          break
        case 6:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 31
          }
          break
        case 7:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 30
          }
          break
        case 8:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 31
          }
          break
        case 9:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 31
          }
          break
        case 10:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 30
          }
          break
        case 11:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 31
          }
          break
        case 12:
          if (currentDay < 1) {
            currentMonth--
            currentDay = 30
          }
          break
      }
    }

    for (let i = 0; i < months; i++) {
      currentMonth--
      if (currentMonth < 1) {
        currentYear--
        currentMonth = 12
      }
    }

    currentYear -= years

    // TODO: Break this out, same as in addTime:
    this.#fullYear = currentYear.toString()

    if (currentMonth < 10) {
      this.#month = `0${currentMonth.toString()}`
    } else {
      this.#month = currentMonth.toString()
    }
    if (currentDay < 10) {
      this.#day = `0${currentDay.toString()}`
    } else {
      this.#day = currentDay.toString()
    }
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
