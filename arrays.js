var chocolateBars = "snickers", "hundred grand", "kitkat", and "skittles"]

function addElementToBeginningOfArray(array,element) {
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  newarray = [element,...array]
}
