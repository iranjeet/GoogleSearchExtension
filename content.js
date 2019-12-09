var titel = document.title;
var metas = document.getElementsByTagName("META");
var meta_description = metas["description"];

if(titel.toString().includes("videos")){
	//Redirect
	window.location.href = "https://www.google.com/";

}
if(meta_description){
	var content = meta_description.content;
	if(content.toString().includes("videos")){
		//Redierect
		window.location.href = "https://www.google.com/";
	}
}
