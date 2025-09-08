---
layout: page
title: picoRing mouse
description: Ultra-low-power ring-based wireless tinymouse
img: assets/img/project1/picoRing_background.png
importance: 1
category: work
related_publications: true
---

picoRing mouse, enabling a continuous ring-based mouse interaction with ultra-low-powered ring-to-wristband wireless connectivity. picoRing mouse employs a coil-based impedance sensing named semi-passive inductive telemetry, allowing a wristband coil to capture a unique frequency response of a nearby ring coil via a sensitive inductive coupling between the coils. 

The ring coil converts the corresponding user's mouse input into the unique frequency response via an up to 449 uW mouse-driven modulation system. Therefore, the continuous use of picoRing mouse can last approximately 600 (8hrs use/day)-1000 (4hrs use/day) hours on a single charge of a 27 mAh battery while supporting subtle thumb-to-index scrolling and pressing interactions in real-world wearable computing situations.

<!-- 
    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    --- -->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1/teaser.jpg" title="picoRing_teaser" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overview of picoRing mouse, enabling 30-500 uW-class ultra-low-power wireless ring mouse for ubiquitous finger input. The ring can potentially operate over a month on a single charge of a 27 mAh battery.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
