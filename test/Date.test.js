import { Date } from '../src/Date.js'

describe('setYear', () => {
  test('2000 should result in 11/07/2000', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.setYear(2000)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2000')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.setYear('not a number')
      testDate.setYear(null)
      testDate.setYear(false)
      testDate.setYear(undefined)
      testDate.setYear({})
      testDate.setYear([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('setMonth', () => {
  test('11 should result in 11/11/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.setMonth(11)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/11/2003')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.setMonth('not a number')
      testDate.setMonth(null)
      testDate.setMonth(false)
      testDate.setMonth(undefined)
      testDate.setMonth({})
      testDate.setMonth([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('setDay', () => {
  test('26 should result in 26/07/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.setDay(26)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('26/07/2003')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.setDay('not a number')
      testDate.setDay(null)
      testDate.setDay(false)
      testDate.setDay(undefined)
      testDate.setDay({})
      testDate.setDay([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('getFormatedDate', () => {
  test('dd/mm/yyyy should result in 11/07/2003', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2003')
  })

  test('dd/mm/yy should result in 11/07/03', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('dd/mm/yy')).toBe('11/07/03')
  })

  test('yyyy/mm/dd should result in 2003/07/11', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('yyyy/mm/dd')).toBe('2003/07/11')
  })

  test('yy/mm/dd should result in 03/07/11', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('yy/mm/dd')).toBe('03/07/11')
  })

  test('mm/dd/yy should result in 07/11/03', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('mm/dd/yy')).toBe('07/11/03')
  })

  test('mm/dd/yyyy should result in 07/11/2003', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('mm/dd/yyyy')).toBe('07/11/2003')
  })

  test('dd month yyyy should result in 11 July 2003', () => {
    const testDate = new Date(2003, 7, 11)
    expect(testDate.getFormatedDate('dd month yyyy')).toBe('11 July 2003')
  })

  test('passing an argument that is not a string should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.getFormatedDate(1)
      testDate.getFormatedDat(null)
      testDate.getFormatedDat(false)
      testDate.getFormatedDat(undefined)
      testDate.getFormatedDat({})
      testDate.getFormatedDat([])
    }).toThrow('The passed argument is not a string.')
  })
})

describe('addDays', () => {
  test('10 should result in 21/07/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addDays(10)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('21/07/2003')
  })

  test('30 should result in 10/08/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addDays(30)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('10/08/2003')
  })

  test('12 should result in 01/01/2004', () => {
    const testDate = new Date(2003, 12, 20)
    testDate.addDays(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('01/01/2004')
  })

  test('18 should result in 01/03/2003 (not leap year)', () => {
    const testDate = new Date(2003, 2, 11)
    testDate.addDays(18)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('01/03/2003')
  })

  test('18 should result in 29/02/2004 (leap year)', () => {
    const testDate = new Date(2004, 2, 11)
    testDate.addDays(18)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('29/02/2004')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.addDays('not a number')
      testDate.addDays(null)
      testDate.addDays(false)
      testDate.addDays(undefined)
      testDate.addDays({})
      testDate.addDays([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('addMonths', () => {
  test('1 should result in 11/08/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addMonths(1)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/08/2003')
  })

  test('12 should result in 11/07/2004', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addMonths(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2004')
  })

  test('adding months to create a date that does not exist should throw an error', () => {
    const testDate = new Date(2003, 7, 31)
    expect(() => {
      testDate.addMonths(2)
    }).toThrow('This date does not exist')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.addMonths('not a number')
      testDate.addMonths(null)
      testDate.addMonths(false)
      testDate.addMonths(undefined)
      testDate.addMonths({})
      testDate.addMonths([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('addYears', () => {
  test('1 should result in 11/07/2004', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addYears(1)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2004')
  })

  test('10 should result in 11/07/2013', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.addYears(10)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2013')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.addYears('not a number')
      testDate.addYears(null)
      testDate.addYears(false)
      testDate.addYears(undefined)
      testDate.addYears({})
      testDate.addYears([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('subtractDays', () => {
  test('10 should result in 01/07/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.subtractDays(10)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('01/07/2003')
  })

  test('11 should result in 30/06/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.subtractDays(11)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('30/06/2003')
  })

  test('12 should result in 28/02/2003 (not leap year)', () => {
    const testDate = new Date(2003, 3, 12)
    testDate.subtractDays(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('28/02/2003')
  })

  test('12 should result in 29/02/2004 (leap year)', () => {
    const testDate = new Date(2004, 3, 12)
    testDate.subtractDays(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('29/02/2004')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.subtractDays('not a number')
      testDate.subtractDays(null)
      testDate.subtractDays(false)
      testDate.subtractDays(undefined)
      testDate.subtractDays({})
      testDate.subtractDays([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('subtractMonths', () => {
  test('1 should result in 11/06/2003', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.subtractMonths(1)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/06/2003')
  })

  test('12 should result in 11/07/2002', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.subtractMonths(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2002')
  })

  test('subtracting months to create a date that does not exist should throw an error', () => {
    const testDate = new Date(2003, 7, 31)
    expect(() => {
      testDate.subtractMonths(1)
    }).toThrow('This date does not exist')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.subtractMonths('not a number')
      testDate.subtractMonths(null)
      testDate.subtractMonths(false)
      testDate.subtractMonths(undefined)
      testDate.subtractMonths({})
      testDate.subtractMonths([])
    }).toThrow('The passed argument is not a number.')
  })
})

describe('subtractYears', () => {
  test('1 should result in 11/07/2002', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.subtractYears(1)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2002')
  })

  test('10 should result in 11/07/1993', () => {
    const testDate = new Date(2003, 7, 11)
    testDate.subtractYears(10)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/1993')
  })

  test('passing an argument that is not a number should throw an error', () => {
    const testDate = new Date(2003, 7, 11)
    expect(() => {
      testDate.subtractYears('not a number')
      testDate.subtractYears(null)
      testDate.subtractYears(false)
      testDate.subtractYears(undefined)
      testDate.subtractYears({})
      testDate.subtractYears([])
    }).toThrow('The passed argument is not a number.')
  })
})
