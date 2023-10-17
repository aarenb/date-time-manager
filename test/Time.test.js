import { Time } from '../src/Time.js'

describe('Get formated time', () => {
  test('getTimeIn12HourClockFormat should return 01:45pm', () => {
    const testTime = new Time(13, 45)
    expect(testTime.getTimeIn12HourClockFormat()).toBe('01:45pm')
  })

  test('getTimeIn24HourClockFormat should return 13:45', () => {
    const testTime = new Time(13, 45)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('13:45')
  })
})
