### 1. Adding Canvas Element
- HTML `<canvas>` element is used to add a canvas.
- It has two optional attribuers:
    - height, defualt value = 150px
    - width, default value = 300px
- To access this element from js, it's recommeded to add an `id` attribute attribute.

#### 1.1 Accessible Content:
- The `<canvas>` element must be amde accessible by providing a fallback content.
- To do this, Just insert the alternamte content inside the `<canvas>` Element.

### 2. Canvas Rendering Context
- Canvas creates a fixed size drawing surface and exposes one or more type of rendering context.
- This rendering context is 
    - Used to manipulate the content on  drawing surface.
    - Different rendering mode provides 
        - Different type of rendering based on contextType and it's internal implementaion. 
        - Exposes their own api to manipulate the content.
- Types of contextType:
    - '2d'
    - 'webgl'
    - 'webgl2'
    - 'webgpu'
    - 'bitmaprenderer'
- The rendering context from canvas is accessible via method:
    - `getContext(ctxType[, ctxAttribute])`
    -  `ctxAttribute` is optional and allows to set ctxType attribute
- Example: `const ctx = canvas.getContext('2d');`


### Examples:
- Adding Canvan Element
```HTML
    <canvas id="stockGraph" widht="120" height="120"></canvas>
```

- Canvas element with Accessible Content
```HTML
    <!-- Canvas element with a text fallback -->
    <canvas id="stockGraph" width="150" height="150">
      current stock price: $3.15 + 0.15
    </canvas>


    <!-- Canvas element with a image fallback -->
    <canvas id="clock" width="150" height="150">
      <img src="images/clock.png" width="150" height="150" alt="A clock" />
    </canvas>
```

