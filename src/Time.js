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
    if (typeof time !== 'string') {
      throw new TypeError('The passed argument is not a string.') // TODO: break this out later?
    }

    if (typeof format !== 'number') {
      throw new TypeError('The passed argument is not a number.') // TODO: break this out later?
    }

    if (format === 12) {
      this.#twelveH = time
      this.#twentyFourH = this.#to24HourClock(time)
    } else if (format === 24) {
      this.#twentyFourH = time
      this.#twelveH = this.#to12HourClock(time)
    } else {
      throw new TypeError('The passed argument is not a valid format, it should be 12 or 24.') // TODO, change error text?? + should this be just 'error'?
    }
  }

  /**
   * Returns the time in 12h clock format.
   *
   * @returns {string} The time in 12h clock format (hh:mmxm).
   */
  get12HourClock () {
    return this.#twelveH
  }

  /**
   * Returns the time in 24h clock format.
   *
   * @returns {string} The time in 24h clock format (hh:mm).
   */
  get24HourClock () {
    return this.#twentyFourH
  }

  /**
   * Add a certain amount of time to the time object.
   *
   * @param {number} hours - The amount of hours to add.
   * @param {number} minutes - The amount of minutes to add.
   */
  addTime (hours, minutes) {
    if (typeof hours !== 'number' || typeof minutes !== 'number') {
      throw new TypeError('The passed argument is not a number.') // TODO: break this out later?
    }

    let currentHours = Number(`${this.#twentyFourH.charAt(0)}${this.#twentyFourH.charAt(1)}`)
    let currentMinutes = Number(`${this.#twentyFourH.charAt(3)}${this.#twentyFourH.charAt(4)}`)

    for (let i = 0; i < minutes; i++) {
      currentMinutes++
      if (currentMinutes > 59) {
        currentHours++
        currentMinutes = 0
        // TODO: Also check if currentHours is over 23 here???
      }
    }

    for (let i = 0; i < hours; i++) {
      currentHours++
      if (currentHours > 23) {
        currentHours = currentHours - 24
      }
    }

    if (currentHours < 10) {
      currentHours = `0${currentHours.toString()}`
    }
    if (currentMinutes < 10) {
      currentHours = `0${currentMinutes.toString()}`
    }

    this.#twentyFourH = `${currentHours}:${currentMinutes}`
    this.#twelveH = this.#to12HourClock(this.#twentyFourH)
  }

  /**
   * Removes a certain amount of time to the time object.
   *
   * @param {number} hours - The amount of hours to remove.
   * @param {number} minutes - The amount of minutes to remove.
   */
  removeTime (hours, minutes) {
    if (typeof hours !== 'number' || typeof minutes !== 'number') {
      throw new TypeError('The passed argument is not a number.') // TODO: break this out later?
    }

    let currentHours = Number(`${this.#twentyFourH.charAt(0)}${this.#twentyFourH.charAt(1)}`)
    let currentMinutes = Number(`${this.#twentyFourH.charAt(3)}${this.#twentyFourH.charAt(4)}`)

    for (let i = 0; i < minutes; i++) {
      currentMinutes--
      if (currentMinutes < 1) {
        currentHours--
        currentMinutes = 59
        // TODO: Also check if currentHours is under 1 here???
      }
    }

    for (let i = 0; i < hours; i++) {
      currentHours--
      if (currentHours < 0) {
        currentHours = 23
      }
    }

    if (currentHours < 10) {
      currentHours = `0${currentHours.toString()}`
    }
    if (currentMinutes < 10) {
      currentHours = `0${currentMinutes.toString()}`
    }

    this.#twentyFourH = `${currentHours}:${currentMinutes}`
    this.#twelveH = this.#to12HourClock(this.#twentyFourH)
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
      return `${newHH}:${mm}` // TODO: remove dublicate??
    } else {
      throw new TypeError('The passed argument is not a valid 12h clock timestamp.') // TODO, change error text?? + should this be just 'error'?
    }
  }

  /**
   * Formats time into the 12 hour clock.
   *
   * @param {string} time - The time formated in the 24 hour clock (hh:mm).
   * @returns {string} The time to format in 12 hour clock (hh:mmxm).
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
