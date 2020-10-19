count = 0;
function myFunc() {
    count = count + 1;
    if (count === 1000) {
        count = 0;
        alert('Now The Value is 1000, restored back to 0')
    }
    document.querySelector("#count").innerHTML = count;
}