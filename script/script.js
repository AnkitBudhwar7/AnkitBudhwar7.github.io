
document.getElementById("hoverButton").onmouseover = function () {
    document.getElementById("hoverButton").style.background = "grey";
};

document.getElementById("hoverButton").onmouseleave = function () {
    document.getElementById("hoverButton").style.background = "yellow";
};

let count = 0;
document.getElementById("buttonCounter").onclick = function () {
    count++;
    const countertext = document.getElementById("counter");
    countertext.innerHTML = "You clicked this " + count + " times.";

    if (count % 2 === 0) {
        countertext.style.color = "green";
    } else {
        countertext.style.color = "blue";
    }
};

for (let i = 1; i <= 5; i++) {
    const msg = document.createElement("p");
    msg.textContent = "This message number is " + i + ".";
    document.getElementById("container").appendChild(msg);
}