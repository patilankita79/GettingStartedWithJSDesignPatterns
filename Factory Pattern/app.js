function MemberFactory() {

    // function expression
    this.createMember = function(name, membershiptype) {
        let member;

        // check the membershiptype is are passed it and based on that type create new object or certain type of objects
        if(membershiptype === 'simple') {
            // instantiate
            member = new SimpleMembership(name);
        } else if(membershiptype === 'standard') {
            // instantiate
            member = new StandardMemebership(name);
        } else if(membershiptype === 'super') {
            // instantiate
            member = new SuperMembership(name);
        }

        // set member's type
        member.membershiptype = membershiptype;

        // method
        member.define = function() {
            console.log(`${this.name}, Membership type - ${this.membershiptype} : Cost is ${this.cost}`);
        
        }
       return member; 
    }
}

// Create the constructors for the subclasses - SimpleMembership, StandardMemebership, SuperMembership

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMemebership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}


const members = [];

// define factory
const factory = new MemberFactory();

// add members
members.push(factory.createMember('Ankita Patil', 'simple'));
members.push(factory.createMember('Ram Patil', 'standard'));
members.push(factory.createMember('Shyam Patil', 'super'));

console.log(members);

// Loop through members
members.forEach(function(member) {
    member.define();
})