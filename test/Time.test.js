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

describe('addMinutes', () => {
  test('10 should result in 13:55', () => {
    const testTime = new Time(13, 45)
    testTime.addMinutes(10)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('13:55')
  })

  test('15 should result in 14:00', () => {
    const testTime = new Time(13, 45)
    testTime.addMinutes(15)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('14:00')
  })

  test('30 should result in 00:00', () => {
    const testTime = new Time(23, 30)
    testTime.addMinutes(30)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('00:00')
  })
})
