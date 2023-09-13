import * as dateTimeManager from '../src/dateTimeManager.js'

describe('to24HourClock', () => {
  test('"03:22pm" should result in "15:22', () => {
    expect(dateTimeManager.to24HourClock('03:22pm')).toBe('15:22')
  })

  test('"11:15am" should result in "11:15', () => {
    expect(dateTimeManager.to24HourClock('11:15am')).toBe('11:15')
  })
})
