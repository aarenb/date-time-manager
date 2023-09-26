# date-time-manager

This module can be used by other programmers to handel date and time in their applications. It can for example be used to build calendar apps and project planning tools.

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
--------
### Time
To create a new time object, input the time as a string and in which format the time is (24 for 24h clock or 12 for 12h clock)  

24h clock format: 'hh:mm'  
12h clock format: 'hh:mmxm'
```
const theTime = new Time('11:20', 24)
const anotherTime = new Time('11:20pm', 12)
```
