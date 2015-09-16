function createParagraph(id, text) {
    var paragraph = document.createElement("p");
    var node = document.createTextNode(text);
    paragraph.appendChild(node);
    document.getElementById(id).appendChild(paragraph);
}

function createDiv(id, className) {
    var elem = document.createElement("div");
    elem.setAttribute("class", className);
    document.getElementById(id).appendChild(elem);
}
function createLink(id, text, url) {
    var newlink = document.createElement("a");
    newlink.setAttribute('href', url);
    document.getElementById(id).appendChild(newlink);
}

createParagraph('wrapper', 'Soft Uni');
createDiv('wrapper', 'section');
createLink('book', 'C# basics book', 'http://www.introprogramming.info/');
