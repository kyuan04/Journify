import { app } from "../../index.js"
import { useForm, SubmitHandler } from 'react-hook-form';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
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
    <div className="flex flex-col">
        <h1>Login</h1>
        <div>
            <form onSubmit={handleSubmit(userLogin)}>
                <label>
                    <div>Email</div>
                    <input {...register("email", { required: true })}/>
                    {errors.email && "Email is required"}
                </label>
                <label>
                    <div>Username</div>
                    <input {...register("username", { required: true })} />
                    {errors.username && "Username is required"}
                </label>
                <label>
                    <div>Password</div>
                    <input {...register("password", { required: true })} />
                    {errors.password && "Password is required"}
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
        <button onClick={googleLogin}>Continue with Google</button>
    </div>
  );
}