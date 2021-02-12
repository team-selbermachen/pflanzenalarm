
> Diese Seite bei [https://team-selbermachen.github.io/pflanzenalarm/](https://team-selbermachen.github.io/pflanzenalarm/) öffnen

Das Projekt Pflanzenalarm baisert auf einer Idee von Nina: https://achnina.de/fluchendepflanzen/ 
Sie stellt ihr Projekt in einen witzigen Video vor: https://youtu.be/6XJU8ZdDm8o

Der Feuchtigkeitssensor ermittelt die Feuchtigkeit der Pflanze. 
Der Bewegungssensor ermittelt, ob sich jemand im Raum befindet.
Es sind drei Verhaltensweisen programmiert:
- Anzeige der Feuchtigkeit im LED Display: Beim Start oder Aktivierung mit Knopf A+B 
- Sirenenalarm: Aktivierung mit Knopf A
- Stimmenalarm: Aktivierung mit Knopf B  
Ist einer der beiden Alarme aktive, dann wird er über die Lautsprecher ausgegeben, 
wenn der Bewegungsensor eine Bewegung registrier und die Pflanzenerde zu trocken ist.
Derzeit wir eine Feuchtigkeit von 30% als Höchstgrenze für den Alarm angenommen. 

Zutaten:
- [calliope mini rev. 1.2](https://calliope.cc/calliope-mini/uebersicht)
- [DFROBOTS BOSON - KIT FÜR DEN CALLIOPE MINI](https://calliope.cc/calliope-mini/erweiterungen/boson)
- JBL Charge 3 - als Lautsprecher und Batterie
- „Seeed Studio Grove - 4P Female Jumper to Grove 4P" Kabel
- YX5300 Serial mp3 player 
- MircoSD Speicherkarte


Aufbau:
![Versuchsaufbau](https://github.com/team-selbermachen/pflanzenalarm/blob/master/Pflanzenalarm.png?raw=true) 

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/team-selbermachen/pflanzenalarm** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/team-selbermachen/pflanzenalarm/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/team-selbermachen/pflanzenalarm** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/team-selbermachen/pflanzenalarm/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
