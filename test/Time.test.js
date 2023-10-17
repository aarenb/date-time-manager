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
  // TODO: Add tests for errors
})

describe('addHours', () => {
  test('2 should result in 15:45', () => {
    const testTime = new Time(13, 45)
    testTime.addHours(2)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('15:45')
  })

  test('12 should result in 01:45', () => {
    const testTime = new Time(13, 45)
    testTime.addHours(12)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('01:45')
  })
  // TODO: Add tests for errors
})

describe('subtractMinutes', () => {
  test('10 should result in 13:35', () => {
    const testTime = new Time(13, 45)
    testTime.subtractMinutes(10)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('13:35')
  })

  test('50 should result in 12:55', () => {
    const testTime = new Time(13, 45)
    testTime.subtractMinutes(50)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('12:55')
  })

  test('30 should result in 00:00', () => {
    const testTime = new Time(0, 30)
    testTime.subtractMinutes(30)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('00:00')
  })
  // TODO: Add tests for errors
})

describe('subtractHours', () => {
  test('2 should result in 11:45', () => {
    const testTime = new Time(13, 45)
    testTime.subtractHours(2)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('11:45')
  })

  test('12 should result in 01:45', () => {
    const testTime = new Time(13, 45)
    testTime.subtractHours(12)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('01:45')
  })
  // TODO: Add tests for errors
})
