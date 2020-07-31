document.addEventListener('DOMContentLoaded',function(){
    var atags = document.querySelectorAll('.blog-featured .items-row>.item>.item-title>a');
    var items = document.querySelectorAll('.blog-featured .items-row>.item');
    for(var i = 0; i < items.length; i++){
      items[i].setAttribute("data-url",atags[i].href);
      items[i].onclick = function(){
        window.location.assign(this.getAttribute('data-url'));
    }}
    var base = document.querySelector('#getBaseUrl');
    var baseUrl = base.href;
    var lis = document.querySelectorAll('.archive-menu>ul>li');
    var link = document.querySelector('#getArchiveLink').title;
    var links = link.split('!');
    for(var i = 0; i < lis.length; i++){
      lis[i].setAttribute("data-url",links[i]);
      lis[i].onclick = function(){
        window.location.assign(baseUrl + this.getAttribute('data-url'));
      }
   	}
    var board = document.querySelectorAll('.easy_top');
    for(var i = 0; i < board.length; i++)
    {
  		board[i].removeAttribute('data-id');
  		board[i].style.cursor = 'default';
    }
});
document.addEventListener('DOMContentLoaded',function(){
  var list = window.location.pathname.split('/');
  if(list[list.length-1] == 'add'){
    var btn = document.querySelectorAll('.btn-success');
    for(var i = 0; i < btn.length; i++ ){
      btn[i].innerHTML = '返回留言板';
    }
    var head = document.querySelectorAll('#easybook .componentheading');
    for(var i = 0; i < head.length; i++ ){
      head[i].innerHTML = '交流讨论';
    }
    var submit = document.querySelectorAll('#easysubmit input');
    for(var i = 0; i < submit.length; i++ ){
      submit[i].value = '提交';
    }
    var text = document.querySelectorAll('label[for="gbtext"]');
    for(var i = 0; i < text.length; i++ ){
      text[i].innerHTML = '留言内容：';
    }
    var name = document.querySelectorAll('label[for="gbname"]');
    for(var i = 0; i < name.length; i++ ){
      name[i].innerHTML = '昵称：';
    }
    var nameInput = document.querySelectorAll('#gbname');
    for(var i = 0; i < nameInput.length; i++ ){
      nameInput[i].value = "";
      nameInput[i].placeholder = "";
    }
    var textarea = document.querySelectorAll('#gbtext');
    for(var i = 0; i < textarea.length; i++ ){
      textarea[i].value = "";
      textarea[i].placeholder = "";
    }
  }
  else if(list[list.length-1] == 'communication'){
    var btn = document.querySelectorAll('.btn-success');
    for(var i = 0; i < btn.length; i++ ){
      btn[i].innerHTML = '留言';
    }
  }}
 	
);