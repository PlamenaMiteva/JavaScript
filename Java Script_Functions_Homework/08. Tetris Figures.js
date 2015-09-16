 function solve(input) {

     var numberI = 0;
     var numberL = 0;
     var numberJ = 0;
     var numberO = 0;
     var numberZ = 0;
     var numberS = 0;
     var numberT = 0;
     for (var i = 0; i < input.length; i++) {
         if (i + 3 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];
             var third = input[i + 2];
             var fourth = input[i + 3];
             for (var j = 0; j < first.length; j++) {
                 if (first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j) && first.charAt(j) === third.charAt(j) && first.charAt(j) === fourth.charAt(j)) {
                     numberI++;
                 }
             }
         }
     }
     
     for (var i = 0; i < input.length; i++) {
         if (i + 2 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];
             var third = input[i + 2];             
             for (var j = 0; j < first.length; j++) {
                 if (j+1<first.length&& first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j) && first.charAt(j) === third.charAt(j) && first.charAt(j) === third.charAt(j+1)) {
                     numberL++;
                 }
             }
         }
     }
     
     for (var i = 0; i < input.length; i++) {
         if (i + 2 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];
             var third = input[i + 2];             
             for (var j = 1; j < first.length; j++) {
                 if (first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j) && first.charAt(j) === third.charAt(j) && first.charAt(j) === third.charAt(j-1)) {
                     numberJ++;
                                     }
             }
         }
     }
     
     for (var i = 0; i < input.length; i++) {
         if (i + 1 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];                       
             for (var j = 0; j < first.length-1; j++) {
                 if (first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j) && first.charAt(j) === first.charAt(j+1) && first.charAt(j) === sec.charAt(j+1)) {
                     numberO++;
                                     }
             }
         }
     }
     
     for (var i = 0; i < input.length; i++) {
         if (i + 1 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];                       
             for (var j = 0; j < first.length-2; j++) {
                 if (first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j+1) && first.charAt(j) === first.charAt(j+1) && first.charAt(j) === sec.charAt(j+2)) {
                     numberZ++;
                                     }
             }
         }
     }
     
     for (var i = 0; i < input.length; i++) {
         if (i + 1 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];                       
             for (var j = 2; j < first.length; j++) {
                 if (first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j-1) && first.charAt(j) === first.charAt(j-1) && first.charAt(j) === sec.charAt(j-2)) {
                     numberS++;
                                     }
             }
         }
     }
     
     for (var i = 0; i < input.length; i++) {
         if (i + 1 >= input.length) {
             break;
         } else {
             var first = input[i];
             var sec = input[i + 1];                       
             for (var j = 0; j < first.length-2; j++) {
                 if (first.charAt(j) ==='o'&&first.charAt(j) === sec.charAt(j+1) && first.charAt(j) === first.charAt(j+1) && first.charAt(j) === first.charAt(j+2)) {
                     numberT++;
                                     }
             }
         }
     }
     
     var result = "{\"I\":" + numberI+ ",\"L\":" + numberL +",\"J\":"+numberJ+",\"O\":"+numberO+",\"Z\":"+numberZ+",\"S\":"+numberS+",\"T\":"+numberT+"}";
     console.log(result);
 }
 console.log(solve(['--o--o-', '--oo-oo', 'ooo-oo-', '-ooooo-', '---oo--']));
 console.log(solve(['-oo', 'ooo', 'ooo']));
