
/**
 * Setup the sketch
 */
function setup() {
	createCanvas(windowWidth, windowHeight);
}

/**
 * Main animation loop
 */
function draw() {
	// set background to black
	background(0);
	// 2px lines
	strokeWeight(2);

	//
	// seconds
	//

	// first draw grey outline
	noFill();
	stroke(50);
	ellipse(width/4, height/2, 120, 120);

	// now draw circle based on current second
	noStroke();
	fill(255, 0, 0);
	ellipse(width/4, height/2, second()*2, second()*2);

	//
	// minutes
	//

	// first draw grey outline
	noFill();
	stroke(50);
	ellipse(2*width/4, height/2, 120, 120);

	// now draw circle based on current minute
	noStroke();
	fill(0, 255, 0);
	ellipse(2*width/4, height/2, minute()*2, minute()*2);

	//
	// hours
	//

	// first draw grey outline
	noFill();
	stroke(50);
	ellipse(3*width/4, height/2, 120, 120);

	// now draw circle based on current minute
	noStroke();
	fill(0, 0, 255);
	ellipse(3*width/4, height/2, hour()*10, hour()*10);


	// text time display

	fill(255);
	textSize(50);
	textAlign(CENTER);

	var hourText = hour();
	var minuteText = setDigits(minute(), 2);
	var secondText = setDigits(second(), 2);

	text(hourText+':'+minuteText+':'+secondText, width/2, height/3);

}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

/**
 * This function will make sure a number is
 * the desired number of digits. For example,
 * if `number = 1` and `digits = 2` than the
 * output will be the string `01` 
 */
function setDigits(number, digits) {
	var str = number+'';

	while(str.length < digits) {
		str = '0'+str;
	}

	return str
}
