import { Date } from '../src/Date.js'

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
  // TODO: Add tests for errors
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
  // TODO: Add tests for errors
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

  // TODO: Add tests for errors
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
  // TODO: Add tests for errors
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

  test('12 should result in 28/02/2003', () => {
    const testDate = new Date(2003, 3, 12)
    testDate.subtractDays(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('28/02/2003')
  })

  test('12 should result in 29/02/2004', () => {
    const testDate = new Date(2004, 3, 12)
    testDate.subtractDays(12)
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('29/02/2004')
  })
})

describe('subtractMonths', () => {
  // TODO: Add tests
})

describe('subtractYears', () => {
  // TODO: Add tests
})
