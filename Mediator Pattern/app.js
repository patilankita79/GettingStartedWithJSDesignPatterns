const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

// mediator
const Chatroom = function() {
    // list of users
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // single user message
                to.receive(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const ankita = new User('Ankita');
const john = new User('John');
const jeff = new User('Jeff');

const chatroom = new Chatroom();

// register each user
chatroom.register(ankita);
chatroom.register(john);
chatroom.register(jeff);

ankita.send('Hello Jeff', jeff);
jeff.send('Hello Everyone!!!!');