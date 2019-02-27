num=6
var colors=generateRandomColors(num)
pick=pickColor()
var squares=document.querySelectorAll(".square")
var color=document.querySelector("#color")
var disp=document.querySelector("#disp")
var jumbotron=document.querySelector("#header")
var reset=document.querySelector("#new")
var easy=document.querySelector("#easy")
var hard=document.querySelector("#hard")
color.textContent=pick
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var click=this.style.background
		if(click===pick){
			disp.textContent="CORRECT!"
			change(click)
			jumbotron.style.background=click
			reset.textContent="PLAY AGAIN?"
		}
		else{
			this.style.background="#232323"
			disp.textContent="Try Again"
		}

	})
		}
		function change(col){
			for(var i=0;i<squares.length;i++)
			{
				squares[i].style.background=col
			}
		}
		function pickColor(){
			var random=Math.floor(Math.random()*colors.length)
			return colors[random]
		}

function generateRandomColors(n){
	var arr=[] 
	for(var i=0;i<n;i++)
	{
		
		arr.push(randomColor())
	}
	return arr
}
function randomColor(){
	var r=Math.floor(Math.random()*256)
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)
	return "rgb("+r+", "+g+", "+b+")"
}
reset.addEventListener("click",function(){
	colors=generateRandomColors(num);
	pick=pickColor()
    color.textContent=pick
    jumbotron.style.background="steelblue"
	for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	reset.textContent="NEW COLORS"
	disp.textContent=""
}
    
})
easy.addEventListener("click",function(){
	this.classList.add("level")
	hard.classList.remove("level")
	num=3
	colors=generateRandomColors(num)
	pick=pickColor()
    color.textContent=pick
    for(var i =0;i<squares.length;i++){
    	if(colors[i]){
    		squares[i].style.background=colors[i];
    	}
    	else
    	squares[i].style.display="none";   
    }
    jumbotron.style.background="steelblue"
    reset.textContent="NEW COLORS"
})
hard.addEventListener("click",function(){
	this.classList.add("level")
	easy.classList.remove("level")
	colors=generateRandomColors(6)
	pick=pickColor()
    color.textContent=pick
    for(var i =0;i<squares.length;i++){
    	squares[i].style.background=colors[i];
        squares[i].style.display="block"; 
    }
    jumbotron.style.background="steelblue"
    reset.textContent="NEW COLORS"
})