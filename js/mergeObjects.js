/**
Deep-merges objects

Requires
  - cloneObject.js 
  - typeChecker.js
*/

// ES6
let mergeObjects = function(...objects) {
	let newObj = objects.reduce( (reduced, object) => {  
     if ( is.object(object) ) {
     		for ( let key in object ) {
        	reduced[key] = 	is.object(object[key]) ?
          								cloneObject(object[key]) :
                          object[key];
        }
        return reduced;
     }
     return reduced;     
  }, {});
  return newObj;
}

// ES5
var mergeObjects = function() {
	var newObj = [].reduce.call( arguments, function (reduced, object) {  
     if ( is.object(object) ) {
     		for ( var key in object ) {
        	reduced[key] = 	is.object(object[key]) ?
          								cloneObject(object[key]) :
                          object[key];
        }
        return reduced;
     }
     return reduced;     
  }, {});
  return newObj;
}
