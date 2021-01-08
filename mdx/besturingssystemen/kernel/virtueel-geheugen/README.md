---
title: Virtueel geheugen
order: 50
---

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

