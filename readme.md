
##Answer_no_1::

getElementById:
This is used to select an element based on its ID, and if there are two elements with the same ID, then it throws an error. It only returns a single element.

getElementsByClassName:
This is used to select elements based on the class name, and even if there are multiple elements with the same class name, it doesn’t throw an error because it returns a collection of elements in an array-like object (not an actual array).

querySelector:
With querySelector, we can select elements in the same way we traverse HTML elements inside a CSS file or style tag. But if there are multiple results with the same name, it only returns the first one it finds.

querySelectorAll:
This works exactly like querySelector, but in the case of multiple results, it returns all the results as a collection in an array-like object.


##Answer_no_2::
 to create an element into the DOM --> document.createElement('div')
 after this maybe use .innerHTML() or .innerText() method
 and after this .appentChild() method is use.

 if anyone wanna set attribute he can use .setAttribute() method for set class name or id name.


##Answer_no_3::
event bubbling is a concept where say if anyhere done any event in DOM then it start inner most element that trigard and then it propagates upword through it's parent element ,grandparent element and so on.
it's so usefull to travers amoung DOM tree

##Answer_no_4::
 it's javascript concept where multiple elements plased in a parent so that it's easier to manege them ..like easier to hendling with eventlistener because rather than using individual eventlistener for each element here use one eventlistener in parent and all elenemt palsed in parent. in Event Delegation use eventBubbling concept using event.target...

 it's useful because of it's simplify complex eventlistener process for multiple element and provide a easier travers solution

##Answer_no_5::

preventDefault() : used for stop default action but event from same lavel cat't stop
 stopPropagation(): but it stop all the further event