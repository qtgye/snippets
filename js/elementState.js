/**
 *  Element State jQuery plugin
 *  Author: Jayson Buquia <buquia.jace@gmail.com>
 *  URL: https://github.com/qtgye/snippets/blob/master/js/elementState.js
 * 
 *  Allows the use of data-state attribute instead of classes for declaring UI states
 *
 * METHODS:
 * 	- hasState	: checks whether an element is at a given state
 * 	- addState	: adds a state to an element
 * 	- removeState	: removes a state from an element
 * 	- toggleState	: toggles a state from an element
 *
 * EVENTS:
 * 	- statechange	: if a state has been added/removed from an element
 */




// hasState

$.fn.hasState = function (state) {
	var attr = this.attr('data-state');
	if ( attr ) {
		return attr.match(new RegExp('\\s?'+state+'\\s?')) ? true : false;
	}
	return false;
	
}



// addState

$.fn.addState = function (state) {
	if ( !this.hasState(state) ) {
		var currentState = this.attr('data-state');
		currentState = currentState ? currentState.trim() : '';
		this.attr('data-state',currentState+' '+state);
		this.trigger('statechange',{ method : 'addState', targetState : state });
	}
	return this;
}



// removeState

$.fn.removeState = function (state) {
	if ( this.hasState(state) ) {
		this.attr('data-state',this.attr('data-state').replace(state,''));
		this.trigger('statechange',{ method : 'removeState', targetState : state });
	}
	return this;
}



// toggleState

$.fn.toggleState = function (state) {
	if ( this.hasState(state) ) {
		this.removeState(state);
	} else {
		this.addState(state);
	}
	return this;
}
