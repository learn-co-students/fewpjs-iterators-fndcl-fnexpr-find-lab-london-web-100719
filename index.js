const superbowlWin = (arr) => {

	let win = {};

	win = arr.find(element => {

		return element.result == "W";

	});

	return win ? win.year : undefined;

};