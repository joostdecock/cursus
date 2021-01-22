---
title: 'De praktijk: Het Internet Protocol (IP)'
order: 20
---

Het [OSI model](/netwerken/hoe/osi/) was een prima idee, 
maar hopeloos gecompliceerd. Het werd bedacht door wetenschappers in
een labo, en wanneer het tijd werd om de ideeen van het OSI model
in de praktijk toe te passen bleek al snel dat al die lagen misschien
niet nodig waren.

Daarom kwam men op de proppen met _IP_, wat de praktische
invullen van het OSI model is, met wat minder lagen:

![Het theoretische OSI model in vergelijking met IP](ip.png)

_IP_ staat voor Internet Protocol. En het is de moeite waard om
even stil te staan en te laten bezinken wat dat precies betekend:

<Tip> Het internet is genoemd naar het Internet Protocol (IP), en niet omgekeerd</Tip>

Dat het hele internet genoemd is naar dit protocol is een goede 
indicator van hoe belangrijk dit protocol is in de wereld, en in het
bijzonder voor wie iets over computer en netwerken wil leren.

Bij IP is de applicatie laag veel belangrijker geworden.

<Note>

De oorsprong van IP in het OSI model is waarom we nog steeds
naar de applicatie laag verwijzen als _layer 7_

</Note>

Al het fysieke spul zit in de link layer (typisch layer 2 genoemd),
het IP protocol zelf werk op layer 3, de internet layer.
En tussen de belangrijke layer 7 en de laag van IP zelf zit
de transport layer, of layer 4.

Het belangrijkste protocol op layer 4 (dus bovenop IP) is _TCP_.
IP met daarbovenop TCP is zo een courante combinatie dat er
vaak gesproken wordt van TCP/IP, in die maten zelfs dat IP en TCP/IP
door elkaar worden gebruikt om naar hetzelde netwerk model te verwijzen.
