// TypeScript String Literal Types

// Example 1
let click: 'click';
click = 'click';
// click = 'dblclick' // Compiler error

// Example 2
type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';

let mouseEvent: MyMouseEvent;
mouseEvent = 'click';
mouseEvent = 'dblclick';
mouseEvent = 'mouseup';
mouseEvent = 'mousedown';
// mouseEvent = 'mouseover'; // Compiler error

let AnotherMouseEvent: MyMouseEvent;