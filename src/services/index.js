
const firebaseConfig = {
  apiKey: "AIzaSyA7hVcpjh3HMz0WipRpe2-gZJ1U1i38PU4",
  authDomain: "rede-social-893e0.firebaseapp.com",
  projectId: "rede-social-893e0",
  storageBucket: "rede-social-893e0.appspot.com",
  messagingSenderId: "332323313520",
  appId: "1:332323313520:web:1d4c3e0c797716de47a1b5",
  measurementId: "G-VWNQS3P4HW"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//login com Gmail

  export const loginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
      alert('login feito com sucesso');
      window.location.replace('/feed');
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
  };

  
// Login com email e senha
  export const authLogin = () => {
    let email = document.getElementById('email');
    let senha = document.getElementById('senha');
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
      .then(function (_result) {
     alert('Usuário Logado Com Sucesso!');
        window.location.replace('/feed');
      })
      .catch((error) => {
    switch (error.code) {   
      case 'auth/user-not-found':
        alert('Email não cadastrado.')
        break;
      case 'auth/wrong-password':
        alert('Senha inválida.')
        break;
      default:
        alert(`Erro desconhecido: ${error.code}: ${error.message}`);
        break;   
    };
  });
};

//registrar usuário
export const registerUser = () => {
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
 firebase.auth().createUserWithEmailAndPassword(email.value, senha.value)
.then(function (_result) {
    alert('Usuário Cadastrado Com Sucesso!');

  window.location.replace('/feed');

}).catch(function (error) {
  switch (error.code) {
  case 'auth/email-already-in-use':
    alert('O endereço de email já está cadastrado.');
    break;
  case 'auth/invalid-email':
    alert('Insira um endereço de email válido.');
    break;
  case 'auth/weak-password':
    alert('A senha deve ter no mínimo 6 caracteres.');
    break;
  default:
    alert(`Erro desconhecido: ${error.code}: ${error.message}`);
    break;
  }
});
};


 export const passwordForgot = () => {
  var emailAddress = ""
  if (user != null) {
    firebase.auth().SendPasswordResetEmailAsync(emailAddress).ContinueWith(task => {
      if (task.IsCanceled) {
        Debug.LogError("SendPasswordResetEmailAsync was canceled.");
        return;
      }
      if (task.IsFaulted) {
        Debug.LogError("SendPasswordResetEmailAsync encountered an error: " + task.Exception);
        return;
      }
  
      Debug.Log("Password reset email sent successfully.");
    });
  }
  };

  //
  
export const outLogin = () => {
  firebase.auth().signOut().then((_error) => {
  alert('Volte logo!');
  window.location.replace('/login');
  
    }) .catch(function (error) {
        alert(`Erro desconhecido: ${error.code}: ${error.message}`);
});
};


//export const userLike = () => {
//const database = firebase.database();

    //database.ref("like/amount").on('value', function(snapshot) {
   //    like(snapshot.val());
  //  });
//};

//function like(amount) {
 //  database.ref('like').set({ amount + 1});
 //};



// ler e gravar dados do usuario

//const database = firebase.database();

//function writeUserData(userId, name, email, imageUrl) {
//  firebase.database().ref('users/' + userId).set({
 //   username: name,
 //   email: email,
 //   profile_picture : imageUrl
//  });
//}


