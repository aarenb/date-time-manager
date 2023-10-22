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

    this.setHour(hour)
    this.setMinute(minute)
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

    this.setMinute(currentMinute)
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

    this.setHour(currentHour)
  }

  /**
   * Subtracts a certain amount of minutes from the time object.
   *
   * @param {number} minutes - The amount of minutes to subtract.
   */
  subtractMinutes (minutes) {
    this.#exceptionHandler.guardAgainstNotNumber(minutes)

    let currentMinute = this.#minute

    for (let i = 0; i < minutes; i++) {
      currentMinute--
      if (currentMinute < 0) {
        this.subtractHours(1)
        currentMinute = 59
      }
    }

    this.setMinute(currentMinute)
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

    this.setHour(currentHour)
  }

  /**
   * Sets the minute.
   *
   * @param {number} minute - The minute to set.
   */
  setMinute (minute) {
    this.#exceptionHandler.guardAgainstNotNumber(minute)

    this.#minute = minute
  }

  /**
   * Sets the hour.
   *
   * @param {number} hour - The hour to set.
   */
  setHour (hour) {
    this.#exceptionHandler.guardAgainstNotNumber(hour)

    this.#hour = hour
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
   * Formats time into the 24 hour clock.
   *
   * @param {number} hour - The time's hour.
   * @param {number} minute - The time's minute.
   * @returns {string} The time formated in the 24 hour clock (hh:mm).
   */
  #to24HourClockFormat (hour, minute) {
    hour = this.#numberToTwoCharacterString(hour)
    minute = this.#numberToTwoCharacterString(minute)

    return `${hour}:${minute}`
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
   * Formats time into the 12 hour clock.
   *
   * @param {number} hour - The time's hour.
   * @param {number} minute - The time's minute.
   * @returns {string} The time formatted in 12 hour clock (hh:mmxm).
   */
  #to12HourClockFormat (hour, minute) {
    let newHour = ''
    minute = this.#numberToTwoCharacterString(minute)

    if (hour < 12 && hour > 0) {
      newHour = this.#numberToTwoCharacterString(hour)
      return `${newHour}:${minute}am`
    } else if (hour === 0) {
      newHour = 12
      return `${newHour}:${minute}am`
    } else {
      newHour = this.#toPmHour(hour)
      return `${newHour}:${minute}pm`
    }
  }

  /**
   * Transfers a number into a two character long string.
   *
   * @param {number} number - The numbner to transfer.
   * @returns {string} The number as a two character string.
   */
  #numberToTwoCharacterString (number) {
    let numberAsString = ''
    if (number < 10) {
      numberAsString = `0${number.toString()}`
    } else {
      numberAsString = number.toString()
    }
    return numberAsString
  }

  /**
   * Transforms an hour from 24 hour time format to pm (12 hour time format).
   *
   * @param {number} hour - The hour in 23 hour time format.
   * @returns {string} The hour in pm.
   */
  #toPmHour (hour) { // TODO: Fix name
    let newHour = ''
    switch (hour) {
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
    return newHour
  }
}
