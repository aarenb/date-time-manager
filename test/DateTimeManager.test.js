import * as dateTimeManager from '../src/dateTimeManager.js'

describe('to24HourClock', () => {
  test('"03:22pm" should result in "15:22"', () => {
    expect(dateTimeManager.to24HourClock('03:22pm')).toBe('15:22')
  })

  test('"11:15am" should result in "11:15"', () => {
    expect(dateTimeManager.to24HourClock('11:15am')).toBe('11:15')
  })
})

describe('to12HourClock', () => {
  test('"00:10" should result in "12:10am"', () => {
    expect(dateTimeManager.to12HourClock('00:10')).toBe('12:10am')
  })

  test('"11:45" should result in "11:45am"', () => {
    expect(dateTimeManager.to12HourClock('11:45am')).toBe('11:45am')
  })

  test('"15:20" should result in "03:20pm"', () => {
    expect(dateTimeManager.to12HourClock('15:20')).toBe('03:20pm')
  })
})
