# Dot matrix display

Dot-matrix-display is a simple app that imitates LED display.

Link: https://konrad-romanowski.github.io/dot-matrix-display/index.html

### Technologies involved:
* HTML,
* CSS,
* JavaScript.

### How does the app work?
Whenever user types something into the input-box it is translated with a dictionary to a <code>signal</code> which is just an array of boolean values. <code>signal</code> array is then used to indicate which diodes of the display screen should be turned on and off. The value of <code>true</code> indicates that the diode should be turned on. Display is comprised of list (</code>array</code> of html nodes) of properly styled <code>div</code> elements. <code>signal</code> array is looped and whenever value of <code>true</code> is met then the classs of <code>.active</code> is added to the display's <code>div</code> element with the same index, so the proper diode is highlighted. User can turn on the animation effect which moves whole text from right to left. In the code it is handled by setting and removing interval which is shifting the first 7 elements of the <code>signal</code> array (first column of the display scren) and pushing it to it's end.

### What have I learnt during the project:

1. Basics of ES6 class syntax in JS and working with objects,
2. Basics of SOLID design principles - not really applied succesfully (yet!),
3. How to remove setInterval function,
4. It was a fun project to practice higher order array functions, concatenating arrays with spread operator and switch-case syntax.