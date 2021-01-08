---
title: 'Kleuren op het web, van #000000 tot #FFFFFF'
order: 50
---

Op het web gebruiken we het RGB model met een kleurendiepte van 24 bit met 8 bit transparantie.

Dat wil zeggen:

 - 8 bits voor Rood
 - 8 bits voor Groen
 - 8 bits voor Blauw
 - (eventueel) 8 bits voor transparantie of het zogenaamde alpha channel

8 bits kunnen we schrijven als `00000000` maar dat neemt nogal veel plaats in.
Daarom gebruiken we het hexadecimaal talstelsel. Da's net zoals het 10-delige
talstelsel dat we gewoon zijn, alleen gebruiken we 16 als basis:

 - 0: 0
 - 1: 1
 - 2: 2
 - 3: 3
 - 4: 4
 - 5: 4
 - 6: 6
 - 7: 7
 - 8: 8
 - 9: 9
 - A: 10
 - B: 11
 - C: 12
 - D: 13
 - E: 14
 - F: 15

Met dit talstelsel kunnen we 256 waarden in 2 vakjes proppen (16 * 16), dus nu kunnen 
we 8 bits (`00000000`) schrijven als `00`.
Als we rood, groen, en blauw aan elkaar plakken krijgen we `000000`, en de conventie is
dat we daar een `#` voorzetten: `#000000` is zwart.

Waarom zwart? Omdat alle kleuren _op nul staan_ wat zwart geeft.

Het maximum dat we een kleur kunnen geven is `FF`. Dus:

 - `#FF0000` is rood
 - `#00FF00` is groen
 - `#0000FF` is blauw

Maar we kunnen uiteraard zoveel mengen als we willen.

<Tip>Als alle kleuren dezelfde waarde hebben krijg je altijd een grijswaarde.</Tip>

Deze manier om kleuren weer te geven is de meest gebruikte op het internet.
Er zijn er anderen, maar we komen hier later uitgebreid op terug.
