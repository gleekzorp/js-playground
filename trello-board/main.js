
// This works on my trello board.  It will select a board and add a new card with the name you selected
function newCard(title) {
  document.querySelectorAll('.js-list-content')[3].childNodes[2].click()
  setTimeout(() => {
    document.querySelectorAll('.list-card-composer-textarea')[0].value = title
    document.querySelectorAll('.js-add-card')[0].click()
  }, 500)
}

newCard()