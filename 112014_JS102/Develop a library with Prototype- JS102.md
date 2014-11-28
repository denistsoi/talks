# Develope a Library with Prototype:
# JS 102

## Leave if you already know the folowing
- Know how to use Prototype
- Have already read Eloquent Javascript
- Know Node js and can link libraries
- Can already `npm publish`

## Aims
- What is an object?
- Create a function
- Introduction to Prototype Pattern
- Create a simple library
- Mimic jQuery

## Demographic

- Junior web devs

## Acknowledgements
- Vladimir Popov <vlad@seedalpha.net>
- TJ [github](https://github.com/tj)
- Segment.io [github](https://github.com/segmentio/)
- Wearefractal [github](https://github.com/wearefractal)

Primer: Everything is an object in javascript.
---


Case Study: What is an object
---

```js
var obj = {}
```

### Example:

```js
var person = {
    name: 'Denis',
    age:  27
}

```

```js
console.log(person)
console.log(person.name, person.age)
```

But what if you want to create multiple names and ages?
---

Create a function
===
```js
// Lets Create the Person function
var Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function(msg){
    console.log("Hello my name is", name);  
  }
}
```
```js
// Let's init some people
var denis = new Person('denis', 27);
var karen = new Person('karen', 21);
var woco  = new Person('women who code', 1);
```
```js
// Let us call that greet function
denis.greet();
karen.greet();
woco.greet();
```

But what if I want to change the greet method on the fly?
---
```js
denis.greet = function(msg) {
  console.log(this.name, 'said:', msg);
}
```
```js
// Let us call that greet function
denis.greet();
karen.greet();
woco.greet();
```

What if I want to create a new method on the fly?
---
```js
// create a new method on the fly...
denis.groot = function() {
  console.log('I am', this.name);
}
```

```js
denis.groot();
```

Lets look at the denis obj now
---
```js
console.log(denis);
```

Dope Right?
===

Ok that's great, but I don't want to create methods on the fly?
---

Introduction to Prototype
===

Let's create a Person function
---


```js
// Constructor
var Person = function(name, age) {
  this.name = name;
  this.age = age;
}
```
Prototype Magic
---
```js
Person.prototype.greet = function() {
  console.log(this.name, 'said Hello');
}
```
```js
Person.prototype.groot = function() {
  console.log(this.name, 'said: I am Groot');
}
```
```js
var denis = new Person('denis', 21);
denis.greet();
denis.groot();
```
So we've created groot and greet methods for Person...
---
What if we create vlad as a `new Person`?
---
```js
var vlad = new Person('vlad', 28);
vlad.greet();
```

What just happened?
---

The methods we created are bound to the Person object, so whenever we create a new person, they 'inherit' the methods from Person.

Note: inheritance here is referred as 'prototypical inheritance'

Midway summary
---
- We created a function, with methods (that took no arguments)

Let's create a method that takes an arguent
---
```js
Person.prototype.levelup = function(level) {
  this.level += level;
}
```

### But is wrong with this?


# Aiyo!!!
### `Level` is not defined in `Person!`


Solution
---

```js
Person.prototype.levelup = function(level) {
  if (!this.level) {
    this.level = level;  
  } else {
    this.level += level;
  }
}

```
```js
denis.levelup(1)
console.log(denis.level);
```

Question
---
### Can i combine a refer a mehod from within a prototypical function?

YES! Lets Create it~
---
```js
// checkLevel method
Person.prototype.checkLevel = function() {
  if (this.level >= 9000) {
    console.log(this.name, 'is over 9000!!!');
  } else {
    console.log(this.name, 'is level:', this.level);
  }
}
```
```js
denis.checkLevel();
```

### Add checkLevel method to levelUp ###

```js
Person.prototype.levelup = function(level) {
  if (!this.level) {
    this.level = level;  
  } else {
    this.level += level;
    this.checklevel();
  }
}

denis.levelup(9000);
```


Let's use what we've done to create a Person library
===
```js
var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(this.name, 'said Hello');
}

Person.prototype.groot = function() {
  console.log(this.name, 'said: I am Groot');
}

Person.prototype.levelup = function(level) {
  if (!this.level) {
    this.level = level;  
  } else {
    this.level += level;
    this.checklevel();
  }
}

Person.prototype.checkLevel = function() {
  if (this.level >= 9000) {
    console.log(this.name, 'is over 9000!!!');
  } else {
    console.log(this.name, 'is level:', this.level);
  }
}
```

Congratulations
===
 - You've created some methods using prototype
 - We've created an constructor - with binding properties
 - Created methods for that object
 - Referred other predefined methods within a method



Ultimate Case study:
===
### Create functions similar to jQuery

We all love `$('body');` right?  
Why don't we create it?

```js
function $(el){
  return document.querySelector(el);
}
```

Let's go to [google.com] (google.com)

```js
function $(el){
  return document.querySelector(el);
}

$('#hplogo');
```


TADA!
===

Reading:
---
### if you want more info of how to build jQuery
- [Dailyjs: how to build a framework] (http://dailyjs.com/framework.html)

### Want to advance your JS?
- [Eloquent Javascript] (http://eloquentjavascript.net/)

### License MIT
### Authored by Denis Tsoi with acknowledgement to Vladimir Popov


Closing Tips
===

- Get inspired and make relationships with skilled developers
- Don't be afraid to try
- Take the time to reflect on your progress
- Think about your tools to leverage your skillset


Special Thanks
===

- Seed Alpha for letting me give this talk
- Karen Farzam of Women Who Code HK
