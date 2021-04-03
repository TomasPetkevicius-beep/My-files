
if (event.keyCode === 13) {
    document.getElementById("myBtn").click();
}        
        //this script replaces characters of the user input, to greet user grammatically correct in lithuanian
function greet() {
    var txt = document.getElementById("input").value;
    var chs = txt.split("");
    var gls = chs[chs.length - 2] + chs[chs.length - 1];                      
                            
    if (gls === "us"){
     chs.splice(-2, 1, "a");                        
     chs.splice(-1, 1, "u");
    }               
    else if (gls === "as") {
               chs.splice(-1, 1, "i");
    }            
    else if (gls === "is") {
               chs.pop();}                      
    else if (gls === "tė"|| gls === "lė" || gls === "nė") {chs.splice(-1, 1, "e")
    }            
              
    else {gls = gls}          
           
    var firt = chs[0];
    var first = firt.toUpperCase();
    chs.splice(0, 1, first);            
    var name = chs.join("");            
    document.write(name + ", Labas!");
    }