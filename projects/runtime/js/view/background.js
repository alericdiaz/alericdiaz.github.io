var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];



        
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#52615a'); //creates variable backroundFill, stores rectangle as a function call, accepts x, y, and color.
            background.addChild(backgroundFill); // takes variable backround fill and adds it as a child of the backround.
            
            // TODO 2: - Add a moon and starfield

            for(var stars = 0; stars < 100; stars++){ //creates a star every time loop runs
                var circle = draw.circle(2, "white", "yellow", 2); //draws circle at specific radius, internal color, and outline
                circle.x = canvasWidth * Math.random(); // adds rand number * canvasWidth as the value of x for the circle
                circle.y = groundY * Math.random(); //adds rand number * groundY as the value of y for the circle
                background.addChild(circle); // data stored in circle variable is added as child of the background
            }


            var moon = draw.bitmap("img/moon.png"); //draw.bitmap holds image, adding it to moon variable
            moon.x = canvasWidth - 250; //adds x to moon variable
            moon.y = groundY - 350; //sets y value to moon variable
            moon.scaleX = 0.5; //scales the size of the image with x
            moon.scaleY = 0.5; //scales the size of the image with y
            background.addChild(moon); // data stored in moon variable is added as child of the background
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) { //for loop that creates 5 buildings
                var buildingHeight = 300 * Math.random();//variable that decides height of building
                var building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);//sets variable for single building, using buildingHeight for parameter 
                building.x = 200 * i;//creates x value for building, multiplies by iteration
                building.y = groundY - buildingHeight;//creates y value, subtracting building height to stay in place
                background.addChild(building);//adds building variable as child of background
                buildings.push(building);//takes building, pushes it to building array, saving the data
            }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = canvasWidth; //adds x to tree variable
            tree.y = groundY - 225; //sets y value to tree variable
            background.addChild(tree); //adds the data stored in tree as child of backkround
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x -=6; //takes x value of tree and reassigns it to make it move to the left
            if (tree.x < -450){ //if statement that checks if tree has gone off left side of canvas, if yes then move to right side of canvas
                tree.x = canvasWidth; // moves tree.x to right side of the screen
            }
            
            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
