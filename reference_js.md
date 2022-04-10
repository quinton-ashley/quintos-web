## alert

```js
await alert(txt, row, col, w, h, speed);
```

Creates an alert window with the specified text. If no optional parameters are provided, defaults are used which are different for each QuintOS computer.

- `row` and `col` (optional) specify the row and column values of the top left corner of the alert window
- `width` and `height` (optional)
- `speed` (optional) letters drawn per frame

## prompt

```js
await prompt(txt, row, col, w, h, speed);
```

Creates a prompt window, which displays a message to the user and allows them to respond with text or press the cancel button.

Returns the user's input. If the user entered a number `prompt` will return a number, otherwise it will return a string unless the user pressed cancel, then `null` will be returned.

## log

```js
log(...args);
```

Shortcut for the `console.log` function, which prints any amount of input arguments to the Javascript console.

## text

```js
await text(txt, row, col, w, h, speed);
```

Displays text and returns the amount of lines required to display the text after width limiting is performed.

## button

```js
let btn = button(txt, row, col, action);
```

Returns the `Button` object created.

- `action` is a function that will run if the user presses the button

## erase

```js
erase();
```

Erases any text inside program's frame.

## textRect

```js
await textRect(row, col, w, h, speed, c);
```

Draws the lines of a rectangle in text.

- `c` is optionally the character for the rectangle

## eraseRect

```js
await eraseRect(row, col, w, h, speed);
```

Erases text within the specified rectangle.

## input

```js
let inp = input(value, row, col, onSubmit, onChange);
```

Returns the `Input` object created.

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` (optional) called when the user presses the enter key
- `onChange` (optional) called when the user types any key that changes the input's value

## spriteArt

```js
let img = spriteArt(txt, scale, palette);
```

Returns the p5.js image object created.

- `txt` should be a string that only contains valid color letters and newlines
- `scale` (optional) scale of the image
- `palette` (optional) a color palette object that overrides the default QuintOS color palette.

Here's the c64's color palatte for example of proper palette formatting:

```js
{
	' ': '',
	'.': '',
	k: '#000000', // blacK
	d: '#626252', // Dark-gray
	m: '#898989', // Mid-gray
	l: '#adadad', // Light-gray
	w: '#ffffff', // White
	c: '#cb7e75', // Coral
	r: '#9f4e44', // Red
	n: '#6d5412', // browN
	o: '#a1683c', // Orange
	y: '#c9d487', // Yellow
	e: '#9ae29b', // light grEEn
	g: '#5cab5e', // Green
	t: '#6abfc6', // Teal
	b: '#50459b', // Blue
	i: '#887ecb', // Indigo
	p: '#a057a3' // Purple
}
```

## colorPal

```js
colorPal(c, palette);
```

Returns a hex color string to use with p5.js functions like background, fill, and stroke.

- `c` is the color letter
- `palette` (optional) defaults to the system's default palette

## isKeyDown

```js
isKeyDown(keyName);
```

Checks if a key is being held.

- `keyName` a string containing the simple name of the key

## createTiles

```js
let tiles = createTiles(tileSize, x, y);
```

Creates a tile world.

## spritesheet

`.spriteSheet` is a property of Sprite objects used by QuintOS to load sprite animations.

## drawText

```js
drawText(txt, x, y);
```

The p5.js `text` function, use it in the `draw` loop.

<https://p5js.org/reference/#/p5/text>
