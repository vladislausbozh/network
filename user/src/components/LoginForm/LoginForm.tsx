import { useState } from 'react';
import '../LoginForm/style.css'
import { loginApi } from '../../api/AuthApi';


const LoginForm = () => {

   const [email, setEmail] = useState<string>('');
   const [password, setPassword] = useState<string>('')

   

   return(
      <div className='login-form'>
         <h2>Форма входа</h2>
         <input 
            className='' 
            type="text" 
            name="" 
            id=""
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
         />
         <input 
            type="password" 
            name="" 
            id=""
            placeholder="Пароль"
            onChange={(e)=>setPassword(e.target.value)}
         />

         <button >Войти</button>
         <button onClick = { () => loginApi(email,password)}>Зарегистрироваться</button>
      </div>
   )
}

export default LoginForm;