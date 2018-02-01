// Basic structure or blueprint for module pattern

// (function() {
//     // Declare private variables and functions

//     return {
//         // Declare public variables and functions
//     }
// })();

// STANDARD MODULE PATTERN
 const UICtrl = (function() {
     // private variable and therefore cannot be accessed from outside of the module
     let text = 'Hello World';

     // Goal - Change the heading h1 in front-end to the private variable text's value
     const changeText = function() {
         const element = document.querySelector('h1');
         element.textContent = text;
     }

     // whatever we return, it will be public so that we can access it from outside
     return {
         callChangeText: function() {
             changeText();
             console.log(text);
         }
     }
})();

// UICtrl.callChangeText();

