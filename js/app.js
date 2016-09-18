$(document).ready(function(){
    var newArrivals = [
        "img/saree-1.jpg","img/saree-8.png","img/saree-6.png","img/saree-7.png"
    ];
    $('.menu').children().first().children().addClass('menu-item-active');
    $('.header-menu').children().first().children().addClass('header-menu-items-active');
    $('.dropdown-menu').children().first().children().addClass('dropdown-menu-items-active');
    
    $('.menu-item a').click(function(){
        $('.menu-item a').removeClass('menu-item-active');
        $(this).addClass('menu-item-active');
    });
    
    $('.header-menu-items a').click(function(){
        $('.header-menu-items a').removeClass('header-menu-items-active');
        $(this).addClass('header-menu-items-active');
    });
    
    $('.dropdown-menu-items a').click(function(){
        $('.dropdown-menu-items a').removeClass('dropdown-menu-items-active');
        $(this).addClass('dropdown-menu-items-active');
    });
    
     $('#menu-btn').click(function(){
        $('.dropdown-menu').slideToggle(400);
    });
    
    $('.dropdown-menu-items a').click(function(){
        $('.dropdown-menu').slideUp(400);
    });
    
    for(var i=0; i< newArrivals.length; i++){
        var newArrivalItem = document.createElement("div");
        newArrivalItem.className = "new-arrivals-item";
        
        var newSareeImg = document.createElement("div");
        newSareeImg.className = "new-saree-img";
        
        var sareeDetails = document.createElement("div");
        sareeDetails.className = "saree-details";
        
        var sareeType = document.createElement("p");
        sareeType.innerHTML = "Type of Saree";
        
         var sareePrice = document.createElement("p");
        sareePrice.innerHTML = "Price";
        
        sareeDetails.appendChild(sareeType);
        sareeDetails.appendChild(sareePrice);
        
        newSareeImg.style.backgroundImage = "url("+ newArrivals[i] +")";
        newArrivalItem.appendChild(newSareeImg);

        
        $('.new-arrivals').append(newArrivalItem);
    }

});
    
$(document).ready(function(){
    var screenHeight = $(window).height();
$(".sidebar-bg img").css("height",screenHeight+"px" );
});
$(window).on('resize', function(){  
    screenHeight = $(window).height();        

$(".sidebar-bg img").css("height",screenHeight+"px" );
});