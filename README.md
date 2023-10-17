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
const theDate = new Date(2003, 7, 11)
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
const theDate = new Date(2003, 7, 11)

theDate.addYears(1) // '11/07/2004'
theDate.addMonths(1) // '11/08/2004'
theDate.addDays(1) // '12/08/2004'
```
Subtract time from the date
```
const theDate = new Date(2003, 7, 11)

theDate.subtractYears(1) // '11/07/2002'
theDate.subtractMonths(1) // '11/06/2002'
theDate.subtractDays(1) // '10/06/2002'
```
Set a specific date
```
const theDate = new Date(2003, 7, 11)

theDate.setYear(2022) // '11/07/2022'
theDate.setMonth(10) // '11/10/2022'
theDate.setDay(18) // '18/10/2022'
```
--------
### Time
To create a new time object, input the arguments hour(in the 24 hour clock format) and minute.
```
const theTime = new Time(11, 20)
```
Get time in 24h clock format
```
theTime.getTimeIn24HourClockFormat() // '11:20'
```
Get time in 12h clock format
```
theTime.getTimeIn12HourClockFormat() // '11:20am'
```
Add time to the time object
```
const theTime = new Time(11, 20)

theTime.addHours(1) // '12:20'
theTime.addMinutes(1) // '12:21'
```
Subtract time from the time object
```
const theTime = new Time(11, 20)

theTime.subtractHours(1) // '10:20'
theTime.subtractMinutes(1) // '10:19'
```
Set a specific time
```
const theTime = new Time(11, 20)

theTime.setHour(15) // '15:20'
theTime.setMinute(30) // '15:30'
```

## For developers
[You can find more info for developers who wants to work with the code here](developer.md)
