# Drawing functions


# we need a basic sintrodution ti the p5 - library to create our first sketches

- How the coordinate system in p5 works
- ho to draw in p5 
  
  ----------------------------------------------------------------------

  # The coordinate system

  axes (Achsen, wie im Koordinatensystem)

  - x -> horizontal axis
  - y -> vertical axis

------------------------------------------------------------------------

# background();

## the background(); function accepts various representations.

- it is used to change the background color
- the color is passed to the function as an argument

example:

// GrayScale value from 0 (black) to 255 (white)
background(50);

// rgb (red, green, blue) value
background(255,0,0)

// css color names
background("antiquewhite");

# The circle(x,y,diameter); function is used to draw a circle

- at a specific position within a coordinate parameter (x,y)
- and a specific size / (diameter) parameter


# drawing rects and squares

## the rect(x,y,width,height); function is used to draw a rectangle

- at a specific position -> x and y parameter
- in specific dimensions -> width an height parameter


# changing the fill- and stroke color

## the stroke(); and fill(); functions are used to set drawing colors

- stroke(color); defines the outline color
- fill(color); defines the fill color

## the color stays the same for every drawing instruction until the color is changed

## This works for *text writing* commands as well

# there are also noStroke(); and noFill(); functions(!imp) <-

### example

function draw() {
  background(220);
  stroke("hotpink");
  fill("green")
  circle(200, 200, 50);
  noFill();
  circle(100, 200, 25);
  fill("yellow");
  stroke("black");
  rect(80, 15, 20, 100);
  
}

# how to set a different stroke weight 

## the strokeWeight(); function is used to set the thickness of strokes
## the strokeWeight(5); is defined in pixels, so *5px* in this case