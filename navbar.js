 // <!-- code to shrink navbar on scroll -->

 function myMove() {
          var i=0;
          var elem = document.getElementById("animate");   
          var pos = 0;
          setInterval(frame, 10);
          function frame() {
            if(pos>=120){
                pos=-7;


            }
            
            pos++;
            elem.style.background='linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(255,128,0,1) '+pos+'%, rgba(0,0,0,1) 100%)';
            
            
            
          }
           
        }
        
        
        $(window).scroll(function() {

          if ($(document).scrollTop() > 500) {
            $('nav').addClass('shrink');
            $('#animate').css({"margin-top":"65px"});
            $('.imgA1').css({"height":"80","width":"200"});
            $('.imgB1').css({"height":"60px","width":"60px","top":"18px","left":"129px"});
            $('#logo2').css({"margin-top":"8px"});
            $('.navbar-inverse .navbar-nav>li>a').css({"color":"#f2f2f2","margin-top":"3px"});
            
          } else {
            $('nav').removeClass('shrink');
            $('#animate').css({"margin-top":"75px"});
            $('.imgA1').css({"height":"100","width":"250","transition":"0.3s"});  
            $('.imgB1').css({"height":"75px","width":"75px","top":"23px","left":"160px","transition":"0.3s"});
            $('.navbar-inverse .navbar-nav>li>a').css({"color":"#cccccc","margin-top":"10px","transition":"0.3s"});
            
          }
        });

        // inertial scroll

window.onscroll = function(){

              var i=0;
              document.getElementById("b1").style.WebkitAnimation = "rotation "+ 1/((document.body.scrollTop || document.documentElement.scrollTop)/10000) + "s infinite linear";
              setTimeout(sop,400);
              
              /// while(i>document.body.scrollTop || document.documentElement.scrollTop)

              
          
        };
        function sop(){
          var i;
          for(i=1/((document.body.scrollTop || document.documentElement.scrollTop)/10000);i<1.5;i=i+0.009) 
              {
                document.getElementById("b1").style.WebkitAnimation = "rotation "+ i + "s infinite linear";
                
          }
          document.getElementById("b1").style.WebkitAnimation = "rotation 1.5s infinite linear";
          
        }

    function change(){
      // document.getElementById("meet").innerHTML = '';
      document.getElementById("meet").style.display = "none";
      document.querySelector(".names").style.display = "block";


    }

    function back(){
      
      document.querySelector(".names").style.display = "none";
      document.getElementById("meet").style.display = "block";
    }
    
    function toggle(){
      if(document.querySelector(".names").style.display == "none")
      {
        document.getElementById("meet").style.display = "none";
        document.querySelector(".names").style.display = "block";
      }
      else{
        document.querySelector(".names").style.display = "none";
        document.getElementById("meet").style.display = "block";
      }
    }
    

      