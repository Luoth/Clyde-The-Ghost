//var backgroundLayer = new Kinetic.Layer();
var	gameObjectsLayer = new Kinetic.Layer();

window.onload = function () {

	var stage = new Kinetic.Stage({
	    container: "container",
	    width: 1920,
	    height: 1080
	});

	//stage.add(backgroundLayer);
	stage.add(gameObjectsLayer);
}