    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import {getAuth, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup, sendPasswordResetEmail , getRedirectResult} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCXktaWWHVAap1xl2yDfzvokuq7h1RrJ9s",
      authDomain: "sqlify-auth.firebaseapp.com",
      projectId: "sqlify-auth",
      storageBucket: "sqlify-auth.appspot.com",
      messagingSenderId: "288226704981",
      appId: "1:288226704981:web:86c3a3eb8e1b2b06a81edc"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = new getAuth(app);
    const provider = new GoogleAuthProvider(app);

    const googleloginbutton = document.querySelector('.googleloginbutton');
    googleloginbutton.addEventListener('click', (e)=>{
      
      signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    alert(user.displayName);
    document.querySelector('.form_close').click();
    document.getElementById('loginlink').style.display='none';
    document.getElementById('signoutlink').style.display='block';
    localStorage.setItem('userLoggedIn', 'true');

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage);
    // ...
  });

    });

  const signoutlink = document.getElementById('signoutlink');
  signoutlink.addEventListener('click', (e)=>{
    const auth = getAuth(app);
    signOut(auth).then(() => {
      alert('Sign Out Success!!');
      document.getElementById('loginlink').style.display='block';
      document.getElementById('signoutlink').style.display='none';
      localStorage.removeItem('userLoggedIn');
  // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    alert(error);
  });
  });

  document.getElementById('handleForgetPass').addEventListener('click', ()=>{
    const auth = new getAuth(app);

    sendPasswordResetEmail(auth, 'askokc4321@gmail.com').then(() => {
      // Password reset email sent!
      // ..
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  });

  //On page Load
  function onPageLoadThen() {
  const auth = getAuth();
  const user = auth.currentUser;
  const userLoggedIn = localStorage.getItem('userLoggedIn');
  if (userLoggedIn === 'true') {
    document.getElementById('loginlink').style.display = 'none';
    document.getElementById('signoutlink').style.display = 'block';
  } else {
    document.getElementById('loginlink').style.display = 'block';
    document.getElementById('signoutlink').style.display = 'none';
  }
}

onPageLoadThen();