/** 
 * --------------------------------------------------------------------------------------------
 * GET FUNCTION ARGUMENTS
 *
 * Parses arguments names of a function, for use in Dependency Injection
 *
 * Note:
 * This is intended to work for Dependency Injection.
 * It means that arguments should be a simnple comma-delimited of names.
 * This will not work properly in ES6 syntax like arrow functions, Destructured arguments, etc.
 *
 * source: https://davidwalsh.name/javascript-arguments
 * --------------------------------------------------------------------------------------------
 */

function getFunctionArguments(func) {

  // First match everything inside the function argument parens.
  var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
 
  // Split the arguments string into an array comma delimited.
  return args.split(',').map(function(arg) {
    // Ensure no inline comments are parsed and trim the whitespace.
    return arg.replace(/\/\*.*\*\//, '').trim();
  }).filter(function(arg) {
    // Ensure no undefined values are added.
    return arg;
  });
  
}
