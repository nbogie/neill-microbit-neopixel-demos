[Back to list of demos](README.md)

# 2p Racer LEDs

## What is it? 
This is a simple 2-player racing game on to separate strips of NeoPixels (60 pixels each works well).
## Where's the code?
2pRacerLEDs.js


## Controls:
### During pre-game:
* hold button A down to cycle colour for player 1
* hold button B down to cycle colour for player 2
* Shake to start race.
### During race:
* Button A or touch Pin1: make player 1 advance.
* Button B or touch Pin2: make player 2 advance.

## Radio Communication

Radio messages are sent and received on radio group 21

### Output Codes
(from core game to external modules like controllers and sound effects modules)

| Code | Meaning                   |
| ---- | ------------------------- |
| 0    | system initialising       |
| 1    | p1 button was pressed     |
| 2    | p2 button was pressed     |
| 5    | choosing colours: started |
| 10   | game start imminent       |
| 11   | red light (ready)         |
| 12   | amber light (steady)      |
| 13   | green light (go!)         |
| 20   | race started              |
| 21   | p1 is winning             |
| 22   | p2 is winning             |
| 23   | players are tied for lead |
| 31   | p1 wins                   |
| 32   | p2 wins                   |
| 201  | p1 button pressed before race started |
| 202  | p2 button pressed before race started |

### Input Codes:

(from remote controllers into core game)

| Code | Meaning                   |
| ---- | ------------------------- |
| 101  | remote button press of p1 |
| 102  | remote button press of p2 |
| 111  | start p1 colour cycling   |
| 112  | start p2 colour cycling   |
| 121  | stop p1 colour cycling    |
| 122  | stop p2 colour cycling    |
| 130  | remote button prss of "start game" |

## Challenges for 2p Racer LEDs

* make sound for the game by receiving an interpreting radio messages
* * using micropython: say "ready, steady, go",  (remember to cut off the start of makecode-origin radio bytes before interpreting as numbers) (femi did this for me at Science Museum's first CoderDojo)
* make a remote control for the game, using microbit's a, b, shake, etc.
* make a remote control with kitchen foil and cardboard
* make your own race game - perhaps against the clock, initially.


# 2pRacer Sound Module

## What is it?
This is an extension to the 2p racer game which adds sound effects by listening for and interpreting the game events sent via radio by the core game.  This demo makes sounds just by playing tones or triggering melodies.

## Where's the code?
[2pRacerRxSndPlayer.js](2pRacerRxSndPlayer.js)

## Challenges
* Make your own version of this module
* Have a different melody played when each player wins
* Code in micropython and use text-to-speech to SAY "Ready, Steady, Go!"

# 2pRacer Remote Controller

## What is it?
A demo of a controller (for two players) for the 2pRacerLEDs game, with buttons to start game, move player 1, and move player 2.

## Where's the code?
[2pRacerTxController.js](2pRacerTxController.js)

## Challenges
* make a remote control for the game, using microbit's a, b, shake, etc.
* make a remote control with kitchen foil and cardboard
* make two separate remote controls, on two different microbits
* decorate your controller
* think of what else you could control by remote
