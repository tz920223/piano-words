var input = document.getElementById("keyboard-input");

input.onkeypress = function(e) {
	startAnimation();
	switch(e.keyCode) {
	// enter; erase text
	case 13:
		input.value = "";
		stopAnimation();
		break;
	// numbers
	case 48:  // 0 pressed
		var thissound = document.getElementById('key-0');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('0').style.animation = "fade-in-out-black 1s";
		break;
	case 49:  // 1 pressed
		var thissound = document.getElementById('key-1');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('1').style.animation = "fade-in-out-black 1s";
		break;
	case 50:  // 2 pressed
		var thissound = document.getElementById('key-2');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('2').style.animation = "fade-in-out-black 1s";
		break;
	case 51:  // 3 pressed
		var thissound = document.getElementById('key-3');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('3').style.animation = "fade-in-out-black 1s";
		break;
	case 52:  // 4 pressed
		var thissound = document.getElementById('key-4');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('4').style.animation = "fade-in-out-black 1s";
		break;
	case 53:  // 5 pressed
		var thissound = document.getElementById('key-5');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('5').style.animation = "fade-in-out-black 1s";
		break;
	case 54:  // 6 pressed
		var thissound = document.getElementById('key-6');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('6').style.animation = "fade-in-out-black 1s";
		break;
	case 55:  // 7 pressed
		var thissound = document.getElementById('key-7');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('7').style.animation = "fade-in-out-black 1s";
		break;
	case 56:  // 8 pressed
		var thissound = document.getElementById('key-8');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('8').style.animation = "fade-in-out-black 1s";
		break;
	case 57:  // 9 pressed
		var thissound = document.getElementById('key-9');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('9').style.animation = "fade-in-out-black 1s";
		break;
	// letters
	case 65: // A pressed
	case 97: // a pressed
		var thissound = document.getElementById('key-a');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('a').style.animation = "fade-in-out-white 1s";
		break;
	case 66: // B pressed
	case 98: // b pressed
		var thissound = document.getElementById('key-b');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('b').style.animation = "fade-in-out-white 1s";
		break;
	case 67: // C pressed
	case 99: // c pressed
		var thissound = document.getElementById('key-c');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('c').style.animation = "fade-in-out-white 1s";
		break;
	case 68: // D pressed
	case 100: // d pressed
		var thissound = document.getElementById('key-c');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('c').style.animation = "fade-in-out-white 1s";
		break;
	case 69: // E pressed
	case 101: // e pressed
		var thissound = document.getElementById('key-e');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('e').style.animation = "fade-in-out-white 1s";
		break;
	case 70: // F pressed
	case 102: // f pressed
		var thissound = document.getElementById('key-f');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('f').style.animation = "fade-in-out-white 1s";
		break;
	case 71: // G pressed
	case 103: // g pressed
		var thissound = document.getElementById('key-f');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('f').style.animation = "fade-in-out-white 1s";
		break;
	case 72: // H pressed
	case 104: // h pressed
		var thissound = document.getElementById('key-h');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('h').style.animation = "fade-in-out-white 1s";
		break;
	case 73: // I pressed
	case 105: // i pressed
		var thissound = document.getElementById('key-i');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('i').style.animation = "fade-in-out-white 1s";
		break;
	case 74: // J pressed
	case 106: // j pressed
		var thissound = document.getElementById('key-j');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('j').style.animation = "fade-in-out-white 1s";
		break;
	case 75: // K pressed
	case 107: // k pressed
		var thissound = document.getElementById('key-j');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('j').style.animation = "fade-in-out-white 1s";
		break;
	case 76: // L pressed
	case 108: // l pressed
		var thissound = document.getElementById('key-l');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('l').style.animation = "fade-in-out-white 1s";
		break;
	case 77: // M pressed
	case 109: // m pressed
		var thissound = document.getElementById('key-m');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('m').style.animation = "fade-in-out-white 1s";
		break;
	case 78: // N pressed
	case 110: // n pressed
		var thissound = document.getElementById('key-o');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('o').style.animation = "fade-in-out-white 1s";
		break;
	case 79: // O pressed
	case 111: // o pressed
		var thissound = document.getElementById('key-o');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('o').style.animation = "fade-in-out-white 1s";
		break;
	case 80: // P pressed
	case 112: // p pressed
		var thissound = document.getElementById('key-p');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('p').style.animation = "fade-in-out-white 1s";
		break;
	case 81: // Q pressed
	case 113: // q pressed
		var thissound = document.getElementById('key-q');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('q').style.animation = "fade-in-out-white 1s";
		break;
	case 82: // R pressed
	case 114: // r pressed
		var thissound = document.getElementById('key-q');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('q').style.animation = "fade-in-out-white 1s";
		break;
	case 83: // S pressed
	case 115: // s pressed
		var thissound = document.getElementById('key-s');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('s').style.animation = "fade-in-out-white 1s";
		break;
	case 84: // T pressed
	case 116: // t pressed
		var thissound = document.getElementById('key-t');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('t').style.animation = "fade-in-out-white 1s";
		break;
	case 85: // U pressed
	case 117: // u pressed
		var thissound = document.getElementById('key-t');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('t').style.animation = "fade-in-out-white 1s";
		break;
	case 86: // V pressed
	case 118: // v pressed
		var thissound = document.getElementById('key-l');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('l').style.animation = "fade-in-out-white 1s";
		break;
	case 87: // W pressed
	case 119: // w pressed
		var thissound = document.getElementById('key-e');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('e').style.animation = "fade-in-out-white 1s";
		break;
	case 88: // X pressed
	case 120: // x pressed
		var thissound = document.getElementById('key-q');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('q').style.animation = "fade-in-out-white 1s";
		break;
	case 89: // Y pressed
	case 121: // y pressed
		var thissound = document.getElementById('key-s');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('s').style.animation = "fade-in-out-white 1s";
		break;
	case 90: // Z pressed
	case 122: // z pressed
		var thissound = document.getElementById('key-o');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('o').style.animation = "fade-in-out-white 1s";
		break;
	case 107: // + pressed
		var thissound = document.getElementById('key-v');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('v').style.animation = "fade-in-out-black 1s";
		console.log("yaay");
		break;
	case 187: // - pressed
		var thissound = document.getElementById('key-w');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('w').style.animation = "fade-in-out-black 1s";
		break;
	case 106: // * pressed
		var thissound = document.getElementById('key-x');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('x').style.animation = "fade-in-out-black 1s";
		break;
	case 111: // / pressed
		var thissound = document.getElementById('key-y');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('y').style.animation = "fade-in-out-black 1s";
		break;
	case 189: // = pressed
		var thissound = document.getElementById('key-z');
		thissound.currentTime = 0;
		thissound.play();
		document.getElementById('z').style.animation = "fade-in-out-black 1s";
		break;
	}
}

input.onkeyup = function (e) {
	switch(e.keyCode) {
		case 48:
			document.getElementById('0').style.animation = "fade-back-in-black 1s";
			break;
		case 49:  // 1 pressed
			document.getElementById('1').style.animation = "fade-back-in-black 1s";
			break;
		case 50:  // 2 pressed
			document.getElementById('2').style.animation = "fade-back-in-black 1s";
			break;
		case 51:  // 3 pressed
			document.getElementById('3').style.animation = "fade-back-in-black 1s";
			break;
		case 52:  // 4 pressed
			document.getElementById('4').style.animation = "fade-back-in-black 1s";
			break;
		case 53:  // 5 pressed
			document.getElementById('5').style.animation = "fade-back-in-black 1s";
			break;
		case 54:  // 6 pressed
			document.getElementById('6').style.animation = "fade-back-in-black 1s";
			break;
		case 55:  // 7 pressed
			document.getElementById('7').style.animation = "fade-back-in-black 1s";
			break;
		case 56:  // 8 pressed
			document.getElementById('8').style.animation = "fade-back-in-black 1s";
			break;
		case 57:  // 9 pressed
			document.getElementById('9').style.animation = "fade-back-in-black 1s";
			break;
		// letters
		case 65: // A pressed
		case 97: // a pressed
			document.getElementById('a').style.animation = "fade-back-in-white 1s";
			break;
		case 66: // B pressed
		case 98: // b pressed
			document.getElementById('b').style.animation = "fade-back-in-white 1s";
			break;
		case 67: // C pressed
		case 99: // c pressed
			document.getElementById('c').style.animation = "fade-back-in-white 1s";
			break;
		case 68: // D pressed
		case 100: // d pressed
			document.getElementById('c').style.animation = "fade-back-in-white 1s";
			break;
		case 69: // E pressed
		case 101: // e pressed
			document.getElementById('e').style.animation = "fade-back-in-white 1s";
			break;
		case 70: // F pressed
		case 102: // f pressed
			document.getElementById('f').style.animation = "fade-back-in-white 1s";
			break;
		case 71: // G pressed
		case 103: // g pressed
			document.getElementById('f').style.animation = "fade-back-in-white 1s";
			break;
		case 72: // H pressed
		case 104: // h pressed
			document.getElementById('h').style.animation = "fade-back-in-white 1s";
			break;
		case 73: // I pressed
		case 105: // i pressed
			document.getElementById('i').style.animation = "fade-back-in-white 1s";
			break;
		case 74: // J pressed
		case 106: // j pressed
			document.getElementById('j').style.animation = "fade-back-in-white 1s";
			break;
		case 75: // K pressed
		case 107: // k pressed
			document.getElementById('j').style.animation = "fade-back-in-white 1s";
			break;
		case 76: // L pressed
		case 108: // l pressed
			document.getElementById('l').style.animation = "fade-back-in-white 1s";
			break;
		case 77: // M pressed
		case 109: // m pressed
			document.getElementById('m').style.animation = "fade-back-in-white 1s";
			break;
		case 78: // N pressed
		case 110: // n pressed
			document.getElementById('m').style.animation = "fade-back-in-white 1s";
			break;
		case 79: // O pressed
		case 111: // o pressed
			document.getElementById('o').style.animation = "fade-back-in-white 1s";
			break;
		case 80: // P pressed
		case 112: // p pressed
			document.getElementById('p').style.animation = "fade-back-in-white 1s";
			break;
		case 81: // Q pressed
		case 113: // q pressed
			document.getElementById('q').style.animation = "fade-back-in-white 1s";
			break;
		case 82: // R pressed
		case 114: // r pressed
			document.getElementById('o').style.animation = "fade-back-in-white 1s";
			break;
		case 83: // S pressed
		case 115: // s pressed
			document.getElementById('s').style.animation = "fade-back-in-white 1s";
			break;
		case 84: // T pressed
		case 116: // t pressed
			document.getElementById('t').style.animation = "fade-back-in-white 1s";
			break;
		case 85: // U pressed
		case 117: // u pressed
			document.getElementById('t').style.animation = "fade-back-in-white 1s";
			break;
		case 86: // V pressed
		case 118: // v pressed
			document.getElementById('l').style.animation = "fade-back-in-white 1s";
			break;
		case 87: // W pressed
		case 119: // w pressed
			document.getElementById('e').style.animation = "fade-back-in-white 1s";
			break;
		case 88: // X pressed
		case 120: // x pressed
			document.getElementById('q').style.animation = "fade-back-in-white 1s";
			break;
		case 89: // Y pressed
		case 121: // y pressed
			document.getElementById('s').style.animation = "fade-back-in-white 1s";
			break;
		case 90: // Z pressed
		case 122: // z pressed
			document.getElementById('p').style.animation = "fade-back-in-white 1s";
			break;
	}
}

function startAnimation() {
	document.getElementById('big-left').style.animation = "move-up 1s infinite";
	document.getElementById('small-left').style.animation = "move-up 1s infinite";
	document.getElementById('big-right').style.animation = "move-up 1s infinite";
	document.getElementById('small-right').style.animation = "move-up 1s infinite";
}

function stopAnimation() {
	document.getElementById('big-left').style.animation = "scale-down 0.5s";
	document.getElementById('small-left').style.animation = "scale-down 0.5s";
	document.getElementById('big-right').style.animation = "scale-down 0.5s";
	document.getElementById('small-right').style.animation = "scale-down 0.5s";
}