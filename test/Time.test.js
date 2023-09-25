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
})
