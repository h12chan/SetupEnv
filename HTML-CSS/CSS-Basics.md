---
layout: default
title: CSS Basics
parent: HTML and CSS
nav_order: 4
---

## Limit Amount of Text
If there are a lot of text but you only want a few lines from the beginning, there is a way to limit the lines of text.

```css
.card_preview-text {
    display: -webkit-box;
    // line-clamp: 3; // future spec. Nov 2022
    -webkit-line-clamp: 3; // use with web-kit prefix
    -webkit-box-orient: vertical;
    overflow: hidden;
}
// https://www.youtube.com/watch?v=b6iVByCOx8A
```