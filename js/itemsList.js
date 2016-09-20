/** 
 * --------------------------------------------------------------------------------------------
 * ITEMS LIST 
 *
 * Iterable and Mutable Items Storage
 *
 * CURRENTLY WORK IN PROGRESS, THERE WAS AN ERROR IN UNIT TESTING (Used Jasmine)
 * --------------------------------------------------------------------------------------------
 */


// The ItemsList constructor
// @param array initialItemsArray - The initial items to put in the list
var ItemsList = function (initialItemsArray) {
	

	// PRIVATE LIST VARIABLES

	var _list = this,
		items = [], // List of items
		itemsMap = {}, // id - index map of items list
		currentIndex = 0; // Current item


	// The Item Constructor

	var Item = function (value) {
		
		var _item = this,
			value = value,
			id = Math.rangeRandom(111111,999999) + '_' + Date.now();


		// PUBLIC ITEM METHODS

		Object.defineProperties( _item, {

			// Replace method
			'replaceWith': {
				value : function (replacement) {
					value = replacement;
				}
			},

			// --- GETTERS

			// Returns the item value
			'value': {
				get : function () {
					return value;
				}
			},

			// Returns the id

			'__item_id__': {
				get : function () {
					return id;
				}
			}

		});

		

	}





	// PUBLIC LIST METHODS


	Object.defineProperties( _list, {


		// -- Adds an item to the list
		// @param {mixed} item The item to be appended
		// @return {List} The list itself, for chaining
		'append': {
			value : function (item) {
				if ( item !== undefined && !item !== null ) {

					var newItem = new Item(item);

					// ADDITIONAL METHODS

					// -- Removes this item from the list
					Object.defineProperty(newItem, 'remove', {
						value : function () {
							items.splice(itemsMap[newItem.__item_id__],1);
							_list.remap();
						}
					});

					// Add to map
					itemsMap[newItem.__item_id__] = items.length;
					items.push(newItem);
				}

				return _list;
			}
		},

		// -- Updates the items map and the current Item
		// @return {List} The list itself, for chaining
		'remap': {
			value : function () {
				itemsMap = {};
				items.forEach(function (_item,index) {
					itemsMap[_item.__item_id__] = index;
				});
				if ( !items[currentIndex] ) {
					currentIndex -= currentIndex > 0 ? 1 : 0;
				}
				return _list;
			}
		},

		// -- Sets the current index / item to the given marker;
		// @param { string | integer } 
		'moveTo': {
			value : function ( marker ) {			
				switch ( marker ) {
					case 'first': marker = 0; break;
					case 'last' : marker = _list.count - 1; break;
					case 'next' : marker = _list.hasNext ? ++currentIndex : 0; break;
					case 'previous' : marker = _list.hasPrevious ? --currentIndex : _list.count - 1; break;
				}
				if ( !isNaN(marker) ) {
					currentIndex = marker;
				}
				return _list;			
			}
		},

		// -- returns the next item (if any) and sets the currentIndex
		'next': {
			value : function () {
				if ( items[currentIndex+1] ) {
					return items[++currentIndex];
				}
				return null;
			}
		},

		// -- returns the previous item (if any) and sets the currentIndex
		'previous': {
			value : function () {
				if ( currentIndex > 0 ) {
					return items[--currentIndex];
				}
				return null;
			}
		},


		// -- returns all the items
		'all': {
			value : function () {
				return items;
			}
		},


		// -- Delete all the items and reset the list
		'destroy': {
			value : function () {
				items = [];
				itemsMap = {};
				currentIndex = 0;
			}
		}


	});




	// GETTERS


	Object.defineProperties(_list, {
		
		// -- returns the items count
		'count': {
			get : function () {
				return items.length;
			}
		},

		// -- returns the items list as an array of items values
		'entries': {
			get : function () {
				return items.map(function (_item) {
					return _item.value;
				});
			}
		},

		// -- returns the current item
		'current': {
			get : function () {
				return items[currentIndex];
			}
		},

		// -- returns the first item in the list
		'first': {
			get : function () {
				return items[0];
			}
		},

		// -- returns the last item in the list
		'last': {
			get : function () {
				return items.length > 0 ? items[ items.length-1] : null;
			}
		},

		// -- checks if there is next item
		'hasNext': {
			get : function () {
				return items[currentIndex+1] ? true : false;
			}
		},

		// -- checks if there is previous item
		'hasPrevious': {
			get : function () {
				return currentIndex > 0;
			}
		}

	});



	// INIT

	if ( initialItemsArray instanceof Array ) {
		initialItemsArray.forEach(_list.append);
	}
	

}
