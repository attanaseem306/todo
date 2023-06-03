////////////geting and making value


function DeleteAll(){
    var ul = document.getElementById("ul");
    ul.innerHTML=""
   }

    function my() {
        var ul = document.getElementById("ul");
        var inputValue = document.getElementById("input");
        var li = document.createElement('li');
        var delBtn = document.createElement('button');
        var editBtn = document.createElement('button');
        var delText = document.createTextNode('DELETE');
        var editText = document.createTextNode('EDIT');
        var takeInput = document.createTextNode(inputValue.value);

        //////////////putting

        delBtn.appendChild(delText);
        editBtn.appendChild(editText);
        li.appendChild(takeInput);
        inputValue.value = ""
        li.appendChild(delBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
        delBtn.setAttribute("onclick", "empty(this)");
        editBtn.setAttribute("onclick", "edit(this)");
        
    }

    function empty(a) {
        a.parentNode.remove();
    }


    function edit(b){
        // var pro=prompt("enter new value",b.parentNode.firstChild.nodeValue)
        var inputValue = document.getElementById("input").value=b.parentNode.firstChild.nodeValue;


        //   b.parentNode.firstChild.nodeValue
    }