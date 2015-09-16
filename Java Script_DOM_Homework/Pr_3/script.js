function createParagraph(id, text) {    	
        var paragraph = document.createElement("p");
        var node = document.createTextNode(text);
        paragraph.appendChild(node);
        document.getElementById(id).appendChild(paragraph);
    }
    createParagraph('wrapper', 'Some text');
