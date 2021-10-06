/*
@author Kiwi
@date 2021-10-6

p5-fourierSeries with Daniel Shiffman https://youtu.be/Mm2eYfj0SgA

coding plan:
.	circle with moving point and line
	wave array + connector line: unshift, pop!
		check wave.length in the console
	add a second circle rotating on the first!
	parameterize n
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
    circle(0, 0, 200) // radius is 100

    let r = 100
    let a = time/100
    line(0, 0, r*cos(a), r*sin(a))
    circle(r*cos(a), r*sin(a), 30)

    time++
}