import { Time } from '../src/Time.js'

describe('setHour', () => {
  test('20 should result in 20:45', () => {
    const testTime = new Time(13, 45)
    testTime.setHour(20)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('20:45')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testTime = new Time(13, 45)
    expect(() => {
      testTime.setHour('not a number')
      testTime.setHour(null)
      testTime.setHour(false)
      testTime.setHour(undefined)
      testTime.setHour({})
      testTime.setHour([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('setMinute', () => {
  test('20 should result in 13:20', () => {
    const testTime = new Time(13, 45)
    testTime.setMinute(20)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('13:20')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testTime = new Time(13, 45)
    expect(() => {
      testTime.setMinute('not a number')
      testTime.setMinute(null)
      testTime.setMinute(false)
      testTime.setMinute(undefined)
      testTime.setMinute({})
      testTime.setMinute([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('Get formated time', () => {
  test('getTimeIn12HourClockFormat should return 01:45pm', () => {
    const testTime = new Time(13, 45)
    expect(testTime.getTimeIn12HourClockFormat()).toBe('01:45pm')
  })

  test('getTimeIn12HourClockFormat should return 12:00am', () => {
    const testTime = new Time(0, 0)
    expect(testTime.getTimeIn12HourClockFormat()).toBe('12:00am')
  })

  test('getTimeIn24HourClockFormat should return 13:45', () => {
    const testTime = new Time(13, 45)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('13:45')
  })

  test('getTimeIn24HourClockFormat should return 00:00', () => {
    const testTime = new Time(0, 0)
    expect(testTime.getTimeIn24HourClockFormat()).toBe('00:00')
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

  test('passing an argument that is not a number should throw an error', () => {
    const testTime = new Time(13, 45)
    expect(() => {
      testTime.addMinutes('not a number')
      testTime.addMinutes(null)
      testTime.addMinutes(false)
      testTime.addMinutes(undefined)
      testTime.addMinutes({})
      testTime.addMinutes([])
    }).toThrow('The passed argument is not a number.')
  })
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

  test('passing an argument that is not a number should throw an error', () => {
    const testTime = new Time(13, 45)
    expect(() => {
      testTime.addHours('not a number')
      testTime.addHours(null)
      testTime.addHours(false)
      testTime.addHours(undefined)
      testTime.addHours({})
      testTime.addHours([])
    }).toThrow('The passed argument is not a number.')
  })
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

  test('passing an argument that is not a number should throw an error', () => {
    const testTime = new Time(13, 45)
    expect(() => {
      testTime.subtractMinutes('not a number')
      testTime.subtractMinutes(null)
      testTime.subtractMinutes(false)
      testTime.subtractMinutes(undefined)
      testTime.subtractMinutes({})
      testTime.subtractMinutes([])
    }).toThrow('The passed argument is not a number.')
  })
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

  test('passing an argument that is not a number should throw an error', () => {
    const testTime = new Time(13, 45)
    expect(() => {
      testTime.subtractHours('not a number')
      testTime.subtractHours(null)
      testTime.subtractHours(false)
      testTime.subtractHours(undefined)
      testTime.subtractHours({})
      testTime.subtractHours([])
    }).toThrow('The passed argument is not a number.')
  })
})
