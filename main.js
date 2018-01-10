//Adds text to button named first
function speak () {
 var t = document.getElementById("f");
	t.innerText ="I am right";
}


//Changes text next to button named second
function speak2() {
	// body...
	var s = document.getElementById("f");
	s.innerText ="No I am right";
}

//Changes text when mouse hovers over text
function alertMe(){
	alert("Hey I told you not to hover over me!");
	
}


function findRadius(){
	var rd = document.getElementById("radius").value;

	var rad = (4/3)*(3.14);
	rad = rad *Math.pow(rd, 3);
	rad = rad.toFixed(2);
	alert("volume of a sphere with radius " + rd + " is: " + rad);

}