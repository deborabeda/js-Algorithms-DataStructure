export function mergeSort(array){
  if(array.length > 1) {
    const len = array.length
    const middle = Math.floor(len/2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle, len))

    array = merge(left, right)
  }

  return array
}

function merge(left, right) {
  let topLeft = 0
  let topRight = 0

  const result = []

  while(topLeft < left.length || topRight < right.length) {

    if(topRight >= right.length || left[topLeft] <= right[topRight]) {
      result.push(left[topLeft])
      topLeft++
    } else {
      result.push(right[topRight])
      topRight++
    }
  }

  return result
}
