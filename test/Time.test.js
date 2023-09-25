import { Time } from '../src/Time.js'

const testTime = new Time('13:45', 24)

describe('Get formated time', () => {
  test('get12HourClock should return 01:45pm', () => {
    expect(testTime.get12HourClock()).toBe('01:45pm')
  })

  test('get24HourClock should return 13:45', () => {
    expect(testTime.get24HourClock()).toBe('13:45')
  })
})

describe('addTime', () => {
  test('1, 0 should result in 14:45', () => {
    testTime.addTime(1, 0)
    expect(testTime.get24HourClock()).toBe('14:45')
  })

  test('0, 60 should result in 15:45', () => {
    testTime.addTime(0, 60)
    expect(testTime.get24HourClock()).toBe('15:45')
  })

  test('10, 3 should result in 01:48', () => {
    testTime.addTime(10, 3)
    expect(testTime.get24HourClock()).toBe('01:48')
  })
})

describe('removeTime', () => {
  test('3, 0 should result in 22:48', () => {
    testTime.removeTime(3, 0)
    expect(testTime.get24HourClock()).toBe('22:48')
  })

  test('0, 120 should result in 20:48', () => {
    testTime.removeTime(0, 120)
    expect(testTime.get24HourClock()).toBe('20:48')
  })

  test('11, 48 should result in 09:00', () => {
    testTime.removeTime(11, 48)
    expect(testTime.get24HourClock()).toBe('09:00')
  })
})
