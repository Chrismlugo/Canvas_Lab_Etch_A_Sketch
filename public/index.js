window.addEventListener('DOMContentLoaded', function(){
  window.addEventListener('keypress', function(event){
    console.log('keypress', event);

    const canvas = document.querySelector('#main-canvas');
    const context = canvas.getContext('2d');
    const coords = JSON.parse(localStorage.getItem('lastCoords')) || [];
    var x = coords[0] || 100;
    var y = coords[1] || 100;
    // drawing a rectangle
    //   context.fillStyle = 'rebeccapurple';
    //   context.fillRect(10,10,50,50);
    //
    //draw line
    // context.strokeStyle = 'green';
    // context.beginPath();
    // context.moveTo(100,100);
    // context.lineTo(100,200);
    // context.stroke();
    //
    //   // draw a triangle
    //
    //   context.beginPath();
    //   context.moveTo(200,200);
    //   context.lineTo(200,300);
    //   context.lineTo(100,300);
    //   context.closePath();
    //   context.stroke();
    //   context.fill();
    //
    //   // draw a circle
    // const drawCircle = function(x, y){
    //   context.beginPath();
    //   context.lineWidth = 2;
    //   context.arc(x,y,50,0,Math.PI * 2, true);
    //   context.stroke();
    // }

    const storeCoords = function(){
      const coords = [x,y];
      localStorage.setItem('lastCoords', JSON.stringify(coords));
    }

    context.beginPath(coords);
    context.moveTo(x,y);

    const move = function(x,y){
      if(x >= 5 && x <= 595 && y >= 5 && y <= 495){
      context.lineTo(x,y);
      context.stroke();
      storeCoords();
      context.closePath();
    }
    }


    //
    // const down = function(lastCoords,x,y ){
    // context.beginPath(coords);
    // context.lineTo(x,y);
    // context.stroke();
    // storeCoords();
    // }
    //
    // const left = function(lastCoords,x,y ){
    // context.beginPath(coords);
    // context.lineTo(x,y);
    // context.stroke();
    // storeCoords();
    // }
    //
    // const right = function(lastCoords,x,y ){
    // context.beginPath(coords);
    // context.lineTo(x,y);
    // context.stroke();
    // storeCoords();
    // }

    document.addEventListener('keydown', function(event){
      switch(event.key){
        case "w":
        y -=5;
        move(x,y);
        break;
        case "s":
        y+=5;
        move(x,y);
        break;
        case "a":
        x-=5;
        move(x,y);
        break;
        case "d":
        x+=5;
        move(x,y);
        break;

      }
    })
  })
})

  //   const img = document.createElement('img');
  //   img.src = "https://pbs.twimg.com/profile_images/788554727378325505/8lzc7jXx_reasonably_small.jpg";
  //
  //   const drawImg = function(x, y){
  //     context.drawImage(img, x,y, 90, 90);
  //   }
  //
  //   img.addEventListener('load', drawImg);
  //
  //   const changeColour = function(){
  //     context.strokeStyle = this.value;
  //   }
  // //
  // const colourPicker = document.querySelector('#input-colour');
  // colourPicker.addEventListener('change', changeColour);
  // } )
