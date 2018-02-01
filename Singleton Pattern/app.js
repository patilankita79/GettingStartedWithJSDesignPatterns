const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Ankita'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();


// Instantiate an object
const instanceA = Singleton.getInstance();

console.log(instanceA);

const instanceB = Singleton.getInstance();
console.log(instanceB);


console.log(instanceA === instanceB);

// Since instanceA === instanceB returns true, it can be concluded that we can never have more than one instance