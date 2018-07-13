
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


/**
 * FasterLED blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace fasterLED {

    // what's the current high value
    let barGraphHigh = 0;
    // when was the current high value recorded
    let barGraphHighLast = 0;


    /**
     * Displays a vertical bar graph based on the `value` and `high` value.
     * If `high` is 0, the chart gets adjusted automatically.
     * @param value current value to plot
     * @param high maximum value. If 0, maximum value adjusted automatically, eg: 0
     */
    //% blockId=device_fast_plot_bar_graph block="plot bar graph fast of %value |up to %high" icon="\uf080" blockExternalInputs=true
    //% parts="ledmatrix"
    export function gFastPlotBarGraph(value: number, high: number): void {
        let now = input.runningTime();
        value = Math.abs(value);

        if (high != 0) barGraphHigh = high;
        else if (value > barGraphHigh || now - barGraphHighLast > 10000) {
            barGraphHigh = value;
            barGraphHighLast = now;
        }

        barGraphHigh = Math.max(barGraphHigh, 16);

        let v = (value * 15) / barGraphHigh;
        let k = 0;
        for (let y = 4; y >= 0; --y) {
            for (let x = 0; x < 3; ++x) {
                if (k > v) {
                    led.unplot(2 - x, y);
                    led.unplot(2 + x, y);
                } else {
                    led.plot(2 - x, y);
                    led.plot(2 + x, y);
                }
                ++k;
            }
        }
    }

    
}
