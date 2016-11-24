Intro to SASS: CSS on steroids

As part of the #WOCO.HK Frontend Series

Hosted by Denis Tsoi 

@denistsoi (twitter)

Spiel about the host

Developer at Seed Alpha
Former Precious Metals Dealer 
Former Web Developer @ Makible
Community Organiser for Hong Kong's HackerSpace DimSumLabs
CoFounder for Digifab.HK 
Enoug h about me...

Let's get IT started...
prerequisites:
Basic CSS... 
http://pumpula.net/p/apps/css-vocabulary/


SASS is NOT...

WHat is SASS?
Nested CSS
Variables
Mixins
Arguments (functions)
Extends
Imports and Partials
Bonus: 
Indented SASS
COMPASS (SASS Extension)
1. NESTED CSS
2. Variables

```
$page-width: 768px;
$cool-blue: #0CA8EB;
 
body {
  width: $page-width;
}
 
nav li.active {
  background: $cool-blue;
}
You can also use math!!!

3. Mixins
Mixins are like reuseable style code 
(without the use of classes)

4. Arguments

5. extends
instead of...

use...

6. imports and partials
Remember...
_filename is a partial, 
whereas filename.scss will be compile to a separate scss

other tips/tricks
Using "&" as ' parent' selector...
li{
  width: 30px;
}
 li:hover{
  width: 100px;
}
li {
  width: 30px;
 &:hover {
  width: 100px;
  }
}
 
 

 
using indented sass

Why would I use SASS?
If you're super lazy...

If you've seen CSS Spaghetti Code...

how to use sass out-the-box
Watch one file...

sass <input.sass> <output.css>

 sass input.sass output.css
 

Watch one file

sass --watch app.scss:public/stylesheets 
WATCH DIRECTORY

sass --watch app.scss:public/stylesheets 
Lets take a break...
Live coding samples
Create a portfolio sample in 20 minutes or less.
http://cdpn.io/taiEf
what next?
Checkout COMPASS-Style  http://compass-style.org/
Experiment with Codepen (Sass/scss/less is provided)
Checkout