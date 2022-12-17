# Circular countdown template

## About

I was coding a pomodoro app and wanted to make a circle countdown but couldn't find a simple way to do it, there were some tutorials but not exactly what I wanted. I made this quick template hoping to help people in a similar situation.

## Deploy

[Go to the deploy](https://circularcountdownlivetest.vercel.app/).

## Installation

A simple and fast way to get started is to include this script on the bottom of your **body** tag:

```javascript
<script src="https://cdn.jsdelivr.net/gh/LucaCuello/Circular-Countdown-Template@95af10a/js/index.js"></script>
```

And this CSS link between your **head** tag:

```javascript
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/LucaCuello/Circular-Countdown-Template@95af10a/css/countdown.css">
```

## Usage

Once installed, you'll need to paste this template inside your HTML:

```javascript
<div
  class="countdown-container"
  data-duration="60"
  data-transition="linear"
  data-color="#c39fe0"
  data-size="500"
  data-position="right"
></div>
```

You can **edit** the datasets in order to make a custom countdown.

- **Data-duration:** sets the duration of the countdown.

- **Data-transition:** sets the transition of the countdown animation. Examples: "linear", "ease", "ease-in", "ease-out, "ease-in-out".

- **Data-color:** sets the color of the circle. Accepts any valid color code. Examples: "#c39fe0", "rgb(195, 159, 224)", "hsl(273deg 51% 75%)".

- **Data-size:** sets the size of the circle. "500" would make a 500x500px circular countdown.

- **Data-Position:** sets the position of the countdown. Examples: "rigth", "left", "up", "down".

## Examples

<img src="https://iili.io/Hx9JdcG.png" alt="large">
<img src="https://iili.io/pQ0Kut.gif" alt="large">

<img src="https://iili.io/Hx9JJFs.png" alt="medium">
<img src="https://iili.io/pQ1PkB.gif" alt="medium">

<img src="https://iili.io/Hx9J9Pn.png" alt="small">
<img src="https://iili.io/pQEGTP.gif" alt="small">
