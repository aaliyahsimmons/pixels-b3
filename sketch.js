var img;

function preload(){
    img = loadImage("greys-a.jpg");
}

function setup(){
    createCanvas(img.width,img.height);
    background(0);
}

function draw(){
    image(img, 0, 0); 
    loadPixels();
    
    
   for(var row = 0; row < height; row++){
       for(var col = 0; col < width; col++){
           var index = (col + row * width) * 4;
           
            var r =pixels[index];
            var g= pixels[index + 1]; 
            var b= pixels[index + 2];
            var a= pixels[index + 3];
           
           pixels[index] = r; //red
           pixels[index + 1] = g; //green
           pixels[index + 2] = b; //blue
           pixels[index + 3] = 255; //alpha
           
           if(keyIsPressed){
               if(key=="1"){
                   gray_filter(index,r,g,b,a);
               }
               if(key=="2"){
                    zombie_filter( index, r, g, b, a);
               }
               if(key=="3"){
                  color_swap(index, r, g, b, a);
               }
               if(key=="4"){
                darker_filter(index, r, g, b, a);
               }
               if(key=="5"){
             brighter_filter(index, r,g,b, a);
               }
               if(key=="6"){
                   rgb_filter(index, r,g,b,a);
               }
               if(key=="7"){
                   aaliyah_filter(index, r,g, b, a);
               }
           }
           
           else{
              pixels[index + 0] = r; //red
              pixels[index + 1] = g; //green
              pixels[index + 2] = b; //blue
              pixels[index + 3] = a; //alpha
               
           }
       } 
       
   }
   
     updatePixels();
    
}

function gray_filter( index,r,g,b,a){
    pixels[index + 0] = g; //red
    pixels[index + 1] = g; //green
    pixels[index + 2] = g; //blue
    pixels[index + 3] = a; //alpha
            
} 

function zombie_filter(index, r, g, b, a){
    pixels[index + 0] = 0; //red
    pixels[index + 1] = g; //green
    pixels[index + 2] = 0; //blue
    pixels[index + 3] = a; //alpha
}

function color_swap(index,r,g,b,a){
    pixels[index + 0] = r; //red
    pixels[index + 1] = b; //green
    pixels[index + 2] = g; //blue
    pixels[index + 3] = a; //alpha
}

function darker_filter(index,r,g,b,a){
    pixels[index + 0] = r/2; //red
    pixels[index + 1] = g/2; //green
    pixels[index + 2] = b/2; //blue
    pixels[index + 3] = a; //alpha  
}

function brighter_filter(index, r, g, b, a){
    pixels[index + 0] = r*2; //red
    pixels[index + 1] = g*2; //green
    pixels[index + 2] = b*2; //blue
    pixels[index + 3] = a; //alpha
}

function aaliyah_filter(index, r, g, b,a){
    pixels[index + 0] = 100; //red
    pixels[index + 1] = 50; //green
    pixels[index + 2] = 50; //blue
    pixels[index + 3] = a; //alpha
}

function rgb_filter(index, r,g , b, a,){
    pixels[index + 0] = 255 - r; //red
    pixels[index + 1] = 255 - g; //green
    pixels[index + 2] = 255 - b; //blue
    pixels[index + 3] = a; //alpha
}