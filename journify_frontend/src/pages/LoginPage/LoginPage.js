import { app } from "../../index.js"
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import SignIn from "../../components/SignIn/SignIn";
import Navbar from "../../components/Navbar/Navbar.js";

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

    const userLogin = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
        console.log("Signed in with email and password");
        console.log(data);
      } 

      function googleLogin() {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          //const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
        console.log("Signing in with Google");
      }

  return (
    <>
      <Navbar/>
      <SignIn/>
    </>
  )
}

export default LoginPage;