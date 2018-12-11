
[Back to list of demos](README.md)

# Remote Light-Level to NeoPixel BarChart Demo

## What is it? 

This is a very simple to implement demo which uses two microbits.  One microbit detects light-level multiple times per second and sends this level as a radio message to the other microbit.  This second microbit listens for this radio message and displays this received value on a bar chart made of neopixels.

## Where's the code?

[LightLevelBarChartLEDsTxRxPair.js](LightLevelBarChartLEDsTxRxPair.js)

## Hardware Build instructions

## Instructions for use

* Change the amount of light falling on the LEDs of the light-detector and watch the display change on the neopixel barchart!  
* You can use a torch or try covering it with your hand.

## Investigation
* Test how far away you can be for this still to work.  
* What colour of light works best?

## Radio Communication

Radio messages are sent and received on radio group 35


## Challenges

* make your own version of the transmitter part, and send light level to the remote bar chart
* send something different to the remote bar chart.  acceleration?  compass direction? magnetic field strength?  reaction time?  high-score?
* add a servo-driven meter to display the light level in a different way
* make your own bar chart with neopixels
