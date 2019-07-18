// alphabet ranges
function arrayAtoZ(whichCase) {
  let array = []
  if (whichCase == 'UPPERCASE') {
    for (i = 65; i <= 90 ; i++) {
      array.push(String.fromCharCode(i))
    }
  } else if (whichCase == 'lowercase') {
    for (i = 97; i <= 122 ; i++) {
      array.push(String.fromCharCode(i))
    }
  }
  return array
}

arrayAtoZ('lowercase')
// Use 'UPPERCASE' or 'lowercase'
// http://www.asciitable.com/


// number ranges
function range(start, end, step = start < end ? 1 : -1) {
  let array = []
  if (step > 0) {
    for (i = start; i <= end; i += step) {
      console.log(i)
      array.push(i)
    }
  } else {
    for (i = start; i >= end; i += step) {
      console.log(i)
      array.push(i)
    }
  }
  return array
}

// full range 1 to 100
// range(1, 100)

// full range 2 to 100 of even numbers
// range(2, 100, 2)

// full range 1 to 99 of odd numbers
// range(1, 99, 2)

// Step backwards from 5 to 1
// range(5, 1, -1)

// Many more options available