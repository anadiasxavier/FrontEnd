// axios faz as requisições Http(s),
// ou seja posso consultar em backend


import axios from 'axios';

//a junção dessas 3 bibliotecas faz a validação
// do formuario, eles saõ tipo uma venda casada,
// um funcina baseado no outro

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import estilos from './Login.module.css'

const schemaLogin = z.object({
    username: z.string()
        .min(1, 'Informe o seu usuário')
        .max(255, 'Informe no maximo 30 caracteress'),

    password : z.string()
        .min (1, 'Informe ao menos uma caractere')
        .max(15, 'informe no maximo de 15 caracteres')

});

export function Login(){
    //Registratodas as informações que sao dadas pelo usuário
    //e tenta resolver de acordo com o schema
    const {
        register,
        handleSumit,
        formState: {errors}
    }=useForm(
        {resolver: zodResolver(schemaLogin)}
    );
    async function ObterDados(data) {
        console.log(`Dados ${data}`)

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login/',{
                username: data.username,
                password:data.password
            });
            const {access, refresh, user} = response.data;

            localStorage.set('access_token', access)
            localStorage.setItem('refresh_toke', refresh)
            localStorage.setItem('tipo', user.tipo)
            localStorage.setItem('username', username)

            console.log("Login efetuado com sucesso")
        }catch(error){
            console.error('Deu Ruim ', error);
            alert("Dados inválidos")
        }
    }
     return(

        <div className={estilos.conteiner}>
            <form onSubmit={handleSumit(ObterDados)}
                className={estilos.LoginForm}>

                <h2 className={estilos.titulo}>Login</h2>

                <label className={estilos.label}>Usuário:</label>
                <input className={estilos.inputField}
                    {...register('username')}
                    placeholder='ana.xavier'
                />
                {/* Aqui se caso tenha algum erro, irá exibir um texto, o erro */}
                {errors.username &&<p className={estilos.error}>{errors.username.message}</p>}

                <label className={estilos.label}>Senha:</label>
                <input className={estilos.inputField}
                    {...register('password')}
                    placeholder='Senha'
                    type="password"
                />
                 {errors.password &&<p className={estilos.error}>{errors.password.message}</p>}

                <button type='submit' className={estilos.submitButton}>Entrar</button>
            </form>
        </div>
     )
}