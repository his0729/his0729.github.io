class circle
{
    constructor() {
        this.c = color(random(50,255),random(50,255),random(50,255), 200);
        this.x = 0
        this.y = 0
        this.d = random(d1*3/5,d1*2) 
        this.directX = 0; 
        this.directY = 0; 
        this.location = int(random(4));
        
        if(this.location == 0){
             this.x = 0 - this.d/2, this.y = 0
             this.directX = random(-3,3)
             this.directY = random(-3,3)
            }
        else if(this.location == 1){ 
             this.x = 0 - this.d/2 , this.y = windowHeight
             this.directX = random(-3,3)
             this.directY = random(-3,3)
            }
        else if(this.location == 2){
            this.x = windowWidth + this.d/2, this.y = 0
            this.directX = random(-3, 3)
            this.directY = random(-3, 3)
            }
        else if(this.location == 3){
            this.x = windowWidth + this.d/2, this.y = windowHeight
            this.directX = random(-3, 3)
            this.directY = random(-3, 3)
            }
        }
      
    
    display(arg1 = this.c, arg2 = this.d) {
    
     
     push();
     fill(arg1)
     ellipse(this.x, this.y, arg2, arg2)
     pop();
   }
    
    
    move1() {
        
        this.x += this.directX;
        this.y += this.directY;
    }
  }