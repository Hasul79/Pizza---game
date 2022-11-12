alert("welcome to my restaurant \n CHOOSE YOUR PIZZA")
function f(){
            document.getElementById("cut1").style.visibility="visible";
            document.getElementById("cut2").style.visibility="visible";
            document.getElementById("four").style.display="none";
            document.getElementById("eight").style.display="none";
            document.getElementById("txt").innerHTML="Your Pizza is ready!!!"
           }
        function e(){
            document.getElementById("cut1").style.visibility="visible";
            document.getElementById("cut2").style.visibility="visible";
            document.getElementById("cut3").style.visibility="visible";
            document.getElementById("cut4").style.visibility="visible";
            document.getElementById("four").style.display="none";
            document.getElementById("eight").style.display="none";
            document.getElementById("txt").innerHTML="Your Pizza is ready!!!"
          

        }
       function chngesm(){
            document.getElementById("base").style.transform="scale(1.1)";
            document.getElementById("yes").style.display="block";
            document.getElementById("no").style.display="block";
            document.getElementById("sm").style.display="none";
            document.getElementById("med").style.display="none";
            document.getElementById("lg").style.display="none";
            document.getElementById("txt").innerHTML="Do you want sauce?";
        }
        function chngemed(){
            document.getElementById("base").style.transform="scale(1.3)";
            document.getElementById("yes").style.display="block";
            document.getElementById("no").style.display="block";
            document.getElementById("sm").style.display="none";
            document.getElementById("med").style.display="none";
            document.getElementById("lg").style.display="none";
            document.getElementById("txt").innerHTML="Do you want sauce?";
        }
        function chngelg(){
            document.getElementById("base").style.transform="scale(1.8)";
            document.getElementById("yes").style.display="block";
            document.getElementById("no").style.display="block";
            document.getElementById("sm").style.display="none";
            document.getElementById("med").style.display="none";
            document.getElementById("lg").style.display="none";
            document.getElementById("txt").innerHTML="Do you want sauce?";
        }
        function yes(){
            document.getElementById("s1").style.display="block";
            document.getElementById("s2").style.display="block";
            document.getElementById("no").style.display="none";
            document.getElementById("yes").style.display="none";
            document.getElementById("txt").innerHTML="Choose the sauce:";
            
        }
        function tom(){
            document.getElementById("t").style.backgroundColor="red"; 
            document.getElementById("t").style.visibility="visible";
            document.getElementById("s1").style.display="none";
            document.getElementById("s2").style.display="none";
            
            no();
        }
        function mus(){
            document.getElementById("t").style.backgroundColor="white"; 
            document.getElementById("t").style.visibility="visible";
            document.getElementById("s1").style.display="none";
            document.getElementById("s2").style.display="none";
            
            no();
        }
        function no(){
            document.getElementById("y1").style.display="block";
            document.getElementById("n1").style.display="block";
            document.getElementById("no").style.display="none";
            document.getElementById("yes").style.display="none";
            document.getElementById("txt").innerHTML="Do you want cheese?";
            
        }
        function cheese(){
            document.getElementById("che").style.visibility="visible";
            document.getElementById("y1").style.display="none";
            document.getElementById("n1").style.display="none";
            document.getElementById("txt").innerHTML="Select toppings";
            document.getElementById("topp").style.display="block";
            }
        function nocheese(){
            document.getElementById("y1").style.display="none";
            document.getElementById("n1").style.display="none";
            document.getElementById("txt").innerHTML="Select toppings:";
            document.getElementById("topp").style.display="block";
        }
        function addtop(){
            document.getElementById("txt").innerHTML="Cut Pizza in how many slices:";
            document.getElementById("topp").style.display="none";
            document.getElementById("four").style.display="block";
            document.getElementById("eight").style.display="block";
            if(document.getElementById("pepperoni").checked){
                document.getElementById("pp1").style.visibility="visible";
                document.getElementById("pp2").style.visibility="visible";
                document.getElementById("pp3").style.visibility="visible";
                document.getElementById("pp4").style.visibility="visible";
                document.getElementById("pp5").style.visibility="visible";
            }
            if(document.getElementById("olives").checked){
                document.getElementById("o1").style.visibility="visible";
                document.getElementById("o2").style.visibility="visible";
                document.getElementById("o3").style.visibility="visible";
                document.getElementById("o4").style.visibility="visible";
                document.getElementById("o5").style.visibility="visible";
                document.getElementById("o6").style.visibility="visible";
            }
            if(document.getElementById("pepper").checked){
                document.getElementById("p1").style.visibility="visible";
                document.getElementById("p2").style.visibility="visible";
                document.getElementById("p3").style.visibility="visible";
                document.getElementById("p4").style.visibility="visible";
                document.getElementById("p5").style.visibility="visible";
                document.getElementById("p6").style.visibility="visible";
                document.getElementById("p7").style.visibility="visible";
                document.getElementById("p8").style.visibility="visible";

            }
            if(document.getElementById("mushroom").checked){
                document.getElementById("m1").style.visibility="visible";
                document.getElementById("m2").style.visibility="visible";
                document.getElementById("m3").style.visibility="visible";
                document.getElementById("m4").style.visibility="visible";
                document.getElementById("m5").style.visibility="visible";

            }


        }