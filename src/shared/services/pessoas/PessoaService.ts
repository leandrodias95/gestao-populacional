import { Environment } from "../../environment";
import { Api } from "../api/axios-config";

interface IListagemPessoa{
    id: number; 
    nomeCompleto: string;
    email: string; 
    cidedadeId: string;
}

interface IDetalhePessoa{
    id: number; 
    nomeCompleto: string;
    email: string; 
    cidedadeId: string;
}


type TPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
}


const getAll = async (page = 0, filter =''): Promise<TPessoasComTotalCount | Error> => {
    try{
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        const {data, headers} = await Api.get('');

        if(data){
            return{
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            };
        }
        return new Error('Error ao listar os registros')
    } catch(error){
        console.error(error);
        return new Error( (error as {message: string}).message || 'Error ao listar os registros');
    }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try{
        const {data} = await Api.get(`/pessoas/${id}`);

        if(data){
            return data;
        }
        return new Error('Error ao consultar o registro')
    } catch(error){
        console.error(error);
        return new Error( (error as {message: string}).message || 'Error ao consultar o registro');
    }

};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {

    try{
        const {data} = await Api.post<IDetalhePessoa>('/pessoas', dados);

        if(data){
            return data.id;
        }
        return new Error('Error ao criar o registro')
    } catch(error){
        console.error(error);
        return new Error( (error as {message: string}).message || 'Error ao criar o registro');
    }
};

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try{
        await Api.put<IDetalhePessoa>(`/pessoas/${id}`, dados);
    } catch(error){
        console.error(error);
        return new Error( (error as {message: string}).message || 'Error ao atualizar o registro');
    }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try{
        await Api.delete<IDetalhePessoa>(`/pessoas/${id}`);
    } catch(error){
        console.error(error);
        return new Error( (error as {message: string}).message || 'Error ao apagar o registro');
    }
};


export const PessoaService = {
getAll, 
getById,
create,
updateById,
deleteById,

};