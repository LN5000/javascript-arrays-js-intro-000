function addElementToBeginningOfArray(array,element) {
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  newarray = [element,...array]
}
