const form = document.querySelector('form')

form.addEventListener('submit', async (event)=>{
    event.preventDefault()

    console.log('ok')

    const formData = new FormData(form)

    const response = await fetch('http://localhost:3000/upload-image', {
        method: 'POST',
        body: formData,
    })

    const data = response.json()

    console.log(data)
})