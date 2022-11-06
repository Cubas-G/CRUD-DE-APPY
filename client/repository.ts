import {Client} from './models'
import { ulid } from 'ulid';
import { Client as IClients } from './interface';

const list = async () => {
    return await Client.find();
}

const clientes = async (data: IClients) => {
    const id = ulid();

    const client = new Client({ name: data.name, email: data.email, addres: data.addres, id });

    await client.save();

    return client;
}

const getOne =async (id :string) => {
    return await Client.findOne({ id });
}
const deleteOne =async (id: string) => {
    return await Client.deleteOne({ id });
}
const update = async (id: string, data: IClients) => {
    const model = await Client.findOneAndUpdate({ id }, data, {new: true})
    return model;
}
export default {
    list,
    clientes,
    getOne,
    deleteOne,
    update,
}
