$(document).ready(function(){
    $(window).on("load",function(){

        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"}]};
        window.onscroll = function(){
            if(scrollside()){
                console.log("scrollside");
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container1"));
                    var content1 = $("<div>").addClass("content1").appendTo(box);
                    //console.log("/images/fishtank/"+$(value).attr("src"));
                    $("<img>").attr("src","/images/fishtank/"+$(value).attr("src")).appendTo(content1);
                });
                imgLocation();
            }
        };
    });
});


function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    
    console.log("lastboxHeight:" + lastboxHeight);
    console.log("documentHeight:" + documentHeight);
    console.log("scrollHeight:" + scrollHeight);         
    
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($("#container1").width()/boxWidth);
    console.log("num:" + num);   
    var boxArr=[];
    box.each(function(index,value){
        //console.log(index+"--"+value);
        var boxHeight = box.eq(index).height();
        if(index<num){
            boxArr[index]= boxHeight;
            console.log(boxHeight);
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);
            console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight,boxArr);
            console.log(minboxIndex);
            console.log(value);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}