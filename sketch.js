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
let time
let wave = [] // stores points that we've drawn

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    time = 0
}

function draw() {
    background(209, 80, 30)

    translate(width/4, height/2)
    stroke(0, 0, 100)
    noFill()

    let x = 0
    let y = 0
    let r = 75
    let n = 0

    let prevX, prevY

    for (let i=0; i<5; i++) {
        n = 2*i+1
        prevX = x
        prevY = y

        r = 75*(4/(n*PI))
        x += r*cos(n*time)
        y += r*sin(n*time)

        stroke(0, 0, 100)
        line(prevX, prevY, x, y)

        stroke(0, 0, 100, 20)
        circle(prevX, prevY, r*2)
    }

    wave.unshift(y)
    let offset = 240

    // we want to have some space between our drawer and the wave
    translate(offset, 0)
    line(x-offset, y, 0, wave[0])
    strokeWeight(8)
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