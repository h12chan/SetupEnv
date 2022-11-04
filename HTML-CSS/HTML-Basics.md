---
layout: default
title: HTML Basics
parent: HTML and CSS
nav_order: 1
---

## HTML Picture Element
You can use the picture element in HTML to change images without modification of CSS. This happens often when the designer gives you one image for mobile and one image for desktop.
```html
<picture>
  <source srcset="/images/image-product-desktop.jpg" media="(min-width: 600px)"
  <img src="/images/image-product-mobile.jpb">
</picture>
// https://www.youtube.com/shorts/d9i68C628Nk
```
