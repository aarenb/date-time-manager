const DateTimeManager = require('../src/DateTimeManager')

describe('to24HourClock', () => {
  test('"03:22pm" should result in "15:22', () => {
    expect(DateTimeManager.to24HourClock('03:22pm'.tobe('15:22')))
  })
})
