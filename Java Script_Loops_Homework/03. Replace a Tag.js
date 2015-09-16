function solve(input) {
    var inputAsStr= String(input);
    console.log(inputAsStr);
    function replaceATag(str) {
        var result =str.replace("<a", "[URL");
        result=result.replace("</a>", "[/URL]");
        console.log(result);
    }
    
    replaceATag(inputAsStr);
    
}
console.log(solve('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'));