background_image="racing.jpg";
car1_image="car1.png";
car2_image="car2.png";
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=150;
car1_width=100;
car1_height=100;
car2_width=100;
car2_height=100;

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

function add() {
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
   car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag= new Image();
   car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y,car1_width,car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y,car2_width,car2_height);
}

canvas.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode
    console.log(keyPressed);
     if(keyPressed=='38')
     {
         car1up();
         console.log("up");
     }

     if(keyPressed=='40')
     {
         car1down();
         console.log("down");
     }

     if(keyPressed=='37')
     {
         car1left();
         console.log("left");
     }

     if(keyPressed=='39')
     {
         car1right();
         console.log("right");
     }

     
     
     
     if(keyPressed=='87')
     {
         car2up();
         console.log("up2");
     }

     if(keyPressed=='83')
     {
         car2down();
         console.log("down2");
     }

     if(keyPressed=='65')
     {
         car2left();
         console.log("left2");
     }

     if(keyPressed=='68')
     {
         car2right();
         console.log("right2");
     }
}

function car1up()
{
    if(car1_y >=0)
    {
        car1_y-=10;
        console.log("When up is pressed=" + car1_x +" - " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}


function car1down()
{
    if(car1_y <=500)
    {
        car1_y+=10;
        console.log("When down is pressed=" + car1_x +" - " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function car1left()
{
    if(car1_x >=0)
    {
        car1_x-=10;
        console.log("When left is pressed=" + car1_x +" - " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function car1right()
{
    if(car1_x <=700)
    {
        car1_x=car1_x+10;
        console.log("When right is pressed=" + car1_x +" - " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}


function car2up()
{
    if(car2_y >=0)
    {
        car2_y-=10;
        console.log("When up is pressed=" + car2_x +" - " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}


function car2down()
{
    if(car2_y <=500)
    {
        car1_y+=10;
        console.log("When down is pressed=" + car2_x +" - " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function car2left()
{
    if(car2_x >=0)
    {
        car2_x-=10;
        console.log("When left is pressed=" + car2_x +" - " + car2_y);
        uploadBackground();
        uploadrover();
    }
}

function car2right()
{
    if(car2_x <=700)
    {
        car2_x=car2_x+10;
        console.log("When right is pressed=" + car2_x +" - " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}