import { ExceptionHandler } from './ExceptionHandler'

/**
 * Represents a certain time.
 */
export class Time {
  #hour
  #minute
  #exceptionHandler
  /**
   * Initializes a new instance of the Time class.
   *
   * @param {number} hour - The hour (as the 24 hour clock).
   * @param {number} minute - The minute.
   */
  constructor (hour, minute) {
    this.#exceptionHandler = new ExceptionHandler()

    this.#exceptionHandler.guardAgainstNotNumber(hour)
    this.#exceptionHandler.guardAgainstNotNumber(minute)

    this.#setHour(hour)
    this.#setMinute(minute)
  }

  /**
   * Sets the hour.
   *
   * @param {number} hour - The hour to set.
   */
  #setHour (hour) {
    this.#hour = hour
  }

  /**
   * Sets the minute.
   *
   * @param {number} minute - The minute to set.
   */
  #setMinute (minute) {
    this.#minute = minute
  }

  /**
   * Returns the time in 12h clock format.
   *
   * @returns {string} The time in 12h clock format (hh:mmxm).
   */
  getTimeIn12HourClockFormat () {
    return this.#to12HourClockFormat(this.#hour, this.#minute)
  }

  /**
   * Returns the time in 24h clock format.
   *
   * @returns {string} The time in 24h clock format (hh:mm).
   */
  getTimeIn24HourClockFormat () {
    return this.#to24HourClockFormat(this.#hour, this.#minute)
  }

  /**
   * Add a certain amount of minutes to the time object.
   *
   * @param {number} minutes - The amount of minutes to add.
   */
  addMinutes (minutes) {
    this.#exceptionHandler.guardAgainstNotNumber(minutes)

    let currentMinute = this.#minute

    for (let i = 0; i < minutes; i++) {
      currentMinute++
      if (currentMinute > 59) {
        this.addHours(1)
        currentMinute = 0
      }
    }

    this.#setMinute(currentMinute)
  }

  /**
   * Add a certain amount of hours to the time object.
   *
   * @param {number} hours - The amount of hours to add.
   */
  addHours (hours) {
    this.#exceptionHandler.guardAgainstNotNumber(hours)

    let currentHour = this.#hour

    for (let i = 0; i < hours; i++) {
      currentHour++
      if (currentHour > 23) {
        currentHour = 0
      }
    }

    this.#setHour(currentHour)
  }

  /**
   * Subtracts a certain amount of hours from the time object.
   *
   * @param {number} hours - The amount of hours to subtract.
   */
  subtractHours (hours) {
    this.#exceptionHandler.guardAgainstNotNumber(hours)

    let currentHour = this.#hour

    for (let i = 0; i < hours; i++) {
      currentHour--
      if (currentHour < 0) {
        currentHour = 23
      }
    }

    this.#setHour(currentHour)
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

    let currentHour = this.#hour
    let currentMinute = this.#minute

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
  }

  /**
   * Formats time into the 24 hour clock.
   *
   * @param {number} hour - The time's hour.
   * @param {number} minute - The time's minute.
   * @returns {string} The time formated in the 24 hour clock (hh:mm).
   */
  #to24HourClockFormat (hour, minute) {
    if (hour < 10) {
      hour = `0${hour.toString()}`
    } else {
      hour = hour.toString()
    }

    if (minute < 10) {
      minute = `0${minute.toString()}`
    } else {
      minute = minute.toString()
    }

    return `${hour}:${minute}`
  }

  /**
   * Formats time into the 12 hour clock.
   *
   * @param {number} hour - The time's hour.
   * @param {number} minute - The time's minute.
   * @returns {string} The time formatted in 12 hour clock (hh:mmxm).
   */
  #to12HourClockFormat (hour, minute) {
    let newHour = ''
    minute = minute.toString()

    if (hour < 12 && hour > 0) {
      if (hour < 10) {
        newHour = `0${hour.toString()}`
      } else {
        newHour = hour.toString()
      }
      return `${newHour}:${minute}am`
    } else if (hour === 0) {
      newHour = 12
      return `${newHour}:${minute}am`
    } else {
      switch (hour) { // TODO: break this out?
        case 12:
          newHour = hour.toString()
          break
        case 13:
          newHour = '01'
          break
        case 14:
          newHour = '02'
          break
        case 15:
          newHour = '03'
          break
        case 16:
          newHour = '04'
          break
        case 17:
          newHour = '05'
          break
        case 18:
          newHour = '06'
          break
        case 19:
          newHour = '07'
          break
        case 20:
          newHour = '08'
          break
        case 21:
          newHour = '09'
          break
        case 22:
          newHour = '10'
          break
        case 23:
          newHour = '11'
          break
      }
      return `${newHour}:${minute}pm`
    }
  }
}
