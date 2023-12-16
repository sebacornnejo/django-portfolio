var bee = document.getElementById("bee");
    document.addEventListener("mousemove", getMouse);


    bee.style.position = "absolute"; //css		
    var beepos = { x: 0, y: 0 };

    setInterval(followMouse, 50);

    var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

    var dir = "right";
    function getMouse(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        if (mouse.x > beepos.x) {
            dir = "right";
        } else {
            dir = "left";
        }
    }

    function followMouse() {
        //1. find distance X , distance Y
        var distX = mouse.x - beepos.x;
        var distY = mouse.y - beepos.y;

        beepos.x += distX / 5;
        beepos.y += distY / 2;

        bee.style.left = beepos.x + "px";
        bee.style.top = beepos.y + "px";

        if (dir == "right") {
            bee.setAttribute("class", "right");
        } else {
            bee.setAttribute("class", "left");
        }

    }