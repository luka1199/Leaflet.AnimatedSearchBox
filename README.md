# Leaflet.AnimatedSearchBox

![Leaflet 1.0 compatible!](https://img.shields.io/badge/Leaflet%201.0-%E2%9C%93-1EB300.svg?style=flat)

A simple Leaflet plugin that provides a collapsible search box.

![demo](assets/demo_800px.gif)

## Usage

- Include the [`Leaflet.AnimatedSearchBox.css`](https://github.com/luka1199/Leaflet.AnimatedSearchBox/releases/latest/download/Leaflet.AnimatedSearchBox.css
) file in the head section of your document:

```html
<link href="src/AnimatedSearchBox.css" rel="stylesheet">
```

- Include the [`Leaflet.AnimatedSearchBox.js`](https://github.com/luka1199/Leaflet.AnimatedSearchBox/releases/latest/download/Leaflet.AnimatedSearchBox.js
) file in your document:

```html
<script src="src/AnimatedSearchBox.css"></script>
```

- Add the [search icon](https://github.com/luka1199/Leaflet.AnimatedSearchBox/releases/latest/download/search_icon.png) image file to `img/search_icon.png`

- Create a new `L.Control.Searchbox` and add it to the map:

```javascript
var searchbox = L.control.searchbox({
    position: 'topright',
    expand: 'left'
}).addTo(map);
```

### [Examples](https://luka1199.github.io/Leaflet.AnimatedSearchBox/examples/)

- [Basic Example](https://luka1199.github.io/Leaflet.AnimatedSearchBox/examples/example1.html)
- [Fuse.js Example](https://luka1199.github.io/Leaflet.AnimatedSearchBox/examples/example_fuse.html)

### Options

- `position`: Sets the position of the searchbox (Default: `'topright'`).  
- `expand`: Sets the direction in which the search box expands. (Default: `'left'`).  
- `collapsed`: Sets the initial state of the searchbox (Default: `false`).  
- `id`: Sets the id of the container of the searchbox.  
- `class`: Adds custom classes to the container of the searchbox.  
- `width`: Sets the width of the input field of the searchbox. (Example: `'450px'`)
- `iconPath`: Sets the path for the search icon (Default: `img/search_icon.png`).
- `dropDownFeatures`: Activates the given features (Default: `[]`).  
Possible features:
  - `'setValueOnClick'`: Set the value of the searchbox to the value of the clicked drop down list item.
  - `'arrowKeyNavigation'`: Coming soon
  - `'setValueOnHover'`: Coming soon
  - `'setValueOnEnter'`: Coming soon

### Methods

```javascript
// Expand the searchbox
searchbox.show()

// Collapse the searchbox
searchbox.hide()

// Toogle the searchbox
searchbox.toggle()

// Returns true if searchbox is collapsed
searchbox.isCollapsed()

// Returns current value of the text field of the searchbox
searchbox.getValue()

// Sets the value of the text field of the search box
searchbox.setValue(value)

// Adds an item to the drop down list
searchbox.addItem(item)

// Adds items to the drop down list
searchbox.addItems(items)

// Sets items of the drop down list
searchbox.setItems(items)

// Clears the drop down list
searchbox.clearItems()

// Clears the text field of the search box
searchbox.clearInput()

// Clears the text field and the drop down list of the search box
searchbox.clear()

// Adds a listener function (handler) to a particular DOM event (event)
// of the input field of the searchbox
searchbox.onInput(event, handler);

// Removes a previously added listener function (handler) of a particular DOM event (event)
// from the input field of the searchbox
searchbox.offInput(event, handler);

// Adds a listener function (handler) to a particular DOM event (event)
// of the button of the searchbox
searchbox.onButton(event, handler);

// Removes a previously added listener function (handler) of a particular DOM event (event)
// from the button of the searchbox
searchbox.offButton(event, handler);

// Adds a listener function (handler) to a particular DOM event (event)
// of the drop down list
searchbox.onDropDown(event, handler);

// Removes a previously added listener function (handler) of a particular DOM event (event)
// from the drop down list
searchbox.offDropDown(event, handler);

```

## Planned features

- More drop down features
- Support for npm etc.
