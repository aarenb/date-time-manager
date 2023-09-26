# date-time-manager

This module can be used by other programmers to handle date and time in their applications. It can for example be used to build calendar apps and project planning tools.

## Install
Install using npm:
```
npm i time-date-manager
```

## Usage
```
import { Date, Time } from 'time-date-manager'
```
--------
### Date

To create a new date object, input the arguments year, month and day
```
const theDate = new Date('2003', '07', '11')
```
Get the date in a specific format
```
theDate.getFormatedDate('dd/mm/yy')
// returns '11/07/03'
```
All supported date formats:
```
'dd/mm/yyyy' => '11/07/2003'
'dd/mm/yy' => '11/07/03'
'yyyy/mm/dd' => '2003/07/11'
'yy/mm/dd' => '03/07/11'
'mm/dd/yy' => '07/11/03'
'mm/dd/yyyy' => '07/11/2003'
'dd month yyyy' => '11 July 2003'
```
Add time to the date
```
theDate.addTime(1, 2, 3)
// + 1 year, 2 months, 3 days
```
Remove time from the date
```
theDate.removeTime(1, 2, 3)
// - 1 year, 2 months, 3 days
```
--------
### Time
To create a new time object, input the time as a string and in which format the time is (24 for 24h clock or 12 for 12h clock)  

24h clock string format: 'hh:mm'  
12h clock string format: 'hh:mmxm'
```
const theTime = new Time('11:20', 24)
const anotherTime = new Time('03:00pm', 12)
```
Get time in 24h clock format
```
anotherTime.get24HourClock() // '15:00'
```
Get time in 12h clock format
```
theTime.get12HourClock() // '11:20am'
```
Add time to the time object
```
theTime.addTime(2, 30)
// + 2 hours, 30 minutes
```
Remove time from the time object
```
theTime.removeTime(2, 30)
// - 2 hours, 30 minutes
```
