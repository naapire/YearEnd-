LINK ONE SUMMARY
https://www.w3schools.com/js/js_array_methods.asp
An array's length, or size, is returned by the length property.An array can be converted to a string of (comma-separated) array values using the JavaScript toString() function.All array members are also joined into a string using the join() technique.It functions exactly like toString().Working with arrays makes it simple to add and remove elements.Popping and shoving are exactly like this.You can push or pop things into an array.The final element in an array is eliminated using the pop() method.The value that "popped out" is returned by the pop() function.A new element is added to an array (at the end) using the push() method.The first array element is eliminated via the shift() method, which also "shifts" every other element to a lower index.The shift() method removes the first array element and "shifts" all other elements to a lower index.The shift() method returns the value that was "shifted out".The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.The unshift() method returns the new array length.Array elements are accessed using their index number.The length property provides an easy way to append a new element to an array.The concat() method creates a new array by merging (concatenating) existing arrays.The concat() method does not change the existing arrays. It always returns a new array.Flattening an array is the process of reducing the dimensionality of an array.The flat() method creates a new array with sub-array elements concatenated to a specified depth.The splice() method adds new items to an array.The slice() method slices out a piece of an array.The first parameter (2) defines the position where new elements should be added (spliced in).The second parameter (0) defines how many elements should be removed.The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.The splice() method returns an array with the deleted items.The slice() method can take two arguments like slice(1, 3).The method then selects elements from the start argument, and up to (but not including) the end argument.If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.JavaScript automatically converts an array to a comma separated string when a primitive value is expected.This is always the case when you try to output an array.These two examples will produce the same result.There are no built-in functions for finding the highest or lowest value in a JavaScript array.You will learn how you solve this problem in the next chapter of this tutorial.


LINK TWO SUMMARY
https://www.w3schools.com/js/js_functions.asp
JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task. It is executed when"something" invokes it(calls it).JavaScript functions are defined using the function keyword, name, and parentheses (), with parameter names separated by commas. The code to be executed is enclosed in curly brackets.Function parameters are listed in the function definition, while arguments are the values received when invoked. The code inside the function executes when something invokes it, either through an event, JavaScript code, or automatically.JavaScript stops executing a function when it reaches a return statement, indicating that the function was invoked from a statement and returns the corresponding value to the caller.The () operator invokes(calls) the function. A variable declared within a JavaScript function, becomes Local to the function, meaning it can only be accessed from within the function.

LINK THREE SUMMARY
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
A function is a subprogram in JavaScript that can be called by code, consisting of a function body and a sequence of statements. It can be called from other functions, returned from functions, and assigned to variables and properties. Function values are typically instances of Function, and callable values cause typeof to return "function" instead of "object". The return value is undefined if the function's execution doesn't end at a return statement, but can be simulated by returning an object or array and restructuring the result.JavaScript defines functions as regular, generator, async, and async generator functions. The num variable is the function's parameter, which is declared in the function's definition. The argument, the value passed to the function, can be accessed through the corresponding parameter name or arguments object. Arguments are passed by value, not reference, and can be mutated. JavaScript has four types of functions: regular, generator, async, and async generator. Functions can be defined in three ways: declaration, expression, and constructor. Arrow functions and methods have special syntaxes for precise usage. Classes are not functions but inherit from Function.prototype.

LINK FOUR SUMMARY
https://www.javascripthelp.org/learn/basics/control-flow-statements/
JavaScript have three main types of control flow statements:if/else statements,switch statements and loops.If/else statements are used to execute a block of code if a certain condition is true, and a different block of code if the condition is false.The if…else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. Switch statements are used to execute a block of code based on the value of a variable or expression.Loops are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript: for loops and while loops.A while loop simply repeats itself while something is true. Theoretically a while loop can loop forever. It continues until the condition is false.


LINK FIVE SUMMARY
https://javascript.info/function-basics
A function declaration looks like this:

function name(parameters, parameters) {
  /* code */
}
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables. A function can return a value. If it doesn’t, then its result is undefined.
To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.
Function naming:A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.A function is an action, so function names are usually verbal.There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.