---
title: "This is tricky in JavaScript"
description: "Simply put this is a keyword in JavaScript that references a value usually an object which represents the current execution context. Sounds simple but what makes it tricky is it behaves differently if it is referenced inside a regular function, an arrow function or a method inside an object."
authorImage: "../assets/ajesh.jpg"
author: "Ajesh Mishra"
date: "12 Dec 2021"
duration: "10 min read"
published: true
photo: "https://i.imgur.com/aUjH6CK.png"
tags:
  - javascript
  - beginner
  - this
---

<div id="article-header"></div>

## This in regular function context

`This` references the Window object in browser or global object in node when called from a regular function or outside of a function.

### {javascript} main.js
```javascript
console.log(this); // Window

function regularFn() {
  console.log(this); // Window
}

regularFn();
```

However when using strict mode `this` becomes *undefined* inside of the function but the outside reference still points to the Window object.

### {javascript} main.js
```javascript
'use strict';

console.log(this); // Window

function regularFn() {
  console.log(this); // undefined
}

regularFn();
```

## This inside an Object

In a method `this` refers to the object from which it is called. This makes sense as the method can access the objects properties. In the below example both the methods `show()` and `publishMe()` have access to the the properties of the *blog* object.

### {javascript} main.js
```javascript
let blog = {
  title: 'First Blog',
  published: false,

  show: function () {
    console.log(`The blog: "${this.title}" is ${this.published ? '' : 'not '}published!`);
  },

  publishMe: function () {
    this.published = true;
  }
}

blog.show(); // The blog: "First Blog" is not published!
blog.publishMe();
blog.show(); // The blog: "First Blog" is published!
```

This works the same way if you try to define the methods outside if the object and try to bind, call or apply to the object.

### {javascript} main.js
```javascript
function show () {
  console.log(`The blog: "${this.title}" is ${this.published ? '' : 'not '}published!`)
}

function publishMe () {
  this.published = true;
}

let blog = {
  title: 'First Blog',
  published: false,
}

let showBlog = show.bind(blog); 

showBlog(); // The blog: "First Blog" is not published!
publishMe.call(blog);
showBlog(); // The blog: "First Blog" is not published!
```

> {know} The only difference between Call and Apply is that call can take multiple arguments with the first argument being the object but apply takes 2 arguments and second one is an array.

## Function inside a Method

Function inside a method behaves like a regular function which means `this` refers to the window object in a browser. Lets add *tags* to our *blog* object and check out the example.

### {javascript} main.js
```javascript
let blog = {
  title: 'First Blog',
  published: false,
  tags: ['nature', 'travel', 'wanderlust'],
  show: function () {
    this.tags.forEach( function(tag) {
      console.log(this.title, tag); // undefined 'nature' 
                                    // undefined 'travel' 
      console.log(this); // Window
    });
  }
}

blog.show();
```

While in strict mode you will get an error saying, "Cannot read properties of undefined (reading 'title')".

To fix this issue we pass the blog object as a second argument to the `forEach` function. 

### {javascript} main.js
```javascript
let blog = {
  title: 'First Blog',
  published: false,
  tags: ['nature', 'travel'],
  show: function () {
    this.tags.forEach( function(tag) {
      console.log(this.title, tag); // 'First Blog' 'nature' 
                                    // 'First Blog' 'travel' 
      console.log(this); // blog
    }, blog); // Passing blog to the forEach function to set this
  }
}

blog.show();
```

But not all functions in JavaScript support this so we can convert the regular function to an arrow function.

### {javascript} main.js
```javascript
let blog = {
  title: 'First Blog',
  published: false,
  tags: ['nature', 'travel'],
  show: function () {
    this.tags.forEach( tag => { // convert to an arrow function
      console.log(this.title, tag); // 'First Blog' 'nature' 
                                    // 'First Blog' 'travel' 
      console.log(this); // blog
    });
  }
}

blog.show();
```

## Arrow Functions inside a Method

Arrow functions inside an object references the windows object, hence our previous code when refactored to use arrow functions throws an error.

### {javascript} main.js
```javascript
'use strict';

let blog = {
  title: 'First Blog',
  published: false,

  show: () => {
    console.log(`The blog title is "${this.title}"`); 
    // The blog title is "undefined"
    console.log(this); // Window
  }
}

blog.show(); 
```

## Function chaining in JavaScript

This keyword makes method chaining possible in JavaScript, you just have to return `this` from the function. Let's refactor our old example so that we can chain `show()` method after `publishMe()`.

### {javascript} main.js
```javascript
'use strict';

let blog = {
  title: 'First Blog',
  published: false,

  show: function () {
    console.log(`The blog: "${this.title}" is ${this.published ? '' : 'not '}published!`);
  },

  publishMe: function () {
    this.published = true;
    return this;
  }
}

blog.show(); // The blog: "First Blog" is not published!
blog.publishMe().show(); // The blog: "First Blog" is published!
```

## Summary

Cool, you have made it to end of `this` article, pun intended. Let's do a quick recap.

| Scenarios | Which Object |
| ---: | :--- |
| Function | window object in browser and global in node but Undefined in strict mode |
| Method | The object itself |
| Function inside a Method | window object in browser and global in Node |
| Arrow Function inside a Method | window object in browser and global in Node but Undefined in strict mode |
| New Operator | New empty Object which is created by New operator |


<div id="article-footer"></div>