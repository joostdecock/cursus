---
title: 'De kernel: Het hart van het OS'
order: 10
---

<Tip>

##### Welkom bij informatica, waar er altijd nog iets te leren valt

Je hebt net geleerd dat het besturingssysteem de belangrijkste software
op je computer is. Wel, de kernel is de belangrijkste software binnen het
besturingssysteem.

Dit soort van gelaagde complexiteit is typisch voor informatica.
Het is een wereld die bestaat uit zovele onderdelen die samenwerken,
dat je nooit alles kan kennen. Er is niemand die alles weet, dus maak
je daarover geen zorgen.

Onthou dat als je denk iets gesnapt te hebben, dat je steeds dieper kan
graven om te ontdekken van *maar hoe werkt dat nu  precies*.
Als je die nieuwsgierigheid kan aanscherpen zal je je nooit meer vervelen
en wellicht een kei worden in informatica.

</Tip>

De kernel is de dirigent van het besturingssysteem die zorgt dat alles 
in goede banen loopt. De kernel zorgt onder meer voor:

 - Het uitvoeren van programmas
 - Multitasking
 - Interrupts
 - Geheugenbeheer
 - Virtueel geheugen
 - Beveiliging
 - Toegang tot opslag en bestandssystemen
 - Aansturen van apparaten

Laat ons ze even kort bekijken:

## Procesbeheer

Als je een programma start op je computer, dan geef je eigenlijk het signaal aan
de kernel dat je dit programma wil starten. Het is de kernel zelf die dat werkje
voor zijn rekening neemt.

Elk programma en elke taak die een computer uitvoert voor de gebruiker
is een zogenaamd _proces_. Een proces is een programma in uitvoering.

De kernel is zelf geen proces, maar is verantwoordelijk voor het starten van processen
en het zorgen dat alles in goeie banen loopt.

## Multitasking

De tijd dat computers slechts 1 ding tegelijk wisten te doen ligt gelukkig lang
achter ons. In een multitasking besturingssysteem (er bestaan er andere, maar dat 
hoef je niet te onthouden) verdeelt de kernel de tijd van de processor onder
de verschillende processen.

Een beetje processortijd voor dit programma, een beetje processortijd voor dat programma,
enzoverder. Dit noemen we _process scheduling_. Het is als het beheren van de agenda
van een drukke wereldster.

Wanneer de kernel wisselt en de CPU toekent aan een ander programma noemen we dit
een _context switch_. Het wisselen van context.

## Interrupts

De kernel heeft het best druk met al dat werk. Dus heeft hij geen tijd om constant rond
te lopen met de vraag _heb jij nog iets nodig?_. Daarvoor zijn er interrupts, wat gewoon
Engels is voor onderbrekingen.

Een interrupt is een signaal dat aan de kernel zegt: hey, ik heb een taakje voor jou.
De kernel zal dat stoppen met wat hij bezig is -- maar niet zonder eerst alles netjes op
te slaan zodat ie nadien weer gewoon kan beginnen waar hij gestop is -- en de
interrupt afhandelen.

Interrupts zijn simpelweg noodzakelijk omdat de kernel niet alles tegelijk in de gaten kan
houden. Dus is het system van interrupts ingevoerd wat zoveel wil zeggen als: geef een gil
als je me nodig hebt.

## Geheugenbeheer

Bij geheugen is de regel: meer is beter. En processen denken daar ook zo over.
Die vragen dus om geheugen, en het is aan de kernel om dat geheugen te leveren.

Op zich lijkt dat eenvoudig, maar het is belangrijk om het deel van het geheugen
dat gebruikt wordt door programma A netjes af te bakenen zodat programma B er geen
gebruik van kan maken.

## Virtueel geheugen
 
Als een proces, of verschillende processen, meer geheugen vragen dan een beschikbaar is,
dan hebben we een probleem. De kernel zou kunnen zeggen van _sorry, dat gaan niet_ maar
programma's en je hele computer zouden hopeloos in de knoop raken als iedereen stond te 
wachten voor een beetje beschikbaar geheugen.

In de plaats daarvan zal de kernel gebruik maken van het zogenaamde virtueel geheugen.
Dat is eigenlijk helemaal geen geheugen. Virtueel betekend hier gewoon dat het niet echt is.

Als een programma meer geheugen vraagt dan de kernel ter beschikking heeft zal de kernel
een deel van het geheugen -- hopelijk een deel dat we niet meteen nodig hebben -- op
de harde schijf opslaan, en de vrijgemaakte plaats in het geheugen aan het nieuwe proces
geven.

Dit geheugen dat even op de harde schijf wordt geparkeerd is het virtueel geheugen.
Het is uiteraard veel langzamer om een deel van het geheugen op de harde schijf op te slaan,
en dan pas een nieuw stuk geheugen toe te kennen. Maar het is een betere oplossing dan gewoon
geen geheugen kunnen geven.

De volgende keer dat het proces het geheugen vraagt dat we hebben op de harde schijf gezet
moeten we die boel uiteraard weer in het geheugen laden. En wellicht een ander deel wegschrijven.
Dit ge-heen en weer tussen het geheugen en het virtueel geheugen op disk noemen we _swapping_.

Wanneer een computer teveel aan swapping moet doen om alle processen tevreden te houden
zal de performantie stijl bergaf gaan. Meer geheugen is dan een oplossing, of minder processen.

## Beveiliging

Tot zover hebben we gepraat over processen alsof iedereen gelijk is voor de wet.
Maar dat is niet zo. De processen waar je aan denkt -- een browser, een tekstverwerker, 
enzoverder -- zijn gebruikersprocessen. Ze draaien in wat _user space_ of _userland_
wordt genoemt.

Die processen hebben minder rechten dan zogenaamde _systeemprocessen_. Dat zijn dingen
die deel uitmaken van het besturingssysteem zelf. Drivers voor aparatuur bijvoorbeeld.
De meeste besturingssystemen hebben verschillende niveau's van toegang, en de hoogst
mogelijke toegang is kernel-level

## Toegang tot opslag en bestandssystemen

Gegevens opslag is ook een taakje waar de kernel voor instaat.
Hoe je precies gegevens opslaat hangt niet alleen af van de hardware
waarop je de gegevens wil opslaan, maar ook van het bestandssysteem.

Een bestandssysteem of _file system_ is een manier om gegevens te catalogeren en
terug te vinden op een opslagmedium zoals een harde schijf of USB stick.

Windows gebruikt NTFS of FAT. MacOs gebruikt APFS, en op Linux is EXT4 het meest populair,
maar de Linux kernel ondersteund een paar dozijn verschillende bestadssystemen.

Over bestandssystemen hoef je niet wakker te liggen. Maar onthoud dat als je een harde schijf
wil delen met computers met verschillende besturingssystemen, dat je dan een bestandssysteem
nodig hebt dat ze beiden kunnen lezen.

Dit is de reden dat elke USB-stick op deze planeet verkocht wordt met het FAT bestandssysteem,
specifiek FAT-32.

## Aansturen van apparaten

Last but not least, de kernel gebuikt zogenaamde _drivers_ om de hardware aan te sturen.
Een driver is een stukje software dat precies is gemaakt om te interageren tussen de
kernel en de hardware.

De driver vormt een abstractie. De kernel heeft maar 1 manier om te zeggen 
_muziek wat luiden aub_, en de driver zorgt er dan voor dat dat werkt met de 
geluidskaart die in de computer zit.


