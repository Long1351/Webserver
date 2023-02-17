async function addbutton() {
    let input = prompt("Was willst du zu deiner Einkaufsliste hinzufügen?");
    console.log(input);
    let response = await fetch('/additem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'input': input })
    });

    list = document.createElement("li");
    list.classList.add("listItem");
    list.innerHTML = response.body.toString();
    console.log(list);
    document.querySelector("#list").appendChild(list);
}

function start() {
    let response = fetch('/getitems', {
        method: 'GET'
    });
    
    let div = document.createElement("div");
    div.classList.add("item");
    console.log(response)
    div.innerHTML = "<input type=\"checkbox\" name=\"item\" id=\"item-1\">\n<label for=\"item-1\">" + response + "</label>"
    document.querySelector("#list").appendChild(div);
}
start();