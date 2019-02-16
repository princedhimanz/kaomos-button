<h1 align="center">
    <img src="./documentation/img/loader.gif" width="600px">
    <br>
    Kaomos Button
</h1>

<blockquote align="center">
    The <strong>Kaomos button </strong> is a fully customizable webcomponent with an integrated <br>
    loading indicator making your site much more emotianal.
</blockquote>

<div align="center">
    <a href="https://zsacrety.github.io/kaomos-button">Check out the demo |</a>
    <a href="#Installation">Installation |</a>
    <a href="#usage">Usage |</a>
    <a href="#browser-support">Browser Support</a>
</div>

<hr style="height:1px;border:none;margin:15px;color:#fff;background-color:#fff;">

## Installation

#### Via npm

```
npm i kaomos-button
```

Or via manual [download]()

### Include

#### As ES6 module

```javascript
import 'dist/buttons.min.js'
```

#### As file include

```html
<script src="dist/buttons.min.js"></script>
```

## Usage

Create an instance:

```html
<kaomos-button 
    label='Download' loader-speed='2' loader-size='60'
    loader-color='#fff' loader-width='4'>
</kaomos-button>
```

You could create an instance programmatically as well:

```javascript
const btn = document.createElement('kaomos-button')
btn.setAttribute('label', 'Download')
document.body.appendChild(btn)
```

There are following attributes to customize the button:

| Attribute | Type | Default | Description |
| ----------- | ----------- | ----------- | ----------- |
| Label | String | 'Your label' | Sets the buttons label (required) |
| loader-color | String | '#ffffff' | Loader color (any css valid color definition) |
| loader-size | Number | 60 | Loader size relative to the buttons height (in %) |
| loader-speed | Number | 2.5 | Loading animation speed (in s per turn) |
| loader-width | Number | 4 | Loader width (in px) |


### CSS

Customize the button with CSS however you want:

```css
kaomos-button{
    width: 180px; /* Required */
    height: 40px; /* Required */
    background-color: rgb(80, 92, 255);
    color: rgb(209, 209, 209);
    font-size: 12px;
    letter-spacing: 5px;
    font-size: 7px;
    text-transform: uppercase;
    border-radius: 50px;
}
```

### JavaScript

Start by getting the buttons instance:

```javascript
const btn = document.getElementsByTagName('kaomos-button')[0]
```

Control the loading animation:

```javascript

// Start the loading animation
btn.start()

// Stop the loading animation
btn.stop()

// Toggle the loading animation
btn.toggle()

```

Check if the button is running:

```javascript
btn.isRunning() // returns a boolean value
```

Update internal variables after manipulating instance trough CSS animations for example:

```javascript
btn.update()
```

## Browser Support

Note: as a webcomponent this project uses technologies that are not widely supported. In order to provide wider browser support use [this](https://github.com/WebComponents/webcomponentsjs) amazing polyfill.

This project has been tested successfully in the newest versions of Chrome and Firefox.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details