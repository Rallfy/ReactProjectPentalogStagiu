
// const API_URL = 'http://localhost:3001';

// const login = async({username, password}) => {


//     console.log(username.trim(),password);

//     const response =await fetch(`${API_URL}/users`);

//     const users = await response.json();

//     const user = users.find((user) => user.password === password && user.userName === username);

//     if(user){
//         window.location.replace("/Home");
//     }

//     throw new Error('Bad credentials');

// }

// export default login;