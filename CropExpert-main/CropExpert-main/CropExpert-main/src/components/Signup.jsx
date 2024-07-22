import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  getAuth ,createUserWithEmailAndPassword  } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase"
// import {getFirestore} from 'firebase/firestore';
// import {getStorage} from 'firebase/storage';
// const firestore = getFirestore(app);
// const storage = getStorage(app);

const db= getDatabase(app)
const auth = getAuth(app);
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [soilType ,setSoilType] = useState('');
    const [location ,setLocation] = useState('');
    const [crop ,setCrop] = useState('');
    const [userName ,setUserName] = useState('');


    const putdata = () =>{
        console.log()
        set(ref(db, 'users/'+userName), {
          username: "jaggadaku",
          cropname:  crop,
          soiltype:  soilType,
          locationofland:location
        });
    }
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            putdata();
            console.log(user);
            // navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });


 
   
    }
 
  return (
    <main >        
        <section>
            <div>
                <div>                  
                    <h1> FocusApp </h1>                                                                            
                    <form>                                                                                            
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                        </div>
                        <div>
                            <label htmlFor="username">
                                UserName
                            </label>
                            <input
                                type="text"
                                label="username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)} 
                                required                                 
                                placeholder="username"              
                            />
                        </div>
                        <div>
                            <label htmlFor="soil">
                                soil type
                            </label>
                            <input
                                type="text"
                                label="Soil type"
                                value={soilType}
                                onChange={(e) => setSoilType(e.target.value)} 
                                required                                 
                                placeholder="soil type"              
                            />
                        </div>
                        <div>
                            <label htmlFor="location">
                                location
                            </label>
                            <input
                                type="text"
                                label="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)} 
                                required                                 
                                placeholder="location"              
                            />
                        </div>
                        <div>
                            <label htmlFor="crop">
                                crop
                            </label>
                            <input
                                type="text"
                                label="Crop"
                                value={crop}
                                onChange={(e) => setCrop(e.target.value)} 
                                required                                 
                                placeholder="crop"              
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}                        
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup
