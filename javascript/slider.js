document.addEventListener('DOMContentLoaded',function(){
    //Get base Info
    var base = document.querySelector('#getFileUrl');
    var baseUrl = base.href;
    var statusNode = document.querySelector('#getSliderStatus');
    var status = statusNode.title;
    //Animation function
    function animation(obj, target,callback) {
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 3;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = parseInt(obj.style.left) + step + 'px';
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
                if(callback){callback();}
            }
        }, 18);}

    //Get Element
    var slider = document.querySelector('.slider');
    var sliderListImages = document.querySelector('#slider-list-img');
    var images = document.querySelectorAll('#slider-list-img li');
    var sliderListPoint = document.getElementById('slider-list-point');
    var btnLeft = document.getElementById('slider-left-button');
    var btnRight = document.getElementById('slider-right-button');

    //Smooth roll
    var firstImg = images[images.length-1].cloneNode(true);
    sliderListImages.insertBefore(firstImg,images[0]);
    var lastImg = images[0].cloneNode(true);
    sliderListImages.appendChild(lastImg);

    //Initialize
    var currentIndex = 0;
    var imgWidth = slider.clientWidth;
    var imgCount = images.length;
    sliderListImages.style.left = -imgWidth +'px';
    for (var i = 0; i < imgCount; i++){
        var newPoint = document.createElement('li');
        newPoint.setAttribute('data-index', i);
        sliderListPoint.appendChild(newPoint);
    }
    sliderListPoint.children[0].className='current';
    //Two sets of images
    if(status == 0){
    	if(document.body.clientWidth <= 1200 && document.body.clientWidth >= 980 || document.body.clientWidth <= 768){
        	images[0].style.backgroundImage = "url(" + baseUrl +"/images/Picture1_S.jpg)";
        	images[1].style.backgroundImage = "url(" + baseUrl +"/images/Picture2_S.jpg)";
        	images[2].style.backgroundImage = "url(" + baseUrl +"/images/Picture3_S.jpg)";
        	firstImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture3_S.jpg)";
        	lastImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture1_S.jpg)";
    	}
    	else{
        	images[0].style.backgroundImage = "url(" + baseUrl +"/images/Picture1.jpg)";
        	images[1].style.backgroundImage = "url(" + baseUrl +"/images/Picture2.jpg)";
        	images[2].style.backgroundImage = "url(" + baseUrl +"/images/Picture3.jpg)";
        	firstImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture3.jpg)";
        	lastImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture1.jpg)";
    	}
   	}
    window.addEventListener('resize', function(){
        imgWidth = slider.clientWidth;
        if(status == 0){
        	if(document.body.clientWidth <= 1200 && document.body.clientWidth >= 980 || document.body.clientWidth <= 768){
            	images[0].style.backgroundImage = "url(" + baseUrl +"/images/Picture1_S.jpg)";
            	images[1].style.backgroundImage = "url(" + baseUrl +"/images/Picture2_S.jpg)";
           		images[2].style.backgroundImage = "url(" + baseUrl +"/images/Picture3_S.jpg)";
            	firstImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture3_S.jpg)";
            	lastImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture1_S.jpg)";
        	}
        	else{
            	images[0].style.backgroundImage = "url(" + baseUrl +"/images/Picture1.jpg)";
            	images[1].style.backgroundImage = "url(" + baseUrl +"/images/Picture2.jpg)";
            	images[2].style.backgroundImage = "url(" + baseUrl +"/images/Picture3.jpg)";
            	firstImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture3.jpg)";
            	lastImg.style.backgroundImage = "url(" + baseUrl +"/images/Picture1.jpg)";
        	}
        }
        btnRight.click();
        
    });

    //Auto roll
   var timerInSlider = setInterval(function(){
        btnRight.click();
    },4000);
    slider.onmouseenter = function(){
        btnLeft.style.display = 'block';
        btnRight.style.display = 'block';
        clearInterval(timerInSlider);
    }
    slider.onmouseleave = function(){
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
        timerInSlider = setInterval(function(){
        btnRight.click();
    },4000)}

    //Button
    for (var i = 0; i < imgCount; i++){
        sliderListPoint.children[i].onclick = function(){
            if(sliderListImages.animating){
                return false;
            }
            sliderListImages.animating = true;
            currentIndex = this.getAttribute('data-index');
            animation(sliderListImages,-imgWidth * currentIndex - imgWidth,function(){
                sliderListImages.animating = false;
            });
            for(var i = 0; i < imgCount ; i++){
                sliderListPoint.children[i].className = '';
            }
            sliderListPoint.children[currentIndex].className = 'current';
            }
    }

    btnRight.addEventListener('click', function(){
        if(sliderListImages.animating){
            return false;
        }
        sliderListImages.animating = true;
        currentIndex++;
        if(currentIndex == imgCount){
            animation(sliderListImages, -imgWidth * (imgCount + 1), function(){
                sliderListImages.style.left = -imgWidth + 'px';
                sliderListImages.animating = false;
            });
            currentIndex = 0;
        }
        else{
            animation(sliderListImages,-imgWidth * (currentIndex + 1),function(){
                sliderListImages.animating = false;
            });
        }
        for(var i = 0; i < imgCount; i++){
            sliderListPoint.children[i].className = '';
        }
        sliderListPoint.children[currentIndex].className='current';
    });

    btnLeft.addEventListener('click', function(){
        if(sliderListImages.animating){
            return false;
        }
        sliderListImages.animating = true;
        currentIndex--;
        if(currentIndex == -1){
            animation(sliderListImages, 0, function(){
                sliderListImages.animating = false;
                sliderListImages.style.left = -imgWidth * imgCount +'px';
            });
            currentIndex = imgCount - 1;
        }
        else{
            animation(sliderListImages,-imgWidth * (currentIndex + 1),function(){
                sliderListImages.animating = false;
            });
        }
        for(var i = 0; i < imgCount; i++){
            sliderListPoint.children[i].className = '';
        }
        sliderListPoint.children[currentIndex].className = 'current';
    });

    //Slide
    var startX;
    var endX;
    var initialX;
    var startFlag;
    sliderListImages.ontouchstart = function(e){
      if(sliderListImages.animating){
        startFlag = false;
        return false;
        }
        startFlag = true;
        clearInterval(timerInSlider);
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
        startX = e.targetTouches[0].pageX;
        initialX = parseInt(sliderListImages.style.left);
    }
    sliderListImages.ontouchmove = function(e){
      if(!startFlag){
        return false;
        }
        sliderListImages.style.left = initialX + e.targetTouches[0].pageX - startX +'px';
        endX = e.targetTouches[0].pageX;
    }
    sliderListImages.ontouchend = function(e){
      if(!startFlag){
        return false;
        }
        btnLeft.style.display = 'none';
        btnRight.style.display = 'none';
        timerInSlider = setInterval(function(){
        btnRight.click();
    },4000)
        if((startX - endX) > imgWidth/4){
            btnRight.click();
        }
        else if((startX - endX) < -imgWidth/4){
            btnLeft.click();
        }
        else{
            sliderListImages.animating = true;
            animation(sliderListImages, -imgWidth * (currentIndex + 1), function(){
                sliderListImages.animating = false;
            });
        }
        startFlag = false;
    }
});