# WTF is CSS3d... And Why should I Care?

Hosted by Denis Tsoi 
@denistsoi (twitter)

## Everybody Loves Backend Right?
CSS3d = css awesomeness  


## What You will hear me ranting about...

- CSS3D Transforms  
- Live Code Example  
- CSS3D vs jQuery  
- Limitations of CSS3D  
- Tie in: Intro to Sass  
- CSS3d Transforms  

 /* within .css file */
 /* remember your vendor prefixes... for now */ 
 
    el {
      transform-style: preserve3d;
      transform: translate3d(x,y,z);
      transition: all 2s ease-in;
    }
 

/* adding some 'CSS interaction' */
 
    el:hover {
      transform: translate3d(-x,-y,-z);
      transition: all 2s ease-in;
    }
 
## Live Coding Example

#### Simple Transitions
    
    http://codepen.io/denistsoi/pen/lGut

#### 3D perspective 
    
    http://cdpn.io/lGuth

## Why Use pure css & js instead of jquery?

Relying on jQuery can be restrictive
instead, use CSS classes and js "add class" 
Frontenders can focus on styles rather than getting 
"lost in the code"

### Limitations of CSS3d

- Limitations of the Browser...
What are the limitations of the Browser?
... Future Topic?

### What Can't I do with CSS3?
How about Scalability?...
Dynamic/programatic animations


### Too lazy to make 3d shapes in css?
    
    http://tridiv.com/

If you need more 3D use Three.js or WEBGL! :D

Why? ...

    http://gcode.joewalnes.com/

`Imagine running each dot as a DOM Element? - IT WON'T SCALE!`

### what about Keyframes?
Well - Keyframes are awesome, 
like this sample I made a while back

    http://codepen.io/denistsoi/pen/crldB

    http://codepen.io/denistsoi/full/crldB/ 

Now the thing to consider when you're prototyping is: 

1. Is this sustainable for multiple transitions?

For boutique animations, you wouldn't care, but if you're concerned with reusable code, then keyframes might not be great...

## The end

### Author
Denis Tsoi

### License
![CCBY](../assets/by.png)  
Creative Commons Attribution License (do whatever, just attribute me) http://creativecommons.org/licenses/by/4.0/