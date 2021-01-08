---
title: Toegang tot opslag
order: 70
---

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

