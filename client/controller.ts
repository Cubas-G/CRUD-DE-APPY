
import repository from "./repository";
import { Client } from "./interface";

const list =async () => {
    return await repository.list();
}
const clientes =async (data: any) => {
    if(!data.name) throw new Error ("Property name is missing")
    const clientes = await repository.clientes(data);
    return clientes;
}
const getOne =async (id:string) => {
    const client = await repository.getOne(id);
    if(!client) throw new Error("Client not found")
    return client;
    
}

const deleteOne = async (data: any) => {
    const client = await repository.getOne(data.id);
    if(!client) throw new Error("Client not found")
    return client;
}

const update = async (id: string, data: Client ) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Inventary not found");

    const modelUpdate = await repository.update(id, data);
    return modelUpdate;
}
export default{
    list,
    clientes,
    getOne,
    deleteOne,
    update
}

//https://www.youtube.com/watch?v=CjOMThGjiMo