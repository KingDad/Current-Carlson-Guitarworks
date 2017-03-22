function gallery(){
//Variable declarations
	var dark = document.getElementById('filter');
	var imgs = document.getElementsByClassName('img');
	var galleryImgs = document.getElementsByClassName('gallery-img');
	var previous = document.getElementById('previous');
	var next = document.getElementById('next');
	var index = null;
//The lightbox begins
//Not necessarily optimized but wanted to get a working version up first
	for (i = 0, len = imgs.length; i < len; i++){
		imgs[i].onclick = function(){
			index = this.getAttribute('data-index');
			dark.style.zIndex = '2';
			dark.style.opacity = '0.85';
			galleryImgs[index].style.display = 'block';
			previous.style.display = 'block';
			next.style.display = 'block';
		}
	}
	dark.onclick = function(){
		dark.style.zIndex = '-1';
		dark.style.opacity = '0.4';
		galleryImgs[index].style.display = 'none';
		previous.style.display = 'none';
		next.style.display = 'none';
	}
//Creating a carousel effect with buttons
	previous.onclick = function(){
		galleryImgs[index].style.display = 'none';
		index--;
		if(index < 0){
			index = 4;
		}
		galleryImgs[index].style.display = 'block';
	}
	next.onclick = function(){
		galleryImgs[index].style.display = 'none';
		index++;
		if(index > 4){
			index = 0;
		}
		galleryImgs[index].style.display = 'block';
	}
	return "Radical";
}
gallery();