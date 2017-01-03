# How to make a map

There are many different tools that will enable to render a map on a web page.

Our main focus is to try and review existing mapping tools/services.

Later we will try to extend those tiles to be rendered onto a 3D shape.
Afterwords, we will try to place markers on top of the shape/texture and enable interactive features.

## Contents

1. tools
2. concerns
3. primer
4. considerations with WebGL
5. decision process
6. implementing a proof-of-concept(poc)
7. thoughts/takeaways
8. conclusion

## 1. tools/candidates

1. WebGLEarth
2. Cesium
3. Three.js
4. D3 (globe orthographic)
5. Mapbox
6. Deck.gl
7. Planetary.js

## 2. concerns

We want to develop a POC in the fastest way possible without going too deep into technical investment with a particular tool.

### unavoidable/perks

If you have some basic concepts from WebGL then you might get some added benefit.

## 3. primer

### primer: webgl vs 2dcanvas vs svg rendering
TODO:

## 4. considerations with webgl
TODO:

## 5. decision process

For datasets of varying size we should consider the following:

1. Whether the data visualization will convey meaning (too narrow and lost meaning, too wide and inference is difficult to determine).
2. Computational/Graphical limitations of renderer.

#### 1. convey meaning for data visualization

One of the biggest considerations is how we wish to view and render the amount of information to convey meaning. Rendering a graphical ui with a very narrowed scope or limited amount of data can create a sense of misinformation for the viewer. (i.e. provide no information)
Conversely, rendering something which provides a vast amount of information may not be able to provide meaning to the targetted viewer. (i.e. information overload). In this scenario, the effort of rendering this information may be an incorrect choice, and further effort to convey meaning may require more effort. (extra charts or using an alternative method of rendering the data).

#### 2. graphical limitations of renderer

The second consideration with rendering is that, if like above, you wish to render a large amount of information, you may be limited to the performance of the rendering method. An interactive visual interface may also require further considerations to maintain visual performance. (i.e. fps).



First of all, if you anticipate you will be dealing with a large dataset*, then you may need to offset some of the rendering duties to your GPU.
This is where WebGL comes into play.

* How to determine if you have a large dataset
(http://stackoverflow.com/questions/18244995/d3-how-to-show-large-dataset)
(http://blog.vida.io/2014/07/06/bigquery-big-data-visualization-with-d3-dot-js/)

## 6. implementing a proof-of-concept(poc)

## 7. thoughts/takeaways

## 8. conclusion
