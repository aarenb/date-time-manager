import { to24HourClock } from '../src/dateTimeManager.js'

describe('to24HourClock', () => {
  test('"03:22pm" should result in "15:22', () => {
    expect(to24HourClock('03:22pm')).toBe('15:22')
  })
})
