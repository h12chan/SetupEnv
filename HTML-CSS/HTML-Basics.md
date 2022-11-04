---
layout: default
title: HTML Basics
parent: HTML and CSS
nav_order: 1
---

## Indicate Code with HTML
When you want to indicate code in a passage, you can use the <code>\<code\></code> html element.
```html
To denote code elements in html, you can use the <code>code</code tag element.
<!-- https://developer.mozilla.org/en-US/docs/web/html/element/code -->
```

## Indicate a Keyboard Key Stroke(s) with HTML
To make it clear to the user that a set of keyboard keystroke(s) must be used in a passage, you can use the <code>\<kbd\></code> tag element. For example, it would look like: <kbd>CTRL+C</kbd>
```html
You can press <kbd>CTRL+C</kbd> to copy selected text.
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd -->
```

## HTML Picture Element
You can use the picture element in HTML to change images without modification of CSS. This happens often when the designer gives you one image for mobile and one image for desktop.
```html
<picture>
  <source srcset="/images/image-product-desktop.jpg" media="(min-width: 600px)"
  <img src="/images/image-product-mobile.jpb">
</picture>
<!-- https://www.youtube.com/shorts/d9i68C628Nk -->
```
