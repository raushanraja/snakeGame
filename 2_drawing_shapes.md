### 1. Canvas Grid / coordinate space:
- 1 unit in the grid corresponds to 1px on the canvas.
- The origin of grid is position at `top-left` corner at (0,0).
- All elements are places relative to this origin.

### 2. Drawing Shapes:
    1. Rectangle
    2. Path (list of points connected by lines)

#### 2.1 Rectangle:
- There are 3 functions to draw a reactangle on canvas:
- `fillRect(x, y, width, height)` : Draws a filled rectangle.
- `strokeRect(x, y, width, height)` : Draws a rectanglular outline.
- `clearRect(x, y, width, height)` : Clears the rectanglular area, makes it transparent.
- Parameters:
    - `x` : Position on x-axis
    - `y` : Position on y-axis
    - `width` : Width of rectangle
    - `Height` : Height of rectangle


#### 2.2 Path:
- Path is a list of points connected by segment of lines.
- The segment can be of different shape, curved or not, different width & color.
- A path can be closed to make a shape.

##### 2.2.1 Steps to Making Shape using paths
- Create a path
- Use drawing command to draw into the path
- Once the path has been created
    - Add stroke or fill the path for rendering.
    - Close the path.


##### 2.2.2 Path Methods: 
- `beginPath()`
- `closePaht()`
- `stroke()`
- `fill()`

##### 2.2.3 Some Drawing Methods:
- `moveTo(x, Y)`
- `lineTo(x, y)`
- `arc(x, y , radius, startAngle, endAngle, counterClockwise)`
- `arcTo(x1, y1, x2, y2, radius)`
- `quadraticCurveTo(cp1x, cp1y, x, y)`
- `bazierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
- `rect(x, y, width, height)`


##### 2.2.4 Path2D objects
- `Path2D()`
- It is used to simplify the process of using series of paths to draw and to improve performance.
- Also let's chach the record of these drawing command.
- So, these paths can be played back quickly.


#### TODO:
- Add more examples in the code, for other drawing types
    - arc, arcTo, quadraticCurveTo, bazierCurveTo, Path2D

















