function addbutton() {
    let input = prompt("Was willst du zu deiner Einkaufsliste hinzufügen?");
    console.log(input);
    fetch('/addItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'input': input }),
        
    }).then((res) => {
            let list = document.createElement("li");
            list.classList.add("listItem");
            list.innerHTML = res.body.toString();
            document.querySelector("#list").appendChild(list);
        }
    )
}

/*fetch('/getitems', {
    method: 'GET',
}).then(
    function(res) {
        let div = document.createElement("div");
        div.classList.add("item");
        console.log(res.text())
        div.innerHTML = "<input type=\"checkbox\" name=\"item\" id=\"item-1\">\n<label for=\"item-1\">" + res.text() + "</label>"
        document.querySelector("#list").appendChild(div);
    }
)
*/