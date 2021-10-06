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

    let a = -time/100
    let x, y
    let original_r = 100
    let r = original_r

    for (let n=1; n<90; n+=2) {
        circle(0, 0, r*2) // radius is 100
        x = r*cos(n*a)
        y = r*sin(n*a)
        r = 1.5*original_r/(n*PI)

        line(0, 0, x, y)
        circle(x, y, r*2)

        translate(x, y)
    }

    time++
}