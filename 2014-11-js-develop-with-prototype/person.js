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
