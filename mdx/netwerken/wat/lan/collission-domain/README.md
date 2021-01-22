---
title: Collission domain
order: 20
---

Een van de belangrijke taken van het netwerk is toegangscontrole.
Maw, zorgen dat niet alle computers door elkaar zitten te praten.

Ethernet gebruikt daarvoor CSMA/CD, wat staat voor 
_Carrier Sense Multiple Access with Collision Detection_.

Da's een hele mond vol, maar waar het op neerkomt is dat computers die een 
netwerk delen niet tegelijkertijd mogen _praten_ op het netwerk.
Wanneer dat toch gebeurd, dan noemen we dan een _collission_ of botsing.

Het netwerk detecteerd zulke collissions of botsingen 
(vandaar collission detection in de naam) en zal eventjes wachten alvorens
opnieuw te proberen de informatie op het netwerk te verzenden.

De beperking dat geen twee computers op hetzelfde ogenblik mogen praten 
is waarom we niet gewoon alle computers op 1 netwerk kunnen plaatsen.

Op die manier zouden ze allemaal hetzelfde _collission domain_ delen.
Maw, de kans op collissions of botsingen wordt groter naarmate er meer
computers van hetzelfde netwerk gebruik maken.

Om deze reden worden netwerken onderverdeeld in kleinere netwerken die dan
aan elkaar worden verbonden, waarbij elk netwerk zijn eigen beperkte 
collission domain heeft.

Dat verdelen van een netwerk in kleinere netwerkjes noemen we subnetting 
(of of subnetering in het Nederlands) en zo'n deel-netwerk is een subnet.

<Tip>

Subnets berekenen is een gegarandeerde examenvraag in elke opleiding netwerken

</Tip>
