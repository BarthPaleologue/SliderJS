# SliderJS

[![pages-build-deployment](https://github.com/BarthPaleologue/SliderJS/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/BarthPaleologue/SliderJS/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/BarthPaleologue/SliderJS/actions/workflows/codeql.yml/badge.svg)](https://github.com/BarthPaleologue/SliderJS/actions/workflows/codeql.yml)
[![License](https://img.shields.io/github/license/BarthPaleologue/SliderJS)](./LICENSE)
 
So you like sliders ? Congratulations you are at the right place ! Create simple and responsive range sliders with ease thanks to SliderJS :

![Preview](https://github.com/BarthPaleologue/SliderJS/blob/main/sliderJS.jpg)

## Getting Started

### Without NodeJS

In your HTML document add these two lines of code to your header :
```html
<link rel="stylesheet" href="./path/to/style2.min.css">
<script defer src="./path/to/slider.min.js"></script>
```
The first line is the stylesheet needed to render sliders properly, you can choose from various themes in the ./dist/css/ folder.
The second line is the actual script needed to enable the slider object in your code. You can find it at ./dist/slider.min.js

### Using NodeJS

Just add these lines in your javascript / typescript file : 
```ts
import { Slider } from "handle-sliderjs";
import * as sliderStyle from "handle-sliderjs/dist/css/style2.css";
sliderStyle.default;
```

Note that you can choose from 6 different styles for your sliders, just change the number in the import of the stylesheet.

### Creating a slider

Now in your javascript file, you can create a new Slider using this signature :
```ts
let slider = new Slider(sliderId: string, parentElement: HTMLElement, minValue: number, maxValue: number, initialValue: number, onSlideCallback: (value: number) => void);
```
Note that the callback function is optional and can also be defined later using :
```ts
slider.onSlide = callbackFunction;
```

## Methods

In many cases the use of the callback function is optional, it is set to true by default.

Increment the value of your slider by one using :
```ts
slider.increment(useCallback = true): void;
```

Decrement the value of your slider by one using :
```ts
slider.decrement(useCallback = true): void;
```

Return the value of your slider using :
```ts
slider.getValue(): number;
```

Set the value of your slider using :
```ts
slider.setValue(newValue: number, useCallback = true): void;
```

Update manually the state of your slider using :
```ts
slider.update(useCallback = true): void;
```

Reset manually your slider to its initial state using :
```ts
slider.reset(useCallback = true): void;
```

Remove your slider element using :
```ts
slider.remove(): void;
```
