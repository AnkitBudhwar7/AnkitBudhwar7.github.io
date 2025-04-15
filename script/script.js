// Function to show an alert message
function showMessage() {
    alert('Welcome to our family');
}

// Hover effect when mouse is over the button
document.getElementById('hoverbutton').addEventListener('mouseover', function () {
    document.getElementById('hoverbutton').style.background =     'grey';
});

// Revert the button background when mouse leaves
document.getElementById('hoverbutton').addEventListener('mouseleave', function () {
    document.getElementById('hoverbutton').style.background = 'red';
})

let count = 0;
document.getElementById('buttoncounter').onclick = function() {
     count = count + 1;
     document.getElementById('counter').innerHTML = 'you clicked this '+ count+ 'times';
     if
    }



