//tentando criar um filtro na lista de contatos

const filterElement = document.querySelector('header input')
const contactsList = document.querySelectorAll('.person')

filterElement.addEventListener('input', filterCards)

function filterCards() {
  const filterValue = filterElement.value

  if (filterValue !== '') {
    for (const person of contactsList) {
      const title = person.querySelector('h3').textContent.toLocaleLowerCase()
      const filterText = filterValue.toLowerCase()

      if (!title.includes(filterText)) {
        person.classList.add('display-none')

        // Verifica se todas as pessoas da lista foram escondidas pelo filtro
        if (
            [... person.parentElement.querySelectorAll('.person')]
            .every((child) => child.classList.contains('display-none'))
            ) {
              // Se todas as pessoas da lista estão ocultas,
              // então oculta toda a lista incluindo a letra
              person.parentElement.parentElement.classList.add('display-none')
            }
      } else {
        person.classList.remove('display-none')
        person.parentElement.parentElement.classList.remove('display-none')
      }
    }
  } else {
    const hiddenCardsList = document.querySelectorAll(
      '.display-none'
    )

    for (const hiddenCard of hiddenCardsList) {
      hiddenCard.classList.remove('display-none')
    }
  }
}
