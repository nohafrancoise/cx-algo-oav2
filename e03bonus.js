function selectiontri(array) {

    for (var i = 0; i < array.length; i++) {

        let m = i;

     for (var j = i + 1; j < array.length; j++) {
         if (array[m] > array[j]) {
                m= j; 
            }
        }

        if (i !== m) {
            [array[ i ],array[m]]= [array[m],array[ i ]];
        }
    }
    return array
}

  console.log(selectiontri([1, 7, 12, 567, 8, 90, 10, 0]))
