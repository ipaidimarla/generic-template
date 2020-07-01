$(document).ready(function(){
    $.ajax({
        url: "/images/",
        success: function(data){
           $(data).find("a:contains(.jpeg)").each(function(){
              // will loop through 
              let images = $(this).attr("href");
            images = images.substring(1);
              const div = document.createElement('div');
              div.classList.add('col-lg-3');
              div.classList.add('col-md-4')
              div.classList.add('col-xs-6')
              div.classList.add('thumb');
              const anchor = document.createElement('a');
              anchor.setAttribute('href', images);
              anchor.classList.add('fancybox');
              anchor.setAttribute('rel', 'ligthbox');
              const image = document.createElement('img');
              image.setAttribute('src', images);
              image.classList.add('zoom')
              image.classList.add('img-fluid');
              image.setAttribute('alt', 'image not found');
              anchor.appendChild(image);
              div.appendChild(anchor);
              document.querySelector('#img-row').appendChild(div);
      
           });
        }
      });
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
          
          $(this).addClass('transition');
      }, function(){
          
          $(this).removeClass('transition');
      });
  });
      