---
title: Het hexadecimaal talstelsel
---

Het hexadecimale talstelsen gebruiken we omdat het
ons toelaat om informatie weer te geven op een manier
die veel compacter is dan 
in [het binaire talstelsel](/referentie/binair/).

Compacter voor mensen, want computers vinden binair prima.

De reden dat we geen _gewoon_ decimaal talstelsel gebruiken
is omdat binair en decimaal niet goed op elkaar passen.

Om efficient te werken met binair (het 2-delig talstelsel)
moeten we een talstelsen gebruiken dat een macht is van 2.
Dus het 4-delig talstelsel zou kunnen, of het 8-delig talstelsel,
of het 16-delig talstel, wat we het hexadecimaal talstelsen noemen.

Om historische redenen is het 16-delig talstelsel gebruikt.
In het 16-delig talstelsen kan elk vakje 16 verschillende
combinaties bevatten.
In het binaire talstelsel hebben we daar 4 bits voor nodig.
Dus elk vakje hexadecimaal stelt 4 bits voor. Daarom zie je
hexadecimaal bijna steeds als groepjes van 2 vakjes, want
elk zo'n vakje is 1 byte.

Voor de rest werkt het net hetzelfde:

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

De reden dat ik het uitleg is om aan te tonen dat het hexadecimaal talstelsel
exact hetzelfde is. In de tekst hieronder is de `10` gewoon aangepast
naar `16` en zijn de voorbeelden anders. Voor de rest is het net hetzelfde.

</Note>

##### Het 16-delig talstelsel (hexadecimaal)

In het 16-delig talstelsel schrijven we getallen als een reeks van
cijfers in vakjes naast elkaar. Elke positie kan 16 verschillende
cijfers bevatten: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, 
`a`, `b`, `c`, `d`, `e`, of `f`.  
Daarbij zijn de waardes van de letters als volgt:

 - `a` = 10
 - `b` = 11
 - `c` = 12
 - `d` = 13
 - `e` = 14 
 - `f` = 15

Getallen die niet in 1 positie passen (`16` of groter)
kunnen we maken door aan de **linkerkant** een vakje
bij te voegen. Voor elke vakje dat we links toevoegen moeten we het cijfer
in dat vakje vermenigvuldigen met `16` tot een macht die bepaald word
door de afstand van het vakje tot het vakje helemaal rechts.  
Het cijfer in het vakje helemaal rechts is wat makkelijker, en 
geeft gewoon de waarde van dat vakje aan.

Door de waardes van de vakjes op te tellen bekomen we de waarde van het hele getal.

| cijfer \* 16<sup>2</sup> | + | cijfer \* 16<sup>1</sup> | + | cijfer | = | getal  |
| ------------------------ | - | ------------------------ | - | ------ | - | - |
| cijfer \* 256            | + | cijfer \* 16             | + | cijfer | = |   |
|  `0`                     | + |  `0`                     | + | `0`    | = | `0+0+0+0` = `0`  |
|  `f`                     | + |  `f`                     | + | `f`    | = | `3840+240+15` = `4095`  |
|  `7`                     | + |  `b`                     | + | `c`    | = | `1792+176+12` = `1980`  |


 - Voorbeeld: `7bc` 
 - Het cijfer `7` in het vakje dat `2` vakje naar links is opgeschoven 
 heeft een waarde van `7 * 16^2`, dus `1792`
 - Het cijfer `b` in het vakje dat `1` vakje naar links is opgeschoven 
 heeft een waarde van `11 * 16^1`, dus `176`
 - Het cijfer `c` in het vakje helemaal rechts heeft waarde `12`
 - De waardes van de vakjes opgeteld zijn `1792 + 176 + 12`, dus de waarde
 van het hele getal is `1980`

