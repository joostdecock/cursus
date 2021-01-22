---
title: Het binair talstelsel
---

Je hebt wellicht al wel eens gehoord dat voor een computer 
alles bestaat uit eentjes en nulletjes. En dat is ook zo,
als puntje bij paaltje komt werkt een computer alleen met `1` en `0`.

De reden daarvoor is eenvoudig: Uiteindelijk is een computer
een elektronische machine die bestaat uit een heleboel schakelaartjes.
En die schakelaartjes kunnen aan staan, of `1`, of die kunnen 
uitstaan, of `0`.

Dat wil meteen ook zeggen dat alle informatie in een computer
moet worden voorgesteld op een manier die bestaat uit een reeks
van `0` en `1`. Omdat te doen gebruikt een computer het binair
talstelsel. Dit laat de computer toe om getallen op te slaan,
en die getallen kunnen dan op hun beurt weer een letter voorstellen,
of en kleur enzoverder.

Maar de belangrijkste basis is om met al die `0` en `1`tjes getallen
te kunnen vormen. Dit doen we met het binaire talstelsel, wat een
2-delig telsel is.

We zijn gewoon om met het decimale talstelsel te werken, want een
10-delig talstelsel is. Laten we beginnen met wat we gewoon zijn:

##### Het 10-delig talstelsel (decimaal)

In het 10-delig talstelsel schrijven we getallen als een reeks van
cijfers in vakjes naast elkaar. Elke positie kan 10 verschillende
cijfers bevatten: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, of `9`.

Getallen die niet in 1 positie passen (`10` of groter)
kunnen we maken door aan de **linkerkant** een vakje
bij te voegen. Voor elke vakje dat we links toevoegen moeten we het cijfer
in dat vakje vermenigvuldigen met `10` tot een macht die bepaald word
door de afstand van het vakje tot het vakje helemaal rechts.  
Het cijfer in het vakje helemaal rechts is wat makkelijker, en 
geeft gewoon de waarde van dat vakje aan.

Door de waardes van de vakjes op te tellen bekomen we de waarde van het hele getal.

| cijfer \* 10<sup>3</sup> | + | cijfer \* 10<sup>2</sup> | + | cijfer \* 10<sup>1</sup> | + | cijfer | = | getal  |
| ------------------------ | - | ------------------------ | - | ------------------------ | - | ------ | - | - |
| cijfer \* 1000           | + | cijfer \* 100            | + | cijfer \* 10             | + | cijfer | = |   |
| `0`                      | + |  `0`                     | + |  `0`                     | + | `0`    | = | `0+0+0+0` = `0`  |
| `9`                      | + |  `9`                     | + |  `9`                     | + | `9`    | = | `9000+900+90+9` = `9999`  |
| `0`                      | + |  `3`                     | + |  `2`                     | + | `8`    | = | `0+200+20+8` = `328`  |


 - Voorbeeld: `328` 
 - Het cijfer `3` in het vakje dat `2` vakjes naar links is opgeschoven 
 heeft een waarde van `3 * 10^2`, dus `300`
 - Het cijfer `2` in het vakje dat `1` vakje naar links is opgeschoven 
 heeft een waarde van `2 * 10^1`, dus `20`
 - Het cijfer `8` in het vakje helemaal rechts heeft waarde `8`
 - De waardes van de vakjes opgeteld zijn `300 + 20 + 8`, dus de waarde
 van het hele getal is `328`

<Note>

##### Ja hallo, dat weet ik wel hoor

Het lijkt misschien wat vreemd om het decimaal talstelsel zo uit te leggen,
want wellicht weet je wel hoe het werkt.

De reden dat ik het uitleg is om aan te tonen dat het binair talstelsel
exact hetzelfde is. In de tekst hieronder is de `10` gewoon aangepast
naar `2` en zijn de voorbeelden anders. Voor de rest is het net hetzelfde.

</Note>

##### Het 2-delig talstelsel (binair)

In het 2-delig talstelsel schrijven we getallen als een reeks van
cijfers in vakjes naast elkaar. Elke positie kan 2 verschillende
cijfers bevatten: `0` of `1`.

Getallen die niet in 1 positie passen (`2` of groter)
kunnen we maken door aan de **linkerkant** een vakje
bij te voegen. Voor elke vakje dat we links toevoegen moeten we het cijfer
in dat vakje vermenigvuldigen met `2` tot een macht die bepaald word
door de afstand van het vakje tot het vakje helemaal rechts.  
Het cijfer in het vakje helemaal rechts is wat makkelijker, en 
geeft gewoon de waarde van dat vakje aan.

Door de waardes van de vakjes op te tellen bekomen we de waarde van het hele getal.

| cijfer \* 2<sup>3</sup> | + | cijfer \* 2<sup>2</sup> | + | cijfer \* 2<sup>1</sup> | + | cijfer | = | getal  |
| ------------------------ | - | ------------------------ | - | ------------------------ | - | ------ | - | - |
| cijfer \* 8           | + | cijfer \* 4            | + | cijfer \* 2             | + | cijfer | = |   |
| `0`                      | + |  `0`                     | + |  `0`                     | + | `0`    | = | `0+0+0+0` = `0`  |
| `1`                      | + |  `1`                     | + |  `1`                     | + | `1`    | = | `8+4+2+1` = `15`  |
| `1`                      | + |  `1`                     | + |  `0`                     | + | `1`    | = | `8+4+0+1` = `13`  |


 - Voorbeeld: `1101` 
 - Het cijfer `1` in het vakje dat `3` vakjes naar links is opgeschoven 
 heeft een waarde van `1 * 2^3`, dus `8`
 - Het cijfer `1` in het vakje dat `2` vakje naar links is opgeschoven 
 heeft een waarde van `1 * 2^2`, dus `4`
 - Het cijfer `0` in het vakje dat `1` vakje naar links is opgeschoven 
 heeft een waarde van `0 * 2^1`, dus `0`
 - Het cijfer `1` in het vakje helemaal rechts heeft waarde `1`
 - De waardes van de vakjes opgeteld zijn `8 + 4 + 0 + 1`, dus de waarde
 van het hele getal is `13`

