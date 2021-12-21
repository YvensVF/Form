(() => {
  const header = document.querySelectorAll('[data-aba]')

  changeHeader = () => {
    header.forEach(headers => headers.classList.remove('ativa'))
  }

  otherChangeHeader = (headers) => {
    headers.classList.add('ativa')
  }

  removeContent = () => {
    const content = document.querySelectorAll('[data-conteudo]')

    content.forEach(contents => contents.classList.add('hide'))
  }

  activeContent = (value) => {
    const content = document.querySelector(`[data-conteudo = "${value}"]`)

    content.classList.remove('hide')
  }

  header.forEach(headers => headers.addEventListener('click', () => {
    const value = headers.dataset.aba

    changeHeader()
    removeContent()
    otherChangeHeader(headers)
    activeContent(value)
  }))

})()