//轮播图
        var mySwiper = new Swiper('.swiper-container',{
            effect : 'fade',
            loop:true,
            speed:300,
            autoplay : {
              delay:3000
              
         },
         
    })
   
//搜索框
$((function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 20){
            $('.search').animate({top:0},10)
        
        }else{
           
            $('.search').animate({top:-50},100)
    }
    
    })
})())
//商品分类 二级导航
$('.nav ul li').on("mouseenter",function(){
    function rand(){      
        $.ajax({
            url:'./list.json',
            dateType:'json',
           success:function(result){

             for(var i = 0 ;i<result.length;i++){
                var list = JSON.stringify(result[i].name)
                $('.two ul li').append('a').html(list)
             }

            }
        
        })
    }
    rand()
})
$('.nav ul .li1').on('mouseenter',function(){
    $('.two').css('display',"block")
})
$('.nav ul .li1').on('mouseleave',function(){
    $('.two').css('display',"none")
})

$('.off').click(function(){
    $('.guanggao').css('display','none')
});
//jsonp
var div = document.getElementsByClassName('header-wrap')[0];
var input = document.getElementsByClassName('text')[0];
var ul = document.getElementsByClassName('jp')[0]

var flag = true
console.log(input)
input.addEventListener('compositionstart',function(){
    flag = false;
})

input.addEventListener('compositionend',function(){
    flag = true;
})

input.oninput = function(){
    setTimeout(function(){
        if(flag){
            var keyword = input.value;
            ajax({
                dataType:'jsonp',
                url:'https://suggest.taobao.com/sug',
                data:{
                    code:"utf-8",
                    q:keyword,
                    _ksTS:"1563970517892_385",
                    k:1,
                    area:"c2c",
                    bucketid:10

                },
                success:function(data){
                    var result = data.result;//是一个数组
                    var str = "";
                    result.forEach(function(value){
                        str+="<li>"+value[0]+"</li>"
                    })
                    ul.innerHTML = str;
                }
            })

        }
    },0)
}
var cookie = document.cookie
var lg = document.getElementsByClassName('lg')[0]
var a = document.getElementsByClassName('cookie')[0];
var str = cookie.split('=');
console.log(str)
var un = str[0]
if(cookie != 0){
    a.innerHTML = '欢迎你'+ un;
    lg.style.display = "none"
}