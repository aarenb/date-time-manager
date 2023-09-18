import { Date } from '../src/Date.js'

const testDate = new Date('2003', '07', '11')

describe('getFormatedDate', () => {
  test('dd/mm/yyyy should result in 11/07/2003', () => {
    expect(testDate.getFormatedDate('dd/mm/yyyy')).toBe('11/07/2003')
  })

  test('dd/mm/yy should result in 11/07/03', () => {
    expect(testDate.getFormatedDate('dd/mm/yy')).toBe('11/07/03')
  })

  test('yyyy/mm/dd should result in 2003/07/11', () => {
    expect(testDate.getFormatedDate('yyyy/mm/dd')).toBe('2003/07/11')
  })

  test('yy/mm/dd should result in 03/07/11', () => {
    expect(testDate.getFormatedDate('yy/mm/dd')).toBe('03/07/11')
  })

  test('mm/dd/yy should result in 07/11/03', () => {
    expect(testDate.getFormatedDate('mm/dd/yy')).toBe('07/11/03')
  })

  test('mm/dd/yyyy should result in 07/11/2003', () => {
    expect(testDate.getFormatedDate('mm/dd/yyyy')).toBe('07/11/2003')
  })

  test('dd month yyyy should result in 11 July 2003', () => {
    expect(testDate.getFormatedDate('dd month yyyy')).toBe('11 July 2003')
  })
})
