# QuintOS

## log

```js
log(...args);
```

Shortcut for the `console.log` function, which prints any amount of input arguments to the Javascript console.

## delay

```js
await delay(millis);
```

Use the `delay` to have your program wait for a certain amount of time in milliseconds. `delay` can only be used in asynchronous functions.

```js
async function takeFive() {
	log('start!');
	await delay(5000); // waits for a delay of 5000ms aka 5 seconds
	log('5 seconds passed');
}

takeFive();
```

## exit

```js
exit();
```

Closes the QuintOS program. Note that `exit` does not end the code execution of the function it is called in, use `return` to do that.

# ui

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

## button

```js
let btn = button(txt, row, col, action);
```

Returns the `Button` object created.

- `action` is a function that will run if the user presses the button

```js
btn.erase(); // remove button
```

## upload

```js
let btn = upload(txt, row, col, type, action);
```

Returns a special button for letting the user upload files. When the user clicks the button a file selection window will appear. After the user selects a file it is uploaded and parsed into text data.

- `type` (optional) 'file' by default
- `action(file)` is a function that will run if the user presses the button. It recieves a file object as an input.
  - `file.name` the file's name
  - `file.data` the file's data

To learn more about `upload` buttons read the QuintOS `button` reference.

## input

```js
let inp = input(value, row, col, onSubmit, onChange);
```

Returns the `Input` object created.

- `value` is the initial text in the input, set to an empty string by default
- `onSubmit` (optional) called when the user presses the enter key
- `onChange` (optional) called when the user types any key that changes the input's value

# textual

## text

```js
await text(txt, row, col, w, h, speed);
```

Displays text and returns the amount of lines required to display the text after width limiting is performed.

## textRect

```js
await textRect(row, col, w, h, style, c, speed);
```

Draws the lines of a rectangle in text.

- `style` (optional) can be either 'dashed', 'outline', or 'solid'. The default is 'solid'.
- `c` (optional) the character for the rectangle, it can be any character! The default is `-`, you can also use `=` for a double line rectangle.

## textLine

```js
await textLine(row1, col1, row2, col2, style, c, speed);
```

- `style` (optional) can be either 'dashed', 'outline', or 'solid'. The default is 'solid'.
- `c` (optional) the character for the rectangle, it can be any character! The default is `-`, you can also use `=` for a double line rectangle.

## erase

```js
erase();
```

Erases any text inside program's frame.

## eraseRect

```js
await eraseRect(row, col, w, h, speed);
```

Erases text within the specified rectangle.

# play

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

'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'CapsLock', 'Clear', 'Control', 'Delete', 'Escape', 'Insert', 'PageDown', 'PageUp', 'Shift', 'Tab'

## getKeyCode

```js
getKeyCode(keyName);
```

- `keyName` a string containing the simple name of the key

'Alt', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'CapsLock', 'Clear', 'Control', 'Delete', 'Escape', 'Insert', 'PageDown', 'PageUp', 'Shift', 'Tab'

## play

```js
await play(sound);
```

Plays a p5.sound object. Returns a Promise which is fulfilled when the sound finishes playing.

## drawText

```js
drawText(txt, x, y);
```

The p5.js `text` function, use it in the `draw` loop.

<https://p5js.org/reference/#/p5/text>

# Sprite

## createSprite

```js
createSprite(x, y, w, h);
// OR
createSprite(img, x, y);
```

## sprite.ani

```js
sprite.ani(...anis);
```

## sprite.img

```js
sprite.img(img);
```

## loadAni

```js
loadAni(spriteSheetImg, size, pos, frameCount, frameDelay);
```

Easy way to load a p5.play animation.

- `spriteSheetImg` a spritesheet, an image containing multiple animations
- `size` can be either a number used for both the width and height of the animation or array of [width, height] values
- `pos` can either be a row number or an array of [row, col] values
- `frameCount` is a number representing how many frames are in the animation, starting from the frame at `pos`
- `frameDelay` how many 60fps frames should each frame of this animation stay on screen

## createTiles

```js
let tiles = createTiles(tileSize, x, y);
```

Creates a tile world, a grid of tiles.

- `tileSize` is the width and height of the tiles in pixels

## spritesheet

`.spriteSheet` is a property of Sprite objects used by QuintOS to load sprite animations.
