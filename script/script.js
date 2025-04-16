document.getElementById("alertMe").onclick=function () {
    alert ("Welcome to our restaurant");
};

document.getElementById("hoverbutton").onmouseover= function () {
    document.getElementById("hoverbutton").style.background= "grey";
};

document.getElementById("hoverbutton").onmouseleave=function () { 
    document.getElementById("hoverbutton").style.background= "yellow";
};

let count= 0;
document.getElementById("buttoncounter").onclick=function() { 
    count= count + 1 ;
    const countertext = document.getElementById("counter")
    countertext.innerHTML= "You clicked this"+ count+ "times;"

    if (count %2==0) {
        countertext.style.color="green"
    } else {
        countertext.style.color="blue"
    }
};

for (let i=1; i <=5; i++) {
    document.getElementById("contaner").append("This message number is "+1+".");
}

