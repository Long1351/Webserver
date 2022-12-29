function addbutton() {
    let input = prompt("Was willst du zu deiner TodoList hinzufügen??");
    fetch('/addItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ 'input': input })
    })
}

fetch('/getitems', {
    method: 'GET',
}).then(
    function(res) {
        const div = document.createElement("div");
        div.classList.add("item");
        console.log(res.text())
        div.innerHTML = "<input type=\"checkbox\" name=\"item\" id=\"item-1\">\n<label for=\"item-1\">" + res.text() + "</label>"
        document.querySelector("#list").appendChild(div);
    }
)