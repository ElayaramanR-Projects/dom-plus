const domUtils = {
	// 1. Query for a single element and return it
	querySelector: (selector) => document.querySelector(selector),

	// 2. Query for multiple elements and return NodeList
	querySelectorAll: (selector) => document.querySelectorAll(selector),

	// 3. Add a class to an element
	addClass: (element, className) => {
		if (element.classList) {
			element.classList.add(className);
		} else {
			element.className += ' ' + className;
		}
		return element;
	},

	// 4. Remove a class from an element
	removeClass: (element, className) => {
		if (element.classList) {
			element.classList.remove(className);
		} else {
			element.className = element.className.replace(
				new RegExp(
					'(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
					'gi',
				),
				' ',
			);
		}
		return element;
	},

	// 5. Check if an element has a class
	hasClass: (element, className) => {
		if (element.classList) {
			return element.classList.contains(className);
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(
				element.className,
			);
		}
	},

	// 6. Set an attribute on an element
	setAttribute: (element, attribute, value) => {
		element.setAttribute(attribute, value);
		return element;
	},

	// 7. Get the value of an attribute from an element
	getAttribute: (element, attribute) => element.getAttribute(attribute),

	// 8. Add an event listener to an element
	addEventListener: (element, eventType, callback) => {
		element.addEventListener(eventType, callback);
		return element;
	},

	// 9. Remove an event listener from an element
	removeEventListener: (element, eventType, callback) => {
		element.removeEventListener(eventType, callback);
		return element;
	},

	// 10. Create a new element with the specified tag name
	createElement: (tagName) => document.createElement(tagName),

	// 11. Append a child element to a parent element
	appendChild: (parent, child) => {
		parent.appendChild(child);
		return parent;
	},

	// 12. Insert a new node before an existing one
	insertBefore: (parent, newNode, referenceNode) => {
		parent.insertBefore(newNode, referenceNode);
		return parent;
	},

	// 13. Replace a child node with a new one
	replaceChild: (parent, newChild, oldChild) => {
		parent.replaceChild(newChild, oldChild);
		return parent;
	},

	// 14. Remove a child node from its parent
	removeChild: (parent, child) => {
		parent.removeChild(child);
		return parent;
	},

	// 15. Get the parent node of an element
	parentNode: (element) => element.parentNode,

	// 16. Get the child nodes of an element
	childNodes: (element) => element.childNodes,

	// 17. Get the first child node of an element
	firstChild: (element) => element.firstChild,

	// 18. Get the last child node of an element
	lastChild: (element) => element.lastChild,

	// 19. Get the next sibling node of an element
	nextSibling: (element) => element.nextSibling,

	// 20. Get the previous sibling node of an element
	previousSibling: (element) => element.previousSibling,

	// 21. Clone an element and return the cloned node
	cloneNode: (element) => element.cloneNode(true),

	// 22. Get the text content of an element
	textContent: (element) => element.textContent,

	// 23. Set the text content of an element
	setTextContent: (element, text) => {
		element.textContent = text;
		return element;
	},

	// 24. Get the inner HTML of an element
	innerHTML: (element) => element.innerHTML,

	// 25. Set the inner HTML of an element
	setInnerHTML: (element, html) => {
		element.innerHTML = html;
		return element;
	},

	// 26. Get the value of a form element
	getValue: (element) => element.value,

	// 27. Set the value of a form element
	setValue: (element, value) => {
		element.value = value;
		return element;
	},

	// 28. Focus on an element
	focus: (element) => {
		element.focus();
		return element;
	},

	// 29. Blur an element
	blur: (element) => {
		element.blur();
		return element;
	},

	// 30. Scroll an element into view
	scrollIntoView: (element) => {
		element.scrollIntoView();
		return element;
	},

	// 31. Get the width of an element
	getWidth: (element) => element.offsetWidth,

	// 32. Get the height of an element
	getHeight: (element) => element.offsetHeight,

	// 33. Get the top position of an element relative to the offset parent
	getTop: (element) => element.offsetTop,

	// 34. Get the left position of an element relative to the offset parent
	getLeft: (element) => element.offsetLeft,

	// 35. Get the bounding client rect of an element
	getBoundingClientRect: (element) => element.getBoundingClientRect(),

	// 36. Set the CSS style of an element
	setStyle: (element, property, value) => {
		element.style[property] = value;
		return element;
	},

	// 37. Get the computed style of an element
	getComputedStyle: (element) => window.getComputedStyle(element),

	// 38. Hide an element by setting its display property to "none"
	hide: (element) => {
		element.style.display = 'none';
		return element;
	},

	// 39. Show a hidden element by setting its display property to the original value
	show: (element) => {
		element.style.display = '';
		return element;
	},

	// 40. Toggle the visibility of an element
	toggleVisibility: (element) => {
		if (window.getComputedStyle(element).display === 'none') {
			element.style.display = '';
		} else {
			element.style.display = 'none';
		}
		return element;
	},

	// 41. Set the width of an element
	setWidth: (element, width) => {
		element.style.width = width + 'px';
		return element;
	},

	// 42. Set the height of an element
	setHeight: (element, height) => {
		element.style.height = height + 'px';
		return element;
	},

	// 43. Set the background color of an element
	setBackgroundColor: (element, color) => {
		element.style.backgroundColor = color;
		return element;
	},

	// 44. Set the text color of an element
	setTextColor: (element, color) => {
		element.style.color = color;
		return element;
	},

	// 45. Set the font size of an element
	setFontSize: (element, size) => {
		element.style.fontSize = size + 'px';
		return element;
	},

	// 46. Set the font family of an element
	setFontFamily: (element, fontFamily) => {
		element.style.fontFamily = fontFamily;
		return element;
	},

	// 47. Set the font weight of an element
	setFontWeight: (element, fontWeight) => {
		element.style.fontWeight = fontWeight;
		return element;
	},

	// 48. Set the text alignment of an element
	setTextAlignment: (element, alignment) => {
		element.style.textAlign = alignment;
		return element;
	},

	// 49. Set the margin of an element
	setMargin: (element, margin) => {
		element.style.margin = margin + 'px';
		return element;
	},

	// 50. Set the padding of an element
	setPadding: (element, padding) => {
		element.style.padding = padding + 'px';
		return element;
	},

	// 51. Set the border width of an element
	setBorderWidth: (element, borderWidth) => {
		element.style.borderWidth = borderWidth + 'px';
		return element;
	},

	// 52. Set the border color of an element
	setBorderColor: (element, borderColor) => {
		element.style.borderColor = borderColor;
		return element;
	},

	// 53. Set the border radius of an element
	setBorderRadius: (element, borderRadius) => {
		element.style.borderRadius = borderRadius + 'px';
		return element;
	},

	// 54. Set the box shadow of an element
	setBoxShadow: (element, boxShadow) => {
		element.style.boxShadow = boxShadow;
		return element;
	},

	// 55. Set the opacity of an element
	setOpacity: (element, opacity) => {
		element.style.opacity = opacity;
		return element;
	},

	// 56. Set the z-index of an element
	setZIndex: (element, zIndex) => {
		element.style.zIndex = zIndex;
		return element;
	},

	// 57. Append an HTML string to the end of an element's content
	appendHTML: (element, html) => {
		element.insertAdjacentHTML('beforeend', html);
		return element;
	},

	// 58. Prepend an HTML string to the beginning of an element's content
	prependHTML: (element, html) => {
		element.insertAdjacentHTML('afterbegin', html);
		return element;
	},

	// 59. Insert an HTML string before an element
	insertBeforeHTML: (element, html) => {
		element.insertAdjacentHTML('beforebegin', html);
		return element;
	},

	// 60. Insert an HTML string after an element
	insertAfterHTML: (element, html) => {
		element.insertAdjacentHTML('afterend', html);
		return element;
	},

	// 61. Create a new text node and append it to an element
	appendText: (element, text) => {
		element.appendChild(document.createTextNode(text));
		return element;
	},

	// 62. Create a new element with attributes and append it to a parent element
	createElementWithAttributes: (parent, tagName, attributes) => {
		const element = document.createElement(tagName);
		for (const key in attributes) {
			if (attributes.hasOwnProperty(key)) {
				element.setAttribute(key, attributes[key]);
			}
		}
		parent.appendChild(element);
		return element;
	},

	// 63. Create a new element with text content and append it to a parent element
	createElementWithText: (parent, tagName, text) => {
		const element = document.createElement(tagName);
		element.textContent = text;
		parent.appendChild(element);
		return element;
	},

	// 64. Create a new element with attributes and text content, and append it to a parent element
	createElementWithAttributesAndText: (parent, tagName, attributes, text) => {
		const element = document.createElement(tagName);
		for (const key in attributes) {
			if (attributes.hasOwnProperty(key)) {
				element.setAttribute(key, attributes[key]);
			}
		}
		element.textContent = text;
		parent.appendChild(element);
		return element;
	},

	// 65. Remove an attribute from an element
	removeAttribute: (element, attribute) => {
		element.removeAttribute(attribute);
		return element;
	},

	// 66. Empty the content of an element
	empty: (element) => {
		element.innerHTML = '';
		return element;
	},

	// 67. Check if an element is visible
	isVisible: (element) => {
		return (
			element.offsetWidth > 0 ||
			element.offsetHeight > 0 ||
			element.getClientRects().length > 0
		);
	},

	// 68. Get the scroll top position of an element
	getScrollTop: (element) => element.scrollTop,

	// 69. Set the scroll top position of an element
	setScrollTop: (element, scrollTop) => {
		element.scrollTop = scrollTop;
		return element;
	},

	// 70. Get the scroll left position of an element
	getScrollLeft: (element) => element.scrollLeft,

	// 71. Set the scroll left position of an element
	setScrollLeft: (element, scrollLeft) => {
		element.scrollLeft = scrollLeft;
		return element;
	},

	// 72. Scroll an element vertically
	scrollToTop: (element) => {
		element.scrollTop = 0;
		return element;
	},

	// 73. Scroll an element to the bottom
	scrollToBottom: (element) => {
		element.scrollTop = element.scrollHeight;
		return element;
	},

	// 74. Scroll an element to the left
	scrollToLeft: (element) => {
		element.scrollLeft = 0;
		return element;
	},

	// 75. Scroll an element to the right
	scrollToRight: (element) => {
		element.scrollLeft = element.scrollWidth;
		return element;
	},

	// 76. Add a custom data attribute to an element
	setDataAttribute: (element, key, value) => {
		element.dataset[key] = value;
		return element;
	},

	// 77. Get the value of a custom data attribute from an element
	getDataAttribute: (element, key) => element.dataset[key],

	// 78. Remove a custom data attribute from an element
	removeDataAttribute: (element, key) => {
		delete element.dataset[key];
		return element;
	},

	// 79. Trigger a click event on an element
	click: (element) => {
		element.click();
		return element;
	},

	// 80. Prevent the default action of an event
	preventDefault: (event) => {
		event.preventDefault();
		return event;
	},

	// 81. Stop the propagation of an event
	stopPropagation: (event) => {
		event.stopPropagation();
		return event;
	},
};

export default domUtils;
