---
title: Besturings&shy;systemen
order: 10
---

Een besturingssysteem -- of operating system of _OS_ -- is systeem software
dat instaat voor een aantal primaire taken: 

 - Het OS staat in voor het beheer van de beschikbare middelen
 - Het OS heeft een aantal basisdiensten waar programma's gebruik van kunnen maken
 - Het OS is een brug tussen hardware en software


## Historiek

De allereerst computers (letterlijk _rekenaars_) konden een taak uitvoeren. 
En dan nog een, en dan nog een.

Die eerste computers ware reusachtige machines -- een zogenaamde
_mainframe_ -- en kon slechts 1 ding tegelijkertijd.
Als een gebruiker de computer gebruikte, dan kon niemand anders er gebruik van maken.

Dat was niet erg handig, wat beter zou zijn is als de computer
tegelijk verschillende programma's voor vershillende gebruikers kon uitvoeren.

Die extra complexiteit vereiste een soort van *basis programma* dat
het jongleren van verschillende taken voor zijn rekening nam.
Zo'n programma is een besturingssysteem. 

Besturingssystemen werden eerst gemaakt voor mainframes, maar 
historisch is het belangrijkste besturingssysteem wellicht Unix.
Ontwikkeld in the jaren 70 door onderzoekers aan het AT&T Bell lab
is het de betovergrootmoeder van:

 - Commerciele Unix versies zoals Solaris (Sun), HP-UX (HP), en AIX (IBM)
 - Vrije Unix versies zoals OpenBsd, NetBsd, FreeBsd, en DragonflyBsd
 - MacOs
 - Linux

Het besturingssysteem dat jij misschien best kent, Microsoft Windows, ontbreekt
op dat lijstje. Windows is best een rare vogel onder besturingssystemen, maar
wel het populairste op desktop computers.

Over het algemeen zijn de (verre) unix varianten absoluut koning, en in het bijzonder
Linux. Dat komt enerzijds omdat Android gebaseerd is op Linux, en er zijn meer dan
2.5 miljard Android toestellen. Maar ook omdat Linux veruit het meest populaire
besturingssysteem is voor _servers_, de werkpaarden onder de computers.
De top-500 lijst van supercomputers -- een lijst van de krachtigste
computers ter wereld -- is een 100% Linux club.

## Beheer van middelen

Je denk er waarschijnlijk niet aan als je achter *jouw* computer zit, maar het 
beheer van de beschikbare middelen is een van de belangrijkste taken van een _OS_.

Beeld je zo een enorme mainframe in in de kelder, en 10 werknemers die allemaal
hun berekeningen willen uitvoeren. Het is de taak van het _OS_ om te zorgen
dat iedereen zo goed mogelijk zijn beurt krijgt.

Dit gebeurd ook in moderne computers, al is er vaak maar 1 gebruiker.
Maar het delen van middelen gebeurt ook tussen programma's. Zeker omdat
alle programma's het geheugen (willen) gebruiken.

## Accounting

Ook iets waar we niet meteen aan denken met onze moderne computers, maar
wat zijn wortels heeft in het mainframe tijdperk, is accounting.
Met andere woorden: boekhouding.

Het _OS_ zal in de gaten houden welke gebruikers (of programma's) welke
middelen gebruiken, en ingrijpen als ze overdrijven.
Bijvoorbeeld, je kan jou computer delen met een andere gebruikers, maar
instellen dat die maar zoveel plaats mag gebruiken op je harde schijf.

Die _accounting_ functionaliteit was belangrijk in het mainframe tijdperk
omdat gebruikers (of hun afdeling) vaak werden gefactureerd voor het gebruik
van de mainframe.

## Services

Het _OS_ biedt ook een aantal dienst aan, of services.
Die diensten kunnen door programma's of andere software gebruikt worden.

Moderne besturingssystemen hebben een waslijst aan diensten. 
Het inplannen van taken, het bijhouden van de tijd, het registreren van de huidige locatie, enz.

## Hardware en drivers

Door middle van zogenaamde _drivers_ maakt het OS te vertaalslag van instructies
in programmas naar commando's die de hardware kan begrijpen.

<ReadMore />
