var cloneObject = function(obj) {
  var newObject = {};
  for ( var key in obj ) {
	  newObj[key] = Object.prototype.toString.call(obj[key]).match(/Object/) ?
                  cloneObject(obj[key]) :
                  obj[key];
  }
  return newObject;
}
