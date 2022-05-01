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

- `row`, `col` (optional) the row and column values of the top left corner of the alert window
- `w`, `h` (optional) width and height
- `speed` (optional) letters drawn per frame

## prompt

```js
await prompt(txt, row, col, w, h, speed);
```

Creates a prompt window, which displays a message to the user and allows them to respond with text or press the cancel button.

Returns the user's input. If the user entered a number `prompt` will return a number, otherwise it will return a string unless the user pressed cancel, then `null` will be returned.

- `row`, `col` (optional) the row and column values of the top left corner of the alert window
- `w`, `h` (optional) width and height
- `speed` (optional) letters drawn per frame

## button

```js
let btn = button(txt, row, col, action);
```

Returns the `Button` object created.

- `action` is a function that will run if the user presses the button

## upload

```js
let btn = upload(txt, row, col, type, action);
```

Returns a special button for letting the user upload files. When the user clicks the button a file selection window will appear. After the user selects a file it is uploaded and parsed into text data.

- `type` (optional) 'file' by default
- `action(file)` is a function that will run if the user presses the button, it receives a file object as an input
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

- `style` (optional) can be either 'dashed', 'outline', or 'solid', the default is 'solid'
- `c` (optional) the character for the rectangle, the default is "-", use "=" for a double line rectangle

## textLine

```js
await textLine(row1, col1, row2, col2, style, c, speed);
```

- `style` (optional) can be either 'dashed', 'outline', or 'solid', the default is 'solid'
- `c` (optional) the character for the line, the default is "-"

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

# p5.js

## spriteArt

```js
let img = spriteArt(txt, scale, palette);
```

Returns the p5.js image object created.

- `txt` should be a string that only contains valid color letters and newlines
- `scale` (optional) scale of the image
- `palette` (optional) a color palette object that overrides the default QuintOS color palette

Here's the c64's color palette for example of proper palette formatting:

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

## createAni

```js
let animation = createAni(spriteSheetImg, size, pos, frameCount, frameDelay);
```

Returns a new p5.play animation.

- `spriteSheetImg` a sprite sheet, an image containing multiple animations
- `size` can be either a number used for both the width and height of the animation or array of [width, height] values
- `pos` can either be a row number or an array of [row, col] values
- `frameCount` is a number representing how many frames are in the animation, starting from the frame at `pos`
- `frameDelay` how many 60fps frames should each frame of this animation stay on screen

# Sprite

## createSprite

```js
let sprite = createSprite(img, x, y);
// or
let sprite = createSprite(x, y, w, h);
```

Returns a new p5.play Sprite object.

- `img` p5.js image
- `x` and `y` (optional) coordinates of the sprite's initial position
- `w` and `h` (optional) the width and height of the sprite (otherwise defined by the image)

## sprite.ani

```js
sprite.ani(...anis);
```

Changes the sprite's animation. Use `addAni` to define the animation(s) first.

- `anis` the names of one or many animations to be played in sequence

` `  
` `

### Examples

```js
player.ani('walk-down');
```

Changes the animation of the player sprite to "walk-down", which loops until the animation of the player is changed.

```js
player.ani('victory-pose', 'bow', 'dance');
```

Changes the animation of the player sprite to "victory-pose". When that animation is completed the "bow" animation will start. Finally the "dance" animation loops until the animation of the player changes.

## sprite.img

```js
sprite.img(img);
```

Changes the sprite's image. Use `addImg` to define the image first.

- `img` the name of the single frame animation

` `  
` `

### Example

```js
food3.img('apple');
```

Changes the image of the `food3` sprite to "apple"

## sprite.move

```js
await sprite.move(direction, speed);
```

```js
await sprite.move(row, col, speed);
```

Move sprite with animation at a certain speed. Optionally use `await` to wait for the sprite to finish moving.

- `direction` single tile movement: 'up', 'down', 'left', or 'right'
- `row`, `col` the row and column of the tile to move the sprite to
- `speed` is the pixels per frame at which the sprite will move, the default is 1

` `  
` `

#### Examples

```js
await player.move('up');
```

Moves the player up by one tile above its current tile position with the default speed of 1 pixel per frame.

```js
player.row = 4;
player.col = 3;
```

Teleports the player sprite to row 4, col 3.

## tgs.spriteSheet

```js
tgs.spriteSheet = image;
```

Sprite sheets are images which have a lot of smaller images in them. These could be images of character animations, items, or background environment tiles.

- `tgs` a Tiles, Group, or Sprite object
- `image` a p5.js image

` `  
` `

### Example

```js
world.spriteSheet = loadImage(QuintOS.dir + '/world_16.png');
```

Sets the SpriteSheet image object of the `world` Tiles object to the result of the `loadImage` p5.js function which loads an p5.js image from a path.

## tgs.addImg

```js
tgs.addImg(imgName, atlas);
```

Used to define a name for an image frame in a sprite sheet.

- `tgs` a Tiles, Group, or Sprite object
- `imgName` the name of the image
- `atlas` defines the location of the image
  - `line` a row in the sprite sheet (at column 0)
  - `pos` [`row`, `col`] a row and column position in the sprite sheet
  - `frames` the number of frames in the animation, default is 1
  - `size` [`w`, `h`] (optional) default is the width and height of a tile

` `  
` `

### Example

```js
items.addImg('powerup0', { pos: [5, 3] });
```

## tgs.addAni

```js
tiles.addAni(imgName, atlas);
```

Used to define a name for a multi-frame animation in a sprite sheet.

- `tgs` a Tiles, Group, or Sprite object
- `imgName` the name of the image
- `atlas` defines the location of the image
  - `line` a row in the sprite sheet (at column 0)
  - `pos` [`row`, `col`] a row and column position in the sprite sheet
  - `frames` the number of frames in the animation, default is 1
  - `delay` amount of draw cycles that a frame of the animation is held before it is changed to the next frame in the animation, default is 4 (if the game frame rate is 60fps this means the animation will have a frame rate of 15fps)
  - `size` [`w`, `h`] (optional) default is the width and height of a tile

` `  
` `

### Example

```js
player.addAni('walk-down', { line: 2, frames: 4 });
```

Example of defining the "walk-down" animation as a 4 frame animation from row 2, column 0 in the player's sprite sheet using the default size of the sprite.

# Tiles & Group

## createTiles

```js
let tiles = createTiles(tileSize, x, y);
```

Creates a tile world, a grid of tiles of a certain size.

- `tileSize` is the width and height of the tiles in pixels
- `x` and `y` the tile at row 0, column 0 is placed at the given x, y coordinates

## tiles.createGroup

```js
let group = tiles.createGroup();
```

The `createGroup` function of the tiles grid object can be used to create sub-groups of Sprites.

` `  
` `

### Example

```js
let walls = world.createGroup();
```

Creates a `walls` group in the `world` tiles object.

## tg.createSprite

```js
let sprite = tiles.createSprite(row, col, layer);
```

```js
let sprite = tiles.createSprite(img || ani, row, col, layer);
```

The `createSprite` function of the Tile object works a bit differently than the normal `createSprite` function. It uses row, column position on the tile grid to position the sprite instead of x, y coordinates.

- `tg` Tiles or Group object
- `imgName` name of the image or animation
- `row` the row in the tiles grid
- `col` the column in the tiles grid
- `layer` represents the depth of the Sprite in relation to the rest of the tiles in the grid. Sprites with a higher layer value will be placed above sprites on lower layers.

` `  
` `

### Example

```js
let fireball = items.createSprite('powerup0', 5, 2, 1);
```

Creates a `fireball` sprite from the `items` group with an image found in the `items` group sprite sheet.

## tg.removeSprites

```js
tg.removeSprites();
```

Removes all the sprites from the Tiles or Group object

- `tg` Tiles or Group object
