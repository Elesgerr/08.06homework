 function moons(){
    var datee = new Date();
    var hours = datee.getHours();
    var message;

    if (hours <= 12){
        message = "Sabahıvız Xeyir";
       
        document.body.style.backgroundImage = "url('photos/1a.jpg')";
    }
        
        

    else if (hours >= 12 && hours <= 18){
        message = "Gunortavız Xeyir";
        document.body.style.backgroundImage = "url('photos/1b.jpg')";

    }
        
    else if (hours >= 18 && hours <= 24){
        message = 'Axşamınız Xeyir';
        document.body.style.backgroundImage = "url('photos/1c.jpg')";

    }
        

    document.getElementById('moon').innerHTML =
        '<b>' + message + '</b>!';  
 }
 






  function hesablama (){
    var test1 = prompt("reqem daxil edin")
    var test2 = Math.PI
    var test3 =  test1 * test1 
    var test4 = test2 * test1 * test1
    alert("cevre: " + test4 + " kvadrat: " + test3)
}