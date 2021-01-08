---
title: Interupts
order: 30
---

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

