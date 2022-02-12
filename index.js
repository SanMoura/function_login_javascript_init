const database = {
  users : [
    {
      user: `joao`,
      password: `123`
    },
    {
      user: `marlus`,
      password: `123`
    }
  ]
}


function login() {
  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;

    database.users.map((e) => {
      if ( user === e.user && password === e.password) {
        document.getElementById('returnLogin').innerHTML = `Login successfully`
        setInterval(() => {
          location.href = `./sistema.html`
        }, 1000)
  
      }else{
        document.getElementById('returnLogin').innerHTML = `Senha Incorreta`
      }
    });

}