import { ExceptionHandler } from './ExceptionHandler'

/**
 * Represents a certain time.
 */
export class Time {
  #twelveHourFormat
  #twentyFourHourFormat
  #exceptionHandler
  /**
   * Initializes a new instance of the Time class.
   *
   * @param {string} time - The time
   * @param {number} format - The format of the entered time (12/24)
   */
  constructor (time, format) {
    this.#exceptionHandler = new ExceptionHandler()

    this.#exceptionHandler.guardAgainstNotString(time)
    this.#exceptionHandler.guardAgainstNotNumber(format)

    this.#setTimeIn12HourClockFormat(time, format)
    this.#setTimeIn24HourClockFormat(time, format)
  }

  /**
   * Sets the time in the 12 hour clock format.
   *
   * @param {string} time - The time
   * @param {number} format - The format of the entered time (12/24)
   */
  #setTimeIn12HourClockFormat (time, format) {
    if (format === 12) {
      this.#twelveHourFormat = time
    } else {
      this.#twelveHourFormat = this.#to12HourClock(time)
    }
  }

  /**
   * Sets the time in the 24 hour clock format.
   *
   * @param {string} time - The time
   * @param {number} format - The format of the entered time (12/24)
   */
  #setTimeIn24HourClockFormat (time, format) {
    if (format === 24) {
      this.#twentyFourHourFormat = time
    } else {
      this.#twentyFourHourFormat = this.#to24HourClock(time)
    }
  }

  /**
   * Returns the time in 12h clock format.
   *
   * @returns {string} The time in 12h clock format (hh:mmxm).
   */
  getTimeIn12HourClockFormat () {
    return this.#twelveHourFormat
  }

  /**
   * Returns the time in 24h clock format.
   *
   * @returns {string} The time in 24h clock format (hh:mm).
   */
  getTimeIn24HourClockFormat () {
    return this.#twentyFourHourFormat
  }

  /**
   * Add a certain amount of time to the time object.
   *
   * @param {number} hours - The amount of hours to add.
   * @param {number} minutes - The amount of minutes to add.
   */
  addTime (hours, minutes) {
    this.#exceptionHandler.guardAgainstNotNumber(hours)
    this.#exceptionHandler.guardAgainstNotNumber(minutes)

    let currentHour = this.#getHour()

    let currentMinute = this.#getMinute()

    for (let i = 0; i < minutes; i++) {
      currentMinute++
      if (currentMinute > 59) {
        currentHour++
        currentMinute = 0
      }
    }

    for (let i = 0; i < hours; i++) {
      currentHour++
      if (currentHour > 23) {
        currentHour = currentHour - 24
      }
    }

    if (currentHour < 10) {
      currentHour = `0${currentHour.toString()}`
    }
    if (currentMinute < 10) {
      currentMinute = `0${currentMinute.toString()}`
    }

    this.#twentyFourHourFormat = `${currentHour}:${currentMinute}`
    this.#twelveHourFormat = this.#to12HourClock(this.#twentyFourHourFormat)
  }

  /**
   * Gets the time's hour in the 24 hour clock format.
   *
   * @returns {number} The hour.
   */
  #getHour () {
    return Number(`${this.#twentyFourHourFormat.charAt(0)}${this.#twentyFourHourFormat.charAt(1)}`)
  }

  /**
   * Gets the time's minute.
   *
   * @returns {number} The minute.
   */
  #getMinute () {
    return Number(`${this.#twentyFourHourFormat.charAt(3)}${this.#twentyFourHourFormat.charAt(4)}`)
  }

  /**
   * Subtracts a certain amount of time from the time object.
   *
   * @param {number} hours - The amount of hours to subtract.
   * @param {number} minutes - The amount of minutes to subtract.
   */
  subtractTime (hours, minutes) {
    this.#exceptionHandler.guardAgainstNotNumber(hours)
    this.#exceptionHandler.guardAgainstNotNumber(minutes)

    let currentHour = this.#getHour()
    let currentMinute = this.#getMinute()

    for (let i = 0; i < minutes; i++) {
      currentMinute--
      if (currentMinute < 0) {
        currentHour--
        currentMinute = 59
      }
    }

    for (let i = 0; i < hours; i++) {
      currentHour--
      if (currentHour < 0) {
        currentHour = 23
      }
    }

    if (currentHour < 10) {
      currentHour = `0${currentHour.toString()}`
    }
    if (currentMinute < 10) {
      currentMinute = `0${currentMinute.toString()}`
    }

    this.#twentyFourHourFormat = `${currentHour}:${currentMinute}`
    this.#twelveHourFormat = this.#to12HourClock(this.#twentyFourHourFormat)
  }

  /**
   * Formats time into the 24 hour clock.
   *
   * @param {string} time - The time to format in 12 hour clock (hh:mmxm).
   * @returns {string} The time formated in the 24 hour clock (hh:mm).
   */
  #to24HourClock (time) {
    let newHH = ''
    const hh = `${time.charAt(0)}${time.charAt(1)}`
    const mm = `${time.charAt(3)}${time.charAt(4)}`
    const xm = `${time.charAt(5)}${time.charAt(6)}`

    if (xm === 'am') {
      if (hh === '12') { // TODO: break this out?
        newHH = '00'
      } else {
        newHH = hh
      }
      return `${newHH}:${mm}`
    } else if (xm === 'pm') {
      switch (hh) { // TODO: break this out?
        case '01':
          newHH = '13'
          break
        case '02':
          newHH = '14'
          break
        case '03':
          newHH = '15'
          break
        case '04':
          newHH = '16'
          break
        case '05':
          newHH = '17'
          break
        case '06':
          newHH = '18'
          break
        case '07':
          newHH = '19'
          break
        case '08':
          newHH = '20'
          break
        case '09':
          newHH = '21'
          break
        case '10':
          newHH = '22'
          break
        case '11':
          newHH = '23'
          break
        case '12':
          newHH = '12'
          break
      }
      return `${newHH}:${mm}`
    } else {
      throw new TypeError('The passed argument is not a valid 12h clock timestamp.')
    }
  }

  /**
   * Formats time into the 12 hour clock.
   *
   * @param {string} time - The time to format in the 24 hour clock (hh:mm).
   * @returns {string} The time formatted in 12 hour clock (hh:mmxm).
   */
  #to12HourClock (time) {
    // TODO: dublicated code, break out???
    // TODO: Check if hh and mm are correct????
    let newHH = ''
    const hh = `${time.charAt(0)}${time.charAt(1)}`
    const mm = `${time.charAt(3)}${time.charAt(4)}`

    if (parseInt(hh) < 12 && parseInt(hh) > 0) {
      newHH = hh
      return `${newHH}:${mm}am`
    } else if (hh === '00') {
      newHH = 12
      return `${newHH}:${mm}am`
    } else {
      switch (hh) { // TODO: break this out?
        case '12':
          newHH = hh
          break
        case '13':
          newHH = '01'
          break
        case '14':
          newHH = '02'
          break
        case '15':
          newHH = '03'
          break
        case '16':
          newHH = '04'
          break
        case '17':
          newHH = '05'
          break
        case '18':
          newHH = '06'
          break
        case '19':
          newHH = '07'
          break
        case '20':
          newHH = '08'
          break
        case '21':
          newHH = '09'
          break
        case '22':
          newHH = '10'
          break
        case '23':
          newHH = '11'
          break
      }
      return `${newHH}:${mm}pm`
    }
  }
}
