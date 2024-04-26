function hideAllOutfits() {
    // Get all elements with the class name "outfit"
    let outfits = document.getElementsByClassName("outfit");
    
    // Loop through each outfit element and hide it
    for (let i = 0; i < outfits.length; i++) {
        outfits[i].style.display = "none";
    }
}
// s1 outfit
let s1 = document.getElementById("s1") /* get #s1 outfit */
/* the process: */
function s1clicked() {
	document.getElementById("body").style.display = 'none';
	hideAllOutfits();
	document.getElementById("o1").style.display = 'block';
}

s1.onclick = s1clicked;

let s2 = document.getElementById("s2") /* get #s1 outfit */
/* the process: */
function s2clicked() {
	document.getElementById("body").style.display = 'none';
	hideAllOutfits();
	document.getElementById("o2").style.display = 'block';
}

s2.onclick = s2clicked;

let s3 = document.getElementById("s3") /* get #s1 outfit */
/* the process: */
function s3clicked() {
	document.getElementById("body").style.display = 'none';
	hideAllOutfits();
	document.getElementById("o3").style.display = 'block';
}

s3.onclick = s3clicked;

let s4 = document.getElementById("s4") /* get #s1 outfit */
/* the process: */
function s4clicked() {
	document.getElementById("body").style.display = 'none';
	hideAllOutfits();
	document.getElementById("o4").style.display = 'block';
}

s4.onclick = s4clicked;


let s5 = document.getElementById("s5") /* get #s1 outfit */
/* the process: */
function s5clicked() {
	document.getElementById("body").style.display = 'none';
	hideAllOutfits();
	document.getElementById("o5").style.display = 'block';
}

s5.onclick = s5clicked;

/* repeat process */

// strip outfit
let stripbutton = document.getElementById('strip-button')/* get #strip-button */

function strip(){
	document.getElementById("body").style.display = 'block';
	hideAllOutfits();
	/* show #body */
}

stripbutton.onclick = strip;