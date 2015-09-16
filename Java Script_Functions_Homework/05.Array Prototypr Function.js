function removeItem(value) {

    Array.prototype.removedValue = function() {
        for (i = 0; i < this.length; i++) {
            if (this[i] === value) {
                var index = this.indexOf(value);
                this.splice(index, 1);
            };
        }
    }
    var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
    arr.removedValue();
    console.log(arr);
    // var arr = ['hi', 'bye', 'hello' ];
    // arr.removedValue();
    // console.log(arr);
}
console.log(removeItem(1));
// console.log(removeItem('bye'));
