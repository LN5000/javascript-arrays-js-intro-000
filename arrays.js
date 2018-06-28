var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  newarray = [element,...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  newarray = [...array,element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array,element) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
  newarray = array
  newarray.shift()
  return newarray
}
