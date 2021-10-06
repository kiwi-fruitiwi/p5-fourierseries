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

    for (let i=0; i<20; i++) {
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

    time +=0.01
}