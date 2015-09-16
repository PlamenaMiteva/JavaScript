function solve(input) {
    var result="";
    var regex = /<p>[\s\S]*?(?=<\/p>)/g;
    while (match = regex.exec(input)) {
        var temp = match[0];
        var str = temp.substring(3);
        str= str.replace(/[^a-z0-9]/g, ' ');
        str.trim();        
        var output="";
        for (var i = 0; i < str.length; i++) {
            var code =str[i].charCodeAt(0);
            if (code>=97 && code<=109) {
                var newCode = code+13;
                output=output+String.fromCharCode(newCode);
            }else if (code>=110 && code<=122) {
                var newCode = code-13;
                output=output+String.fromCharCode(newCode);
            }else{
                output=output+str[i];
            }          
        }
        output= output.replace(/\s+/g, ' ');
        result=result+output;      
    }
    console.log(result);  
}

console.log(solve('<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%)))([]12</p></body></html>'));
