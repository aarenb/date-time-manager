import { Date } from '../src/Date.js'

const testDate = new Date('2003', '07', '11')

describe('getFormatedDate', () => {
  test('dd/mm/yy should result in 11/07/03', () => {
    expect(testDate.getFormatedDate('dd/mm/yy')).toBe('11/07/03')
  })
})
