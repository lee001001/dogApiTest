const pic = document.querySelector('#pic')

axios.get('https://dog.ceo/api/breeds/image/random')
  .then(function (res) {
    console.log(res)
    pic.innerHTML = `
  <img src='${res.data.message}'>`
  })
  .catch(function (error) {
    console.log(error)
  })
