
var ast1,ast2,ast3,ast4,ast5;
var img=[]
var astroid=[];
var mx,my

function preload(){
	ast1=loadImage('astroid-1.svg');
	ast2=loadImage('astroid-2.svg');
	ast3=loadImage('astroid-3.svg');
	ast4=loadImage('astroid-4.svg');
	ast5=loadImage('astroid-5.svg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	img=[ast1,ast2,ast3,ast4,ast5];
	
	for(let i=0;i<5;i++){
		astroid.push(new AstroidL());
		astroid.push(new AstroidR());
	}

}

function draw() {
  background(0)
	fill(255)
	mx=mouseX;
  my=mouseY
	
	for(let i=0 ;i<astroid.length; i++){
		 astroid[i].move();
		 astroid[i].mousemove();
		 astroid[i].show();
	}
	rectMode(CENTER);
	//rect(width/2,height/2,width*0.6,200)
	
	
}

function AstroidL(){
	this.x=random(width*0.05,width*0.3);
	this.y0=height*0.95;
	this.y1=random(height*0.1,height*0.8);//stop point
	this.speed=15;
	this.theta=0;//angle
	this.amp=0.5;
	this.xmove=random(1,5);
	this.size=random(10,100);
	this.img=random(img);
	this.alpha=random(125,255)

	
	this.move = function() {
		this.y0-=this.speed;
		if(this.y0<=this.y1){
			this.speed=0;
		}
		//floating
		if(this.speed==0){
				this.theta+=0.1
		    this.y0=this.y0+sin(this.theta)*this.amp;
		}
		//touch
		
		let d=dist(this.x,this.y0,mouseX,mouseY);
		if(d<=this.size&&this.x<mouseX){
			this.x-=this.xmove;
		}
		if(d<=this.size&&this.x>mouseX){
			this.x+=this.xmove;
		}

	}
	this.mousemove = function(){
		
		//console.log(d)
		
		
	
	}
	this.show = function() {
		//tint(255,this.alpha)
		image(this.img,this.x,this.y0,this.size,this.size);
	
	}
	
}
function AstroidR(){
	this.x=random(width*0.7,width*0.95);
	this.y0=height*0.95;
	this.y1=random(height*0.1,height*0.8);//stop point
	this.speed=10;
	this.theta=0;//angle
	this.amp=0.5;
	this.xmove=random(1,5);
	this.size=random(10,150)*width/2000;
	this.img=random(img);
	this.alpha=random(125,255)

	
	this.move = function() {
		this.y0-=this.speed;
		if(this.y0<=this.y1){
			this.speed=0;
		}
		//floating
		if(this.speed==0){
				this.theta+=0.1
		    this.y0=this.y0+sin(this.theta)*this.amp;
		}
		//touch
		
		let d=dist(this.x,this.y0,mouseX,mouseY);
		if(d<=this.size&&this.x<mouseX){
			this.x-=this.xmove;
		}
		if(d<=this.size&&this.x>mouseX){
			this.x+=this.xmove;
		}

	}
	this.mousemove = function(){
		
		//console.log(d)
		
		
	
	}
	this.show = function() {
		//tint(255,this.alpha)
		image(this.img,this.x,this.y0,this.size,this.size);
	
	}
	
}



