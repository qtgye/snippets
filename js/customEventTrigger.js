// Supports IE >= 9
//
// Corresponding jQuery approach: $(el).trigger('custom-event', {key1: 'data'});

if (window.CustomEvent) {
  const event = new CustomEvent('custom-event', {detail: {key1: 'data'}});
} else {
  const event = document.createEvent('CustomEvent');
  event.initCustomEvent('custom-event', true, true, {key1: 'data'});
}

el.dispatchEvent(event);
