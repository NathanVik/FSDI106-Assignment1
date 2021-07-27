function createTodo() {
    //get the text
    let todo = $(`#addTodo`).val();
    //console log the text
    console.log(todo);

    let syntax = `
                    <div class="todo-item">
                            <label>${todo}</label>
                            <button class="todoDone">Done</button>
                            <button class="todoDelete">Delete</button>
                    </div>
    
    `;
    $(`#pendingList`).append(syntax);
    
    $(`#addTodo`).val(``).focus();
    
}



function init() {
    console.log("app.js is loaded");

    $(`#btn-addTodo`).click(createTodo);
    $(`#addTodo`).keypress(function(evt){
        if(evt.keyCode == 13) {
            createTodo();
        }
    }
    )


}

window.onload = init;

