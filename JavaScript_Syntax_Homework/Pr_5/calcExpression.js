function myFunction() {
            var firstInput = document.getElementById('expression').value;
            var numbers = firstInput.split(/[^0-9]/);
            var symbols = [];
            for (var j = 0; j < firstInput.length; j++) {
                if(firstInput[j]==='+' || firstInput[j]==='-' || firstInput[j]==='*' || firstInput[j]==='/'){
                    symbols.push(firstInput[j]);
                }
            };
            var result = parseInt(numbers[0]);
            for (var i = 0; i < symbols.length; i++) {
                var num =parseInt(numbers[i+1]);
                if (symbols[i] === '+') {
                    result = result + num;
                }
                else if (symbols[i] === '-') {
                    result = result - num;
                }
                else if (symbols[i] === '/') {
                    result = result/num;
                }else if (symbols[i] === '*') {
                    result = result*num;
                }
            };
            
                document.getElementById('output').innerHTML = result;

            }
    