function lightBox(){
//Variable declarations
	window.dark = document.getElementById('filter');
	window.imgs = document.getElementsByClassName('img');
	window.galleryImgs = document.getElementsByClassName('gallery-img');
	window.previous = document.getElementById('previous');
	window.next = document.getElementById('next');
	window.index = null;
//The lightbox begins
//Not necessarily optimized but wanted to get a working version up first
	for (i = 0, len = imgs.length; i < len; i++){
		imgs[i].onclick = function(){
			index = this.getAttribute('data-index');
			dark.style.display = 'block';
			galleryImgs[index].style.display = 'block';
			previous.style.display = 'block';
			next.style.display = 'block';
		}
	}
	dark.onclick = function(){
		dark.style.display = 'none';
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
lightBox();