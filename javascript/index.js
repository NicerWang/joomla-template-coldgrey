document.addEventListener('DOMContentLoaded',function(){
    //FastClick
    FastClick.attach(document.body);
    //Get base Url
    var base = document.querySelector('#getFileUrl');
    var baseUrl = base.href;
    //Foundamental
    var header = document.querySelector('header');
    var textParts = document.querySelectorAll('#mainstream-l a,#mainstream-l td,#mainstream-l th,#mainstream-s a,#mainstream-s td,#mainstream-s th');
    var divs = document.querySelectorAll('.container>div>div');
    var container = document.querySelector('.container');
    header.addEventListener('selectstart', function(e){e.preventDefault();});
    document.body.style.minHeight = window.innerHeight + 'px';
    if(window.innerWidth <= 768){
    	for(var i = 0; i < divs.length; i++){
      	    divs[i].style.marginLeft = '0';
            divs[i].style.marginRight = '0';   
    	}
    }
    else{
        for(var i = 0; i < divs.length; i++){
      	    divs[i].style.marginLeft = '20px';
            divs[i].style.marginRight = '20px';   
    	}
    }
    //Setting
    var headRight = document.querySelector('.header-right');
    var settingBtn = document.querySelector('.setting-button');
    var settingMenu = document.querySelector('.setting-menu');
    var isSettingMenuAnimating = false;
    var isSettingMenuAppeared = false;
    settingMenu.style.right = -160 + 'px';
    //Archive
    var archiveBtn = document.querySelector('.archive-button');
    var archiveMenu = document.querySelector('.archive-menu');
    var isArchiveMenuAnimating = false;
    var isArchiveMenuAppeared = false;
    archiveMenu.style.display = 'none';
    //Style and Fontsize
    var nightBtn = document.querySelector('.night-button');
    var greenBtn = document.querySelector('.green-button');
    var sizeUpBtn = document.querySelector('.size-up-button');
    var sizeDownBtn = document.querySelector('.size-down-button');
    var backgroundColorState = 'day';
    var backgroundColorGreen = false;
    //Back To Top
    var backToTopButton = document.querySelector('#back-to-top-button');
    var isBackToTopButtonAppear = false;
    var isBackToTopButtonAnimating = false;
    //Header Change
    var css = document.querySelector('#Hcss');
    var headerCSSKind = 1;
    
    //Style and FontSize Function
    nightBtn.addEventListener('click', function(){
        if(backgroundColorState == 'day'){
            greenBtn.style.color = 'black';
            backgroundColorGreen = false;
            document.body.style.backgroundColor = '#3E4149';
            container.style.color = 'white';
            for (var i = 0; i < textParts.length; i++){
                textParts[i].style.color = 'white';
            }
            nightBtn.className = 'iconfont icon-sun night-button';
            backgroundColorState = 'night';
            for (var i = 0; i < divs.length; i++){
                divs[i].style.backgroundColor = '#2F3137';
            }
            localStorage.setItem('style', 'night');
        }
        else if(backgroundColorState == 'night'){
            greenBtn.style.color = 'black';
            backgroundColorGreen = false;
            document.body.style.backgroundColor = '#D3D6DB';
            container.style.color = 'black';
            for (var i = 0; i < textParts.length; i++){
                textParts[i].style.color = 'black';
            }
            nightBtn.className = 'iconfont icon-uniE901 night-button';
            backgroundColorState = 'day';
            for (var i = 0; i < divs.length; i++){
                divs[i].style.backgroundColor = '#E4E8ED';
            }
            localStorage.setItem('style', 'day');
        }
    });
    greenBtn.addEventListener('click', function(){
        if(backgroundColorState == 'night'){
            alert('护眼模式仅能在日间模式打开');
            return false;
        }
        if(backgroundColorGreen){
            greenBtn.style.color = 'black';
            backgroundColorGreen = false;
            document.body.style.backgroundColor = '#D3D6DB';
            for (var i = 0; i < divs.length; i++){
                divs[i].style.backgroundColor = '#E4E8ED';
            }
            localStorage.setItem('style', 'day');
        }
        else{
            greenBtn.style.color = 'green';
            backgroundColorGreen = true;
            document.body.style.backgroundColor = '#B3CDBB';
            for (var i = 0; i < divs.length; i++){
                divs[i].style.backgroundColor = '#99CDA9';
            }
            localStorage.setItem('style', 'green');
        }
    });
    sizeUpBtn.addEventListener('click', function(){
        if(parseFloat(document.documentElement.style.fontSize) >= 25){
            alert('字体已达到最大');
            return false;
        }
        document.documentElement.style.fontSize = parseFloat(document.documentElement.style.fontSize) + 1 + 'px';
        localStorage.setItem('fontSize', document.documentElement.style.fontSize);
    }); 
    sizeDownBtn.addEventListener('click', function(){
        if(parseFloat(document.documentElement.style.fontSize) <= 12){
            alert('字体已达到最小');
            return false;
        }
        document.documentElement.style.fontSize = parseFloat(document.documentElement.style.fontSize) - 1 +'px';
        localStorage.setItem('fontSize', document.documentElement.style.fontSize);
    });

    //Get Localstorage
    if(localStorage.getItem('fontSize')){
        document.documentElement.style.fontSize = localStorage.getItem('fontSize');
    }
    else{
        document.documentElement.style.fontSize = 16 + 'px';
    }
    if(localStorage.getItem('style')){
        if(localStorage.getItem('style') == 'green'){
            greenBtn.click();
        }
        if(localStorage.getItem('style') == 'night'){
            nightBtn.click();
        }
    }

    //Setting settingMenu Function
    settingBtn.addEventListener('click',function (){
        if(isSettingMenuAnimating){
            return false;
        }
        if(isSettingMenuAppeared){
            settingBtn.timer = setInterval(function () {
            var step = -20;
            settingMenu.style.right = parseInt(settingMenu.style.right) + step + 'px';
            if(parseInt(settingMenu.style.right) <= -160){
                clearInterval(settingBtn.timer);
                isSettingMenuAnimating = false;
                isSettingMenuAppeared = false;
            }
    }, 10);}
        else{
            isSettingMenuAnimating = true;
            settingBtn.timer = setInterval(function(){
            var step = 20;
            settingMenu.style.right = parseInt(settingMenu.style.right) + step + 'px';
            if(parseInt(settingMenu.style.right) >= (document.body.clientWidth - headRight.offsetLeft) ){
                clearInterval(settingBtn.timer);
                isSettingMenuAnimating = false;
                isSettingMenuAppeared = true;
            }
    }, 10);}});
    
    //Archive menu Module
    archiveBtn.addEventListener('mouseenter',function (){
        archiveMenu.style.left = archiveBtn.offsetLeft + 'px';
        if(isArchiveMenuAnimating||isArchiveMenuAppeared){
            return false;
        }
        isArchiveMenuAnimating = true;
        archiveMenu.style.display = 'block';
        archiveMenu.style.opacity = 0;
        var step = 1;
        archiveBtn.timer = setInterval(function(){
            archiveMenu.style.opacity = step * 0.1;
            step++;
            if(archiveMenu.style.opacity == 1){
                clearInterval(archiveBtn.timer);
                isArchiveMenuAnimating = false;
                isArchiveMenuAppeared = true;
            }
    }, 10);});
    archiveBtn.addEventListener('mouseleave',function (){
        if(isArchiveMenuAnimating){
            clearInterval(archiveBtn.timer);
            isArchiveMenuAnimating = false;
         }
        archiveMenu.style.display = 'none';
        isArchiveMenuAppeared = false;
    	});
    
    //Window Size Change Function
    window.addEventListener('resize', function(){
        document.body.style.minHeight = window.innerHeight + 'px';
        archiveMenu.style.left = archiveBtn.offsetLeft + 'px';
        if(isSettingMenuAppeared){
            settingMenu.style.right = "-160px";
            isSettingMenuAppeared = false;
        }
        if(window.innerWidth <= 768){
    		for(var i = 0; i < divs.length; i++){
                divs[i].style.marginLeft = '0';
                divs[i].style.marginRight = '0';   
            }
        }
        else{
            for(var i = 0; i < divs.length; i++){
      	        divs[i].style.marginLeft = '20px';
                divs[i].style.marginRight = '20px';   
    	    }
        } 
    });

    //Header CSS Change & Back To Top Function
    window.addEventListener('scroll', function(){
        if(window.pageYOffset <= 200){
          
            if(isBackToTopButtonAppear){
                isBackToTopButtonAppear = false;
                backToTopButton.style.display = 'none';
            }
            if(headerCSSKind == 2)
            {
                css.href = baseUrl +'/css/headerDefault.css';
                headerCSSKind = 1;
                if(isSettingMenuAppeared){
            			settingMenu.style.right = "-160px";
            			isSettingMenuAppeared = false;
        }
            }
            return false;
        }
        else{
            if(!isBackToTopButtonAppear){
                isBackToTopButtonAppear = true;
                backToTopButton.style.display = 'block';
            }
            if(headerCSSKind == 1){
            	css.href = baseUrl +'/css/headerChange.css';
            	headerCSSKind = 2;
              if(isSettingMenuAppeared){
            			settingMenu.style.right = "-160px";
            			isSettingMenuAppeared = false;
            }
    }}});
    backToTopButton.addEventListener('click',function(){
        if(isBackToTopButtonAnimating){
            return false;
        }
        isBackToTopButtonAnimating = true;
        backToTopButton.timer = setInterval(function(){
            var step = window.pageYOffset / 5;
            step = Math.ceil(step);
            window.scroll(0,pageYOffset - step);
            if(window.pageYOffset == 0){
                clearInterval(backToTopButton.timer);
                isBackToTopButtonAnimating = false;
            }
    }, 10);});
    document.addEventListener('mousewheel',function(e){
        if(isBackToTopButtonAnimating){
            e.preventDefault();
            clearInterval(backToTopButton.timer);
            isBackToTopButtonAnimating = false;
        }
    });
});
