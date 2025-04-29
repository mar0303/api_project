# Reflexion: KI-gestützte Entwicklung analysieren

## Wo war die Copilot hilfreich? 

Die Copilot war sehr nützlich für die Korrektur der Syntax des Codes und stellen Vorschläge, um den Code reibungsloser laufen zu lassen.   
Copilot hat bei der Erstellung des Suchfeldes geholfen und direkt (ohne, dass ich explizit danach fragen musste) die Funktionalität miteingebaut. Auch meine Fragen zur Formatierung konnte Copilot gut beantworten.

## Welche Vorschläge musstest du anpassen oder verwerfen?

Verwerfen musste ich keine Vorschläge, aber ich habe den ersten Entwurf für die Positionierung des Suchfeldes angepasst, um unschöne Überschneidungen mit der Überschrift, die erst entstanden sind, zu vermeiden. In der folgenden Lösung des Problems hat Copilot zwischen breiten und schmalen Bildschirmen unterschieden, sodass das Suchfeld mal mittig und mal rechts positioniert war. Ursprünglich wollte ich die Lösung, das Suchfeld unterhalb der Überschrift zu positionieren, verwerfen, weil ich die Idee, es an der rechten Seite zu haben, verwirklichen wollte; nachdem ich es unter der Überschrift gesehen habe, hat es mir dann allerdings so gut gefallen, dass ich es für alle Bildschirmbreiten übernommen habe. Also habe ich den Vorschlag der Unterscheidung zwischen breiten und schmalen Bildschirmen verworfen, jedoch nicht aus Zwang.

## Wo hat Copilot Unfug generiert? 

Wenn ich mit den App.css file bearbeitet, trete ich ein Problem auf: Die Flaggen werden chaotisch gelegen, obwohl ich das element "gap" spezifiziert habe. 
Der Copilot hat suggeriertet, dass es um ein Syntaxsfehler geht. Diese Lösung wirkt nicht und die korrekte Antwort war. ich musste das Element "country-flag" detalliert. 
