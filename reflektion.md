## Namngivning (Kapitel 2)
<table>
  <tr>
   <td>
Namn och förklaring
   </td>
   <td>Reflektion och regler från Clean Code
   </td>
  </tr>
  <tr>
   <td><strong>Time</strong>
<p>
Klassnamn på en av huvudklasserna i modulen, representerar en viss tidpunkt
   </td>
   <td><strong>Class names</strong>
<p>
Klassnamn borde vara substantiv, vilket detta är.
<p>
<strong>Use Intention-Revealing Names</strong>
<p>
Bara ordet ‘Time’ säger kanske inte jättemycket, hade möjligen varit bättre att namnge den “TimeStamp” för att visa att det är en viss tidpunkt, och inte bara vilken tid som helst.
   </td>
  </tr>
  <tr>
   <td><strong>Date</strong>
<p>
Klassnamn på en av huvudklasserna i modulen, representerar ett visst datum.
   </td>
   <td><strong>Avoid Disinformation</strong>
<p>
Date finns redan som ett inbyggt objekt i javascript, vilket jag helt glömde bort när jag valde att använda mig av detta namnet. Detta namnet kan därför vara väldigt vilseledande. 
   </td>
  </tr>
  <tr>
   <td><strong>addTime(years, months, days)</strong>
<p>
Metodnamn på metod i Date klassen, som lägger till en viss tid på datumet.
   </td>
   <td><strong>Method names</strong>
<p>
Metodnamn borde vara verb eller en verbfras, vilket detta är.
<p>
<strong>Pick One Word Per Concept</strong>
<p>
Det finns en addTime metod i både Date & Time klassen, vilket gör det lättare för en användare att komma ihåg vad den heter eftersom det är samma namn.
   </td>
  </tr>
  <tr>
   <td><strong>getFormatedDate(format)</strong>
<p>
Metodnamn på metod i Date klassen, som returnerar en sträng med datumet i ett visst format.
   </td>
   <td><strong>Avoid Disinformation</strong>
<p>
Då det finns en inbyggd klass i Javascript som heter “Date”, kan man möjligen tro att denna metod ska returnera ett sådant objekt.
<p>
<strong>Use Intention-revealing Names</strong>
<p>
Man kan inte genom enbart namnet förstå att denna metod returnerar en sträng. Det hade kanske varit bättre om den istället hette t.ex. “getFormatedDateString” eller “getFormatedDateAsString”. Det hade blivit lite längre att skriva, men samtidigt lättare att förstå utan att behöva läsa dens jsdoc kommentar.
   </td>
  </tr>
  <tr>
   <td><strong>get12HourClock()</strong>
<p>
Metodnamn på metod i Time klassen, returnerar tiden som en sträng i 12 timmar klocka format.
   </td>
   <td><strong>Use Intention-revealing Names</strong>
<p>
Det framstår inte jättetydligt vad det faktiskt är som returneras av denna metoden, hade nog varit bättre om den hette t.ex. “get12HourClockFormat”, så att man förstår att den returnerar tiden i ett visst format. Kanske ännu bättre, då det beskriver mer, men det blir väldigt långt att skriva: “getTimeIn12HourClockFormat”
   </td>
  </tr>
</table>

För att ett namn verkligen ska följa "use intention-revealing names" kan de ibland bli väldigt långa. Det gäller att hitta en balans så att namnet inte blir allt för långt, men samtidigt innehåller så mycket information som möjligt. Att ha långa namn kanske inte är ett jättestort problem för de flesta programmerare idag, eftersom majoriteten använder program som automatiskt känner igen om du håller på att skriva ett visst namn och sen avslutar detta åt dig. De flesta programmen ger även t.ex. en lista på metoder hos en klass, så att du enkelt kan hitta och välja en metod med ett långt namn utan att du själv behöver skriva det. Men om man sen behöver arbeta med koden på något annat ställe än i ett sådant program, till exempel om du redigerar kod på en server, så kan det bli mycket jobbigt med långa namn. Långa namn gör även koden längre, vilket går emot vad som beskrivs i kapitel 3 i Clean Code, att funktioner ska vara så korta som möjligt.  

Jag har kanske inte varit den bästa på att välja bra namn på saker i min kod, men det känns som något man blir bättre på med tiden helt enkelt. Ju mer kod jag själv läser desto mer inser jag hur viktigt det faktiskt är med bra och tydlig namngivning. När jag först började programmera så använde jag mig ofta av “roliga” namn på saker, vilket går emot Clean Codes regel “Don’t be Cute”. Ibland gör jag fortfarande det, men bara om jag vet att ingen annan kommer att kolla på koden som jag skriver, och jag därför anser att det inte spelar så stor roll. 


## Funktioner (Kapitel 3)
(Samtliga metoder finns att hitta i Date.js/Time.js)
<table>
  <tr>
   <td>Metodnamn (och JSDOC)
   </td>
   <td>Antal rader
   </td>
   <td>Reflektion och regler från Clean Code
   </td>
  </tr>
  <tr>
   <td>/**
<p>
* Adds a certain amount of time to the date.
<p>
*
<p>
* @param {number} years - The amount of years to add.
<p>
* @param {number} months - The amount of months to add.
<p>
* @param {number} days - The amount of days to add.
<p>
*/
<p>
<strong>addTime(years, months, days)</strong>
   </td>
   <td>109
   </td>
   <td><strong>Small!</strong>
<p>
Detta är en ganska lång metod, och det finns definitivt möjligheter till att bryta ut vissa delar till sina egna metoder så att denna blir kortare (och mer <strong>dry</strong>).
<p>
<strong>Function Arguments</strong>
<p>
Metoden har tre arguments (<strong>triad</strong>). 
<p>
<strong>Argument objects</strong>
<p>
Man hade möjligen kunnat ändra så att användaren istället skickar in ett Date objekt som innehåller tiden som skall läggas till, så att det blir mindre argument att hålla koll på.
   </td>
  </tr>
  <tr>
   <td>/**<br>* Formats time into the 24 hour clock.
<p>
*
<p>
* @param {string} time - The time to format in 12 hour clock (hh:mmxm)
<p>
* @returns {string}The time formatted in the 24 hour clock (hh:mm)
<p>
*/
<p>
<strong>#to24HourClock(time)</strong>
   </td>
   <td>56
   </td>
   <td><strong>Function Arguments</strong>
<p>
Metoden har ett argument (<strong>monadic</strong>)
<p>
<strong>Prefer Exceptions to Returning Error Codes</strong>
<p>
Metoden throws TypeError (en exception) om argumentet inte är i rätt format.
   </td>
  </tr>
  <tr>
   <td>/**
<p>
* Formats time into the 12 hour clock.
<p>
*
<p>
* @param {string} time - The time to format in the 24 hour clock (hh:mm)
<p>
* @returns {string} The time formatted in 12 hour clock (hh:mmxm)
<p>
<strong>#to12HourClock(time)</strong>
   </td>
   <td>54
   </td>
   <td><strong>Don’t Repeat Yourself</strong>
<p>
Första delen i denna metoden är exakt samma som i to24HourClock, denna hade kunnat brytas ut till en egen metod så att koden blir mindre upprepande.
   </td>
  </tr>
  <tr>
   <td>/**<br>* Returns the date in a certain format
<p>
*
<p>
* @param {string} format - The format to return the date in, (ex. dd/mm/yy).
<p>
* @returns {string} The formatted date.
<p>
*/
<p>
<strong>getFormatedDate(format)</strong>
   </td>
   <td>35
   </td>
   <td><strong>Switch Statements</strong>
<p>
Metoden består främst av en switch statement, vilket är något Clean Code är väldigt emot. Hade kunnat ersätta detta med if-satser.
<p>
<strong>Blocks and Indenting</strong>
<p>
Block i olika kontrollsatser ska inte vara större än en rad, vilket switch statementen i denna metoden uppfyller (om man bortser från att varje block också har en “break”, men den delen behövs alltid.)
<p>
<strong>Do one thing</strong>
<p>
Metoden gör egentligen två saker, den formatterar datumet till ett visst format och sedan returnerar den detta. Man hade bryta ut de olika formatteringarna till sina egna metoder, men det känns onödigt i detta fallet eftersom de bara är en rad långa.
   </td>
  </tr>
  <tr>
   <td>/**
<p>
* Removes a certain amount of time from the time object
<p>
*
<p>
* @param {number} hours - The amount of hours to remove.
<p>
* @param {number} minutes - The amount of minutes to remove.
<p>
*/
<p>
<strong>removeTime(hours, minutes)</strong>
   </td>
   <td>32
   </td>
   <td><strong>Function Arguments</strong>
<p>
Metoden har två argument (<strong>dyadic</strong>)
<p>
<strong>Don’t Repeat Yourself</strong>
<p>
Vissa delar i denna koden är likadana som i Time’s addTime metod, och hade därför kunnat brytas ut för att undvika upprepning.
   </td>
  </tr>
</table>
  
I boken beskrivs det hur switch statements generellt är dåliga då de ofta gör mer än en sak, och det även inte går att skriva korta switch statements. 
Jag håller inte riktigt med om att man för det mesta inte borde använda dessa, då de enligt mig gör koden betydligt tydligare att läsa än om man använder t.ex. flera if-statements istället. 
Jatg håller med om att koden blir väldigt lång när man använder switch stements, vilket inte är så vidare bra, men det känns ändå som att det är enklare att förstå den. I vissa fall tror jag till och med flera if-statements kan se större ut än om man bara använder en switch statement.
