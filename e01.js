const bubbletri = Array => {
    let swap, i, p, end, taille = Array.length;
    do {
      swap = false;
      for (let i = 0; i < Array.length; i++) {
          for (p = 0, end = taille -i; p < end; p++) {
        if (Array[p] > Array[p + 1]) {
          let tmp = Array[p];
          Array[p] = Array[p + 1];
          Array[p + 1] = tmp;
          swap = true;}
        }
      }
    } while (swap);
    return Array;
  };
  console.log(bubbletri([1, 0, 7, 12, 567, 8, 90]));
