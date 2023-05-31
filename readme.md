PROBLEMA: Il computer deve generare 16 numeri casuali cioè le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. 

1 - aggiungere la stilizzazione della pagina
2 - generare un numero random con la funzione
3 - creare un array vuoto
4 - fare in modo di popolare l'array con numeri random di caselle da 1 a 100 per 16 volte per avere 16 bombe
5 - se clicked non è una bomba fare la casella azzurra
6 - se clicked è una bomba farla diventare rossa
    6.1 - far terminare il gioco se viene cliccata una bomba
        6.1.1 - far apparire un messaggio?
7 - far vincere il giocatore e terminare la partita se clicca tutte le caselle che non sono bombe
    7.1 - far apparire un messaggio?
8 - far comparire il punteggio (numero di volte che il giocatore ha cliccato su una cella non bomba)