const init = () => {
    document.querySelector('form').addEventListener('submit', handleEvent)  
}

const handleEvent = (e) => {
    e.preventDefault()
    let input = document.querySelector('#searchByID')
    // input.value) = (e.target.children[1].value) = e.target.searchById.value
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(json => {
        const title = document.querySelector("section h4")
        const summary = document.querySelector('section p')
        title.textContent = json.title
        summary.textContent = json.summary
    })
}

document.addEventListener('DOMContentLoaded', init);