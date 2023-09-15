import * as dateTimeManager from '../src/dateTimeManager.js'
import { Date } from '../src/Date.js'

console.log(dateTimeManager.to12HourClock('14:12'))

const date1 = new Date('2003', '07', '11')
console.log(date1.getFormatedDate('dd month yyyy'))
