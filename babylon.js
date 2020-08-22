(function(){ 
    var canvas = document.getElementById("canvas");
    var engine = new BABYLON.Engine(canvas, true);

    // here the doc for Load function: //doc.babylonjs.com/api/classes/babylon.sceneloader#load
    BABYLON.SceneLoader.Load("", "y.babylon", engine, function (scene) {

        //as this .babylon example hasn't camera in it, we have to create one
        var camera = new BABYLON.ArcRotateCamera("Camera", 4.64, 1.5,7, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, false);

        scene.clearColor = new BABYLON.Color4.FromInts(5, 5, 0, 0); //colour of canvas
        scene.ambientColor = new BABYLON.Color3.White;

        engine.runRenderLoop(function() {
            scene.render();
        });

        window.addEventListener("resize", function () {
            engine.resize();
        });

        var light = new BABYLON.PointLight("PointLight",new BABYLON.Vector3(
        1,1,1),scene);
        light.parent = camera;
        light.intensity = 280.001;
    });
})();