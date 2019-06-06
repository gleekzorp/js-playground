// TODO
// I was working on this and never finished it and came back to it while ready to do the Tic-Tac-Toe project.
// This all works and needs to now get connected to the html for user input.
// Two more TODO's BELOW this code.
var contacts = [
    {
      'firstName': 'Akira',
      'lastName': 'Laine',
      'number': '0543236543',
      'likes': ['pizza', 'coding', 'brownie points']
    },
    {
      'firstName': 'daniel',
      'lastName': 'floyd',
      'number': '8015586247',
      'likes': ['video games', 'coding', 'korean food']
    },
    {
      'firstName': 'boreum',
      'lastName': 'floyd',
      'number': '8017120554',
      'likes': ['rice cake', 'candy crush', 'sleeping']
    }
]
  
  function contactLookUp(name, prop) {
    for (i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        return contacts[i][prop] || 'No such property'
      }
    }
    return 'No such contact'
  }
  
  data = contactLookUp('daniel', 'likes')
  
  console.log(data)




// TODO 
// Looks like I was trying to get this connected with line 8 and 13 in the html
// function checkContact() {
//     document.getElementById('favorite').innerHTML = 'hello'
// }




// TODO
// For some reason I had this twice... I kept it incase it was different.  Delete if need be.
// var contacts = [
//     {
//       'firstName': 'Akira',
//       'lastName': 'Laine',
//       'number': '0543236543',
//       'likes': ['pizza', 'coding', 'brownie points']
//     },
//     {
//       'firstName': 'daniel',
//       'lastName': 'floyd',
//       'number': '8015586247',
//       'likes': ['video games', 'coding', 'korean food']
//     },
//     {
//       'firstName': 'boreum',
//       'lastName': 'floyd',
//       'number': '8017120554',
//       'likes': ['rice cake', 'candy crush', 'sleeping']
//     }
//   ]
  
//   function contactLookUp(name, prop) {
//     for (i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         return contacts[i][prop] || 'No such property'
//       }
//     }
//     return 'No such contact'
//   }
  
//   data = contactLookUp('daniel', 'likes')
  
//   console.log(data)