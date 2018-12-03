$(function(){
    $(window).scroll(function(){
       var top=$(this).scrollTop();
       if(top!==0){
            $('nav.bg-dark').addClass('bg_dark');
       }else{
            $('nav.bg-dark').removeClass('bg_dark');
       }
    });

    // window.onscroll=function(){
    //     var div=document.querySelector('nav.bg-dark');
    //     var top=document.body.scrollTop ||document.documentElement.scrollTop;
    //     if(top!=0){
    //         div.className= div.className+='  bg_dark';
    //     }else{
    //         div.className= div.className.replace(' bg_dark','');
    //     }
    // }

    tabToggle();
})

function tabToggle() {
    var oTab = document.getElementsByClassName('categories')[0];
    var aLi = oTab.getElementsByTagName('span');
    var aBox = document.querySelectorAll('contentBox>div');
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function () {    
            for (var j = 0; j < aLi.length; j++) {
                aLi[j].className=aLi[j].className.replace('selected','');//去掉所有li的selected样式
                aBox[j].className = 'hide';//隐藏所有的tabDiv
            }
            aLi[this.index].className+=' selected';
            aBox[this.index].className = '';
        }
    }
}



