var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";

var block_image_object = "";

function player_Update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x

        });
        canvas.add(player_object);
    });
}

function new_Image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (e.shiftKey == true && KeyPressed == '80') {
        console.log("p and shift pressed togather");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && KeyPressed == '77') {
        console.log("m and shift pressed togather");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (KeyPressed == '37') {
        left();
        console.log("left");

    }

    if (KeyPressed == '38') {
        up();
        console.log("up");

    }

    if (KeyPressed == '39') {
        right();
        console.log("right");

    }

    if (KeyPressed == '40') {
        down();
        console.log("down");

    }

    if (KeyPressed == '87') {
        new_Image('wall.jpg');
        console.log("w");
    }

    if (KeyPressed == '71') {
        new_Image('ground.png');
        console.log("g");
    }

    if (KeyPressed == '76') {
        new_Image('light_green.png');
        console.log("l");
    }

    if (KeyPressed == '84') {
        new_Image('trunk.jpg');
        console.log("t");
    }

    if (KeyPressed == '82') {
        new_Image('roof.jpg');
        console.log("r");
    }

    if (KeyPressed == '89') {
        new_Image('yellow_wall.png');
        console.log("y");
    }

    if (KeyPressed == '68') {
        new_Image('dark_green.png');
        console.log("d");
    }

    if (KeyPressed == '85') {
        new_Image('unique.png');
        console.log("u");
    }

    if (KeyPressed == '67') {
        new_Image('cloud.jpg');
        console.log("c");
    }



}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("block image height" + block_image_height);
        console.log("When up arrow key is pressed X =" + player_x, "Y =" + player_y);
        canvas.remove(player_object);
        player_Update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("block image height" + block_image_height);
        console.log("When down arrow key is pressed X =" + player_x, "Y =" + player_y);
        canvas.remove(player_object);
        player_Update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("block image width" + block_image_width);
        console.log("When left arrow key is pressed X =" + player_x, "Y =" + player_y);
        canvas.remove(player_object);
        player_Update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("block image width" + block_image_width);
        console.log("When right arrow key is pressed X =" + player_x, "Y =" + player_y);
        canvas.remove(player_object);
        player_Update();
    }
}