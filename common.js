



let body = document.getElementsByTagName('BODY')[0];
let darkmode = document.getElementById('darkmode');
let pages =  document.getElementById("pages");
let welcomto = document.getElementById("welcomto");
let learn = document.getElementById("learn");
let brand = document.getElementById("brand");
let link = document.getElementById("link");
let dropdown = document.getElementById("dropdown");
const pagesli = document.getElementsByClassName("pages-li");


darkmode.addEventListener("lick" ,function() {
	if ( body.style.background == "black")
	 {

		 body.style.background = "white"
		  pages.style.color="black";
		  welcomto.style.color="black";
		  learn.style.color="black";
		  brand.style.color="#8711f5";
		  link.style.color="#8711f5";
		  dropdown.style.backgroundImage = "url('https://img.icons8.com/?size=1x&id=nNmzHccs3Hku&format=gif')";
	} 



	else {

		 body.style.background = "black"
		 pages.style.color="white";
		 welcomto.style.color="white";
		 learn.style.color="white";
		 brand.style.color="#be7cfc";
		 link.style.color='#be7cfc';
		 dropdown.style.backgroundImage = "url('https://icons8.com/icon/gn7BG2TZ2vtF/down-button')";


	}
 
  
} );



document.getElementById("straight-lines").onclick = function(){
	window.location.href = "https://straightlines11th.blogspot.com/2022/06/margin-top0h2-colorbluebox-shadow6px.html";
};








function menu(){


	if (pages.style.height == "300px") {
		pages.style.height = "0px";
		
		

	}
	else{
		
		
		pages.style.height = "300px";
		
		
		
	}


};


