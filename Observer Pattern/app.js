// constructor function

function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You have subscribed to ${fn.name} `);
    },
    unsubscribe: function(fn) {
        // filter out whatever matches the callback function
        // If there is no match, the callback gets to stay on the list
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            } 
        });

        console.log(`You are unsubscribed from ${fn.addEventListenername}`)
    },

    fire: function() {
        this.observers.forEach(function(item){
            item.call();
        })
    }
}

// Instantiate
const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
})

// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`)
}