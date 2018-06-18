# neill-microbit-neopixel-demos
A collection of microbit neopixel demos used at code clubs and jams to stimulate ideas.  

Note that the focus with a demo is not as a code example for the kids.  Simpler examples of each demo, or at least its core concepts, will be prepared here, too, and marked with the suffix ...Example.js

## 2p Racer LEDs

This is a simple 2-player racing game on to separate strips of NeoPixels (60 pixels each works well).

### Controls:
#### During pre-game:
* hold button A down to cycle colour for player 1
* hold button B down to cycle colour for player 2
* Shake to start race.
#### During race:
* Button A or touch Pin1: make player 1 advance.
* Button B or touch Pin2: make player 2 advance.

### Radio Communication

Radio messages are sent and received on radio group 21

#### Output Codes
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
| 31   | p1 wins                   |
| 32   | p2 wins                   |
| 201  | p1 button pressed before race started |
| 202  | p2 button pressed before race started |

#### Input Codes:

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

## Notes about GitHub Pages (for Neill)

* [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).
* [repository settings](https://github.com/nbogie/neill-microbit-neopixel-demos/settings) (The name of this theme is saved in the Jekyll `_config.yml` configuration file.)
* [github pages documentation](https://help.github.com/categories/github-pages-basics/)
