WTF is Three js??? 

hosted by HKWD

Presented by 
3d wannabe

@DenisTsoi 

DisclaimeR 

I am NOt a 3d ExperT...

I just started learning...

and forced myself&nbsp; 
to give a talk... 

Who started three.js? 

Why??? ... Check out below 

Intro Talk by Mr Doob &amp; AlteredQualia 2012 

Another Good Intro Video 

What WE Will be Covering 

Fundamentals of using three.js 
- What is WebGL and why should you care? 
// Graphics pipeline 

- What do I need to know to get started? 
// Cameras, Lights, Meshes, Materials, Geometry 
... ACTION! 

What is the Graphics Pipeline? 
[And Why Should I Care?] 

Explanation of all that: 

1. 3d Model gets sent to GPU as vertices 
2. &nbsp;Vertices get converted to 2d using algos 
3. 2d image is mapped to screen space in colour buffer 
4. &nbsp;Monitor displays colour buffer 

BOOM! 

What is three.js...

in relation to WEbGL?

Even though WebGl is an abstraction of OpenGL,&nbsp; 
WebGL is low level compared to Three.js 

Therefore... 

WHAT IS THREE.JS...

IN RELATION TO WEBGL?

...
Three.js is higher level! -&nbsp; 

Great for us Designers and people who are afraid of math 

Basics 

What is a Camera? 
What is a Scene? 

What is Geometry? 

How an object is drawn 

What is a Mesh? 

How an object is drawn with the material data corresponding to the object 

Shaders/Material 

http://jsfiddle.net/denistsoi/y6DNs/1/ 

Lambert = "Flat/Matt" 

Phong = Shiny! 

What is lighting? 
Ambient - applied to everyting 
Point Light - Radiates Everywhere from source 
Spot Light - Cone Radient from source 
Directional Light - "Sun" 

Lets Reiterate 

//Create a scene 

var scene = new THREE.Scene(); 

//Create a camera 

var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 

// select a render (Choice of WebGL or Canvas***) 

var renderer = new THREE.WebGLRenderer(); 

// set size of render 

renderer.setSize(window.innerWidth, window.innerHeight); 

// append renderer as Dom element 

document.body.appendChild(renderer.domElement); 

Almost done... 

// lets add a Geometry

var geometry = new THREE.CubeGeometry(1,2,1); 
// Now int a Material

var material = new THREE.MeshBasicMaterial({color: 0xffff00}); 

// stick it all together

var cube = new THREE.Mesh(geometry, material);

// Add it to the scene

scene.add(cube); 
// set the camera away from the object

camera.position.z = 5; 

Not Quite Yet... Render! 

var render = function () { 

// Request Animation Frame! 

requestAnimationFrame(render); 

// lets do animate something 

cube.rotation.x += 0.1;

cube.rotation.y += 0.1; 

// tell the renderer to RENDER! the Scene and the Camera 

renderer.render(scene, camera);

}; 

render(); 

Other Tools 
Detector.js 
Stats.js 

Three.js BoilerPlate! 

http://jeromeetienne.github.io/threejsboilerplatebuilder/#builder 

Other Resources 

http://threejs.org/docs/ 

http://www.aerotwist.com/tutorials/getting-started-with-three-js/ 

http://stemkoski.github.io/Three.js/ 

http://learningthreejs.com/blog/2013/08/02/how-to-do-a-procedural-city-in-100lines/ 

Cool Examples 

http://lights.elliegoulding.com/ 

http://acko.net/ 

http://tutorialzine.com/2013/09/20-impressive-examples-for-learning-webgl-with-three-js/ 

http://www.sitepoint.com/three-js-babylon-js-comparison-webgl-frameworks/ 

http://www.sitepoint.com/talk-html5-games-with-the-experts-resources-and-transcript/ 

http://www.html5canvastutorials.com/three/html5-canvas-webgl-with-three-js/ 

OTHER USeful Learning MATERIAL... 

HTTP://LEARNINGTHREEJS.COM/ 

Great for diving deeper with other js libraries 

http://coding.smashingmagazine.com/2013/09/17/introduction-to-polygonal-modeling-and-three-js/ 

ADDITIONAL 

&nbsp;Thought Challenges&nbsp; 

H 

OW TO RENDER MULTIPLE VIEWS IN A SINGLE VIEWPORT? (MULTIPLE CAMERAS) 

HTTP://MRDOOB.GITHUB.IO/THREE.JS/EXAMPLES/WEBGL_MULTIPLE_VIEWS.HTML 

http://bkcore.com/blog/3d/webgl-three-js-extension-rendermanager.html 

http://picanteverde.wordpress.com/2013/06/14/3d-side-by-side-with-three-js/ 

OpenCTM [Open Compressed Triangle Mesh] 

http://vizup.com/demo/webview-cami.html 

http://openctm.sourceforge.net/ 

Adding Physics libraries 

http://learningthreejs.com/blog/2012/06/05/3d-physics-with-three-js-and-physijs/ 

Adding Keyboard Functionality 

http://learningthreejs.com/data/THREEx/docs/THREEx.KeyboardState.html 

ADDITIONAL 
&nbsp;THOUGHT CHALLENGES&nbsp; 

Custom Fragment Shader &amp;&nbsp; 
Vertex Shaders

- ShaderToy 

GLSL 

Questions? 

Does it run on mobile? 

Physics on three.js? 

Bullet.js / ammo.js /&nbsp; 

babylon.js for ie? 

www.babylonjs.com 

special thanks to: 

YOU!&nbsp; 

for listening! 

SPECIAL SHOUT OUT... 

STEPHEN BEESON, VLADIMIR POPOV, NEIL NAND,&nbsp;

IMAGINATION HK, HKWD COMMUNITY&nbsp;