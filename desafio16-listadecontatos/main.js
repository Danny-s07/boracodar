//tentando criar um filtro na lista de contatos

const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards')

filterElement.addEventListener('input', filterCards)

function filterCards() {
  const filterValue = filterElement.value

  if (filterValue !== '') {
    for (let card of cards) {
      const title = card.querySelector('h3').textContent.toLocaleLowerCase()
      const filterText = filterValue.toLowerCase()

      !title.includes(filterText)
        ? card.parentElement.classList.add('display-none')
        : card.parentElement.classList.remove('display-none')
    }
  } else {
    const hiddenCardsList = document.querySelectorAll(
      '.list-wrapper.display-none'
    )

    for (let hiddenCard of hiddenCardsList) {
      hiddenCard.classList.remove('display-none')
    }
  }
}
