function lastIndexOf(someArray, num) {
    for(var i = someArray.length; i > -1; i--) {
      if (someArray[i] === num) {
        return i;
      }
    }
    return -1;
}