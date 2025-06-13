import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import  axios  from 'axios';
import { useState, useEffect } from 'react';
import estilos from './Cadastrar.module.css';

const schemaProfessores = z.object({
    username: z.string()
        .min(5,'Informe o seu username!')
        .max(100, 'Informe no maximo 100 caracteres'),
    first_name: z.string()
        .min(3, 'informe o seu nome!')
        .max(100, 'Informe no maximo 100 caracteres'),
    last_name: z.string()
        .min(3, 'informe o seu sobrenome nome!')
        .max(100, 'Informe no maximo 100 caracteres'),
    password:z.string()
        .min(4, 'Informe ao menos um caractere')
        .max(100, 'Informe até 100 caracteres'),
    ni: z.string()
        .min(2, 'O NI deve ter no mínimo 2 dígitos')
        .max(5, 'O NI deve ter no máximo 5 dígitos')
        .regex(/^\d+$/, 'O NI deve conter apenas números'),
    data_nascimento: z.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Data de nascimento inválida'),
    data_contratacao: z.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Data de contratação inválida'),
    telefone: z.string()
        .regex(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, 'Informe um telefone válido com DDD'),

});

export function ProfessoresCadastrar(){
    const [professores, setprofessores] = useState([]);
    const{
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm ({
        resolver: zodResolver(schemaProfessores)
    });

    useEffect(()=>{
        async function buscarProfessores() {
            try{
                const token = localStorage.getItem('access_token')
                const response = await axios.get('http://127.0.0.1:8000/api/usuario/', {
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                });
                const professoresFiltrados = response.data.filter(user => user.tipo === 'P');
                setprofessores(professoresFiltrados);
            }catch(error){
                console.error("erro", error);
            } 
        }
        buscarProfessores()
    },[])

    async function obterDadosFormulario(data) {
        console.log("dados do formulario", data);

        try{
            const token = localStorage.getItem('access_token');
            const response = await axios.post(
                'http://127.0.0.1:8000/api/usuario/',
                data,{
                    headers:{
                        'Authorization': `Bearer ${token}`,
                        'Content-type': 'application/json'
                    }
                }
            );
            console.log('Professor cadastrado com sucesso!', response.data);
            alert('Professor cadastrado com sucesso!');
            reset();
 
        } catch (error) {
            console.error('Erro ao cadastrar professor', error);
            alert("Erro ao cadastrar professor");
        }
    }
 
    return (
        <div className={estilos.conteiner}>
           
            <form className={estilos.loginForm} onSubmit={handleSubmit(obterDadosFormulario)}>
                    <h2 className={estilos.titulo}>Cadastro de Professores</h2>

                    <label className ={estilos.nomeCampo} >Nome do Professor</label>
                        <input                        
                            className={estilos.inputField}
                            {...register('first_name')}
                            placeholder="Ana"
                        />
                    {errors.first_name && <p className={estilos.error}>{errors.first_name.message}</p>}

                    <label className ={estilos.nomeCampo} >Sobrenome do Professor</label>
                        <input                        
                            className={estilos.inputField}
                            {...register('last_name')}
                            placeholder="Dias Xavier"
                        />
                    {errors.last_name && <p className={estilos.error}>{errors.last_name.message}</p>}

                    <label className ={estilos.nomeCampo} >Username do Professor</label>
                    <input                        
                        className={estilos.inputField}
                        {...register('username')}
                        placeholder="aninhadias"
                    />
                    {errors.username && <p className={estilos.error}>{errors.username.message}</p>}
               
                    <label className ={estilos.nomeCampo}>NI do Professor</label>
                        <input
                            className={estilos.inputField}
                            {...register('ni')}
                            placeholder="408"
                    />
                    {errors.ni && <p className={estilos.error}>{errors.ni.message}</p>}

                    <label className ={estilos.nomeCampo}>Data de nascimento</label>
                        <input
                            className={estilos.inputField}
                            {...register('data_nascimento')}
                            placeholder="1985-09-12"
                    />
                    {errors.data_nascimento && <p className={estilos.error}>{errors.data_nascimento.message}</p>}

                    <label className ={estilos.nomeCampo}>Data de contratação</label>
                        <input
                            className={estilos.inputField}
                            {...register('data_contratacao')}
                            placeholder="2021-02-01"
                    />
                    {errors.data_contratacao && <p className={estilos.error}>{errors.data_contratacao.message}</p>}

                    <label className ={estilos.nomeCampo}>Telefone</label>
                        <input
                            className={estilos.inputField}
                            {...register('telefone')}
                            placeholder="(11) 91234-5678"
                    />
                    {errors.telefone && <p className={estilos.error}>{errors.telefone.message}</p>}

                    <label className ={estilos.nomeCampo}>Senha do Professor</label>
                        <input
                            className={estilos.inputField}
                            {...register('password')}
                            placeholder="Digite a sua senha"
                        />
                    {errors.password && <p className={estilos.error}>{errors.password.message}</p>}
    
               
 
                <div className={estilos.icones}>
                    <button className={estilos.submitButton} type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}