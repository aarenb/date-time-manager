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

För att ett namn verkligen ska följa "use intention-revealing names" kan de ibland bli väldigt långa. Det gäller att hitta en balans så att namnet inte blir allt för långt, men samtidigt innehåller så mycket information som möjligt. Att ha långa namn kanske inte är ett jätte stort problem för de flesta programmerare idag, eftersom majoriteten använder program som automatiskt känner igen om du håller på att skriva ett visst namn och sen avslutar detta åt dig. De flesta programmen ger även t.ex. en lista på metoder hos en klass, så att du enkelt kan hitta och välja en metod med ett långt namn utan att du själv behöver skriva det. Men om man sen behöver arbeta med koden på något annat ställe än i ett sådant program, till exempel om du redigerar kod på en server, så kan det bli mycket jobbigt med långa namn. Långa namn gör även koden längre, vilket inte alltid är så bra då det kan göra det svårare för någon ny att snabbt få en översyn över den.


## Funktioner (Kapitel 3)
I boken beskrivs det hur switch statements generellt är dåliga då de ofta gör mer än en sak, och det även inte går att skriva korta switch statements. 
Jag håller inte riktigt med om att man för det mesta inte borde använda dessa, då de enligt mig gör koden betydligt tydligare att läsa än om man använder t.ex. flera if-statements istället. 
Jatg håller med om att koden blir väldigt lång när man använder switch stements, vilket inte är så vidare bra, men det känns ändå som att det är enklare att förstå den. I vissa fall tror jag till och med flera if-statements kan se större ut än om man bara använder en switch statement.
