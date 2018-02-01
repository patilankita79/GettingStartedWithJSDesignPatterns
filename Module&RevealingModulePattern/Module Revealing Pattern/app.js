// Basic structure or blueprint for module pattern

// (function() {
//     // Declare private variables and functions

//     return {
//         // Declare public variables and functions
//     }
// })();


// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);

        console.log('Item added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'Ankita'});
console.log(ItemCtrl.get(1));