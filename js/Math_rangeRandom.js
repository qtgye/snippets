Math.rangeRandom = function (min,max) {
	var min = min || 0,
		max = max || 0;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
