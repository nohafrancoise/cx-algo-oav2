const insertiontri = (array) => {
    for (let i = 1; i < array.length; i++) {
      let w = i - 1
      let temp = array[i]
      while (w >= 0 , array[w] > temp) {
        array[w + 1] = array[w]
        w--
      }
      array[w+1] = temp
    }
    return array
}
console.log(insertiontri([4, 1, 90, 56, 3, 1, 45, 876]))
