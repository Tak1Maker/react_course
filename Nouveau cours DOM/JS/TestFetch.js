const getUsers = async function() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.ok) {
      let data = await response.json()
      console.log(data)
    } else {
      console.error('Retour du serveur : ', response.status)
    }
  } catch (e){
    console.log(e)
  }
}

const insertPost = async function (data) {
  let response = await fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: '',
    body: '',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
    body: JSON.stringify(data)
  })
  let responseData = await response.json()
  console.log(responseData)
}

insertPost({
  title: 'Salim',
  body: 'Réussi',
  userId: 39,
});
