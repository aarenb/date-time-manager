/**
 * Represents an exception handler.
 */
export class ExceptionHandler {
  /**
   * Throws a TypeError if the passed argument is not a string.
   *
   * @param {*} argument - The argument to check.
   * @throws {TypeError} The passed argument is not a string.
   */
  guardAgainstNotString (argument) {
    if (typeof argument !== 'string') {
      throw new TypeError('The passed argument is not a string.')
    }
  }

  /**
   * Throws a TypeError if the passed argument is not a number.
   *
   * @param {*} argument - The argument to check.
   * @throws {TypeError} The passed argument is not a number.
   */
  guardAgainstNotNumber (argument) {
    if (typeof argument !== 'number') {
      throw new TypeError('The passed argument is not a number.')
    }
  }

  /**
   * Throws an error with the message 'This date does not exist'.
   */
  dateDoesNotExist () {
    throw new Error('This date does not exist')
  }
}
