import { set, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState, useEffect } from 'react';


const schemaDisciplinas = z.object({
    nome: z.string()
        .min(1, 'Informe um nome')
        .max(100, 'Informe no maximo 100 caracteres'),
    curso: z.string()
        .min(1, 'Informe o curso')
        .max(255, 'Informe no maximo 255 carcteres'),
    carga_hora: z.number(
        {invalid_type_error: 'Informe uma carga horaria'})
        .int ("Digite um valor inteiro")
        .min(1,'Informe um valor')
        .max(260, 'IA cargahoraia maxima é de 260h'),
    descricao: z.string()
        .min(1, 'Informe a descrição')
        .max(255, 'Informe no maximo 255 caracteres'),
    professor: z.number(
        {invalid_type_error: 'Selecione um professor'})
        .min(1, 'selecione um professor')
})

export function DisciplinaCadastrar(){
    const [professores, setprofessores] = useState([]);
    const{
        register,
        handleSubmit,
        formstate: {errors},
    } = useForm ({
        resolver: zodResolver(schemaDisciplinas)
    });

    useEffect(()=>{
        async function buscarProfessores() {
            try{
                const token = localStorage.getItem('access_token')
                const response = await axios.get('https://127.0.0.1:8000/api/professores',{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                });
                setprofessores(response.data);
            }catch(error){
                console.error("erro", error);
            }
        }
        buscarProfessores();

    }, []);
    async function obterDadosFormulario(data){
        console.log("dados do formulario", data);
        try{
            const token = localStorage.getItem('access-token');
            const resonse = await axios.post(
                'http://1227.0.0.1:8000/api/disciplinas/',
            data,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            );
            alert("Disciplina cadastrada com sucesso");
            resizeTo();
        
        }catch(error){
            console.error("erro", error)
            alert ("Erro ao cadastrar")
        }
    }