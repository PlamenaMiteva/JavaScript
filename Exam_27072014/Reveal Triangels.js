 function solve(input) {
     var result = [];
     for (var i = 0; i < input.length; i++) {
         var str = input[i];
         var upCol = i + 1;
         var downCol = i - 1;
         if (downCol >= 0) {

             var down = input[downCol];
         }
         if (upCol < input.length) {
             var upper = input[upCol];
         }
         var arr = [];
         for (var j = 0; j < str.length; j++) {
             if (upCol < input.length && j - 1 >= 0 && j + 1 < upper.length && str.charAt(j) === upper.charAt(j) && str.charAt(j) === upper.charAt(j + 1) && str.charAt(j) === upper.charAt(j - 1)) {
                 arr.push('*');
                 continue;
             }
             if (downCol >= 0 && j + 2 < str.length && str.charAt(j) === str.charAt(j + 1) && str.charAt(j) === str.charAt(j + 2) && str.charAt(j) === down.charAt(j + 1)) {
                 arr.push('*');
                 continue;
             }
             if (j - 1 >= 0 && j + 1 < str.length && downCol >= 0 && str.charAt(j) === str.charAt(j + 1) && str.charAt(j) === str.charAt(j - 1) && str.charAt(j) === down.charAt(j)) {
                 arr.push('*');
                 continue;
             }
             if (j - 2 >= 0 && downCol >= 0 && str.charAt(j) === str.charAt(j - 1) && str.charAt(j) === str.charAt(j - 2) && str.charAt(j) === down.charAt(j - 1)) {
                 arr.push('*');
                 continue;
             } else {
                 arr.push(str.charAt(j));
             }
         }
         result.push(arr);
     }
     result.forEach(function(entry) {
         var temp = entry.join("");
         console.log(temp.toString());
     })
 }
 console.log(solve(['abcdexgh', 'bbbdxxxh', 'abcxxxxx']));
 console.log(solve(['aa', 'aaa', 'aaaa', 'aaaaa']));
 console.log(solve(['ax', 'xxx', 'b', 'bbb', 'bbbb']));
 console.log(solve(['dffdsgyefg', 'ffffeyeee', 'jbfffays', 'dagfffdsss', 'dfdfa', 'dadaaadddf', 'sdaaaaa', 'daaaaaaasf']));
