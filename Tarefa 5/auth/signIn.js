import db from '../../libs/firebase/rtdb_conection.js'
import {
    getAuth, signInWithEmailAndPassword, signOut,
	// sendEmailVerification
} from 'firebase/auth';

//###AUTENTICAÇÃO####
const auth = getAuth();

const user = {
    email: 'gillgonzales@ifsul.edu.br',
    password: 'qwerty'
}

//###LOGIN ASYNC/AWAIT
try {
    console.log({ "token": auth.currentUser?.accessToken })
    
	await signInWithEmailAndPassword(
        auth, user.email, user.password)
	
	console.log({"token": auth.currentUser?.accessToken})

    console.log({ "uid": auth.currentUser.uid })

    await signOut(auth) //desconecta o user
    
	console.info('deconectado')
    console.log({ "token": auth.currentUser?.accessToken })
	
} catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log({errorCode, errorMessage})
}finally{
    process.exit(0)
}