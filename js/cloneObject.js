var cloneObject = function(o) {
  var newObject = {};
  for ( var key in obj ) {
	  newObj[key] = Object.prototype.toString.call(obj[key]).match(/Object/) ?
                  cloneObject(obj[key]) :
                  obj[key];
  }
  return newObject;
}
