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
   * @param {string} year - The year (yyyy)
   * @param {string} month - The month (mm)
   * @param {string} day - The day (dd)
   */
  constructor (year, month, day) {
    // TODO: Add error handling!
    this.#yyyy = year
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
    const yy = `${this.#yyyy.charAt(2)}${this.#yyyy.charAt(3)}`
    const month = this.#getMonthName(this.#mm)

    // TODO: Add error handling!!
    let date = ''
    switch (format) {
      case 'dd/mm/yyyy':
        date = `${this.#dd}/${this.#mm}/${this.#yyyy}`
        break
      case 'dd/mm/yy':
        date = `${this.#dd}/${this.#mm}/${yy}`
        break
      case 'yyyy/mm/dd':
        date = `${this.#yyyy}/${this.#mm}/${this.#dd}`
        break
      case 'yy/mm/dd':
        date = `${yy}/${this.#mm}/${this.#dd}`
        break
      case 'mm/dd/yy':
        date = `${this.#mm}/${this.#dd}/${yy}`
        break
      case 'mm/dd/yyyy':
        date = `${this.#mm}/${this.#dd}/${this.#yyyy}`
        break
      case 'dd month yyyy':
        date = `${this.#dd} ${month} ${this.#yyyy}`
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
    // TODO: Add error handling!!
    let currentYear = Number(this.#yyyy)
    let currentMonth = Number(this.#mm) // TODO: remember to add the 0 in the front later when turning this back into a string!!!
    let currentDay = Number(this.#dd)

    for (let i = 0; i < days; i++) {
      currentDay++
      switch (currentMonth) {
        case 1:
          if (currentDay > 31) { // TODO: break this out?? make more dry
            currentMonth++
            currentDay = currentDay - 31
          }
          break
        case 2: // TODO: check if it's a leap year
          if (currentDay > 28) {
            currentMonth++
            currentDay = currentDay - 28
          }
          break
        case 3:
          if (currentDay > 31) {
            currentMonth++
            currentDay = currentDay - 31
          }
          break
        case 4:
          if (currentDay > 30) {
            currentMonth++
            currentDay = currentDay - 30
          }
          break
        case 5:
          if (currentDay > 31) {
            currentMonth++
            currentDay = currentDay - 31
          }
          break
        case 6:
          if (currentDay > 30) {
            currentMonth++
            currentDay = currentDay - 30
          }
          break
        case 7:
          if (currentDay > 31) {
            currentMonth++
            currentDay = currentDay - 31
          }
          break
        case 8:
          if (currentDay > 31) {
            currentMonth++
            currentDay = currentDay - 31
          }
          break
        case 9:
          if (currentDay > 30) {
            currentMonth++
            currentDay = currentDay - 30
          }
          break
        case 10:
          if (currentDay > 31) {
            currentMonth++
            currentDay = currentDay - 31
          }
          break
        case 11:
          if (currentDay > 30) {
            currentMonth++
            currentDay = currentDay - 30
          }
          break
        case 12:
          if (currentDay > 31) {
            currentMonth++
            currentDay = currentDay - 31
          }
          break
      }
    } // TODO: should probs also check if months > 12 here, in case no months are added but a bunch of days that makes months go over 12

    for (let i = 0; i < months; i++) {
      currentMonth++
      if (currentMonth > 12) {
        currentYear++
        currentMonth = currentMonth - 12
      }
    }

    currentYear += years

    this.#yyyy = currentYear.toString()

    if (currentMonth < 10) {
      this.#mm = `0${currentMonth.toString()}`
    } else {
      this.#mm = currentMonth.toString()
    }
    if (currentDay < 10) {
      this.#dd = `0${currentDay.toString()}`
    } else {
      this.#dd = currentDay.toString()
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
