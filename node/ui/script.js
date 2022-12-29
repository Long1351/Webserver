function addbutton() {
    let input = prompt("Was willst du zu deiner TodoList hinzufügen??");
    fetch('/addItem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({"input":input})
    })
}