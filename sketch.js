/*
@author Kiwi
@date 2021-10-6

p5-fourierSeries with Daniel Shiffman https://youtu.be/Mm2eYfj0SgA

coding plan:
.	circle with moving point and line
	wave array + connector line: unshift, pop!
		check wave.length in the console
.	add a second circle rotating on the first!
.	parameterize n
	    square wave
	    sawtooth wave

	try sawtooth waves


 */
let font
let time = 0
let wave = [] // stores points that we've drawn
let slider

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    // slider = createSlider(1, 10)
}

function getSawtoothValues(n) {

}


// wraps up the three values of a fourier series epicycle: x, y, and radius
class fourierValues {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
    }
}


// gets the values of the ith square wave term in the fourier series
// a square wave's series is: 4*sin(nθ)/(nπ) for odd natural numbers
function getSquareWaveValues(i) {
    let n = 2*i+1
    let r = 75*(4/(n*PI))
    return new fourierValues(r*cos(n*time), -r*sin(n*time), r)
}


// a sawtooth wave's series is: 2sin(nθ)/(nπ); every odd n is negative
function getSawtoothWaveValues(i) {
    let n = i+1
    if (n%2===1)
        n *= -1

    let r = 75*(2/(n*PI))
    return new fourierValues(r*cos(n*time), -r*sin(n*time), r)
}


function draw() {
    background(209, 80, 30)

    translate(width/4, height/2)
    stroke(0, 0, 100)
    noFill()

    let x = 0
    let y = 0

    let prevPos

    for (let i=0; i<20; i++) {
        prevPos = new p5.Vector(x, y)
        let fourierValues = getSawtoothWaveValues(i)
        x += fourierValues.x
        y += fourierValues.y

        // connect the center of each epicycle to the next
        stroke(0, 0, 100)
        line(prevPos.x, prevPos.y, x, y)

        // draw the new epicycle we created! :D
        stroke(0, 0, 100, 20)
        circle(prevPos.x, prevPos.y, fourierValues.r*2)
    }

    wave.unshift(y)
    let offsetX = 240

    // we want to have some space between our drawer and the wave
    translate(offsetX, 0)
    line(x-offsetX, y, 0, wave[0])
    strokeWeight(10)
    point(0, wave[0])

    // display all the wave coordinates we've saved
    stroke(0, 0, 70)
    strokeWeight(1)
    beginShape()
    noFill()
    for (let i=0; i<wave.length; i++)
        vertex(i, wave[i])
    endShape()

    // remove extra coordinates once they are well off-screen
    if (wave.length > 250)
        wave.pop()

    time +=0.05
}