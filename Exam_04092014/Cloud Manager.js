function solve(input) {
    var result = {};
    for (var i in input) {
        var tokens = input[i].split(' ');
        var file = tokens[0].trim();
        var extension = tokens[1].trim();
        var mb = tokens[2].trim();
        var memory = parseFloat(mb);

        if (!result[extension]) {
            result[extension] = {
                "files": [],
                "memory": 0
            }
        }

        if (result[extension]["files"].indexOf(file) == -1) {
            result[extension]["files"].push(file);
        }
        var temp = parseFloat(result[extension]["memory"] )+ memory;
        temp=temp.toFixed(2);
        result[extension]["memory"]=temp;
    }
    
    
    result = sortObjectProperties(result);
    for (var extension in result) {
         for (var file in result[extension]["files"]) {
             result[extension]["files"].sort();
        }
     }

     function sortObjectProperties(obj) {
         var keysSorted = Object.keys(obj).sort();
         var sortedObj = {};
         for (var i = 0; i < keysSorted.length; i++) {
             var key = keysSorted[i];
             sortedObj[key] = obj[key];
         }
         return sortedObj;
     }
    console.log(JSON.stringify(result));

}

console.log(solve(['sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB'
]));
