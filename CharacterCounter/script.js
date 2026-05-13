function updateCount() {
    var text = document.getElementById("text").value;
    var count = text.length;
    document.getElementById("count").innerText = count;
}

document.getElementById("text").addEventListener("input", updateCount);
updateCount();