import repository from './repository';
import { Inventary } from './interface';

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {

    if (!data.name) throw new Error("Property name is missing")
    const product = await repository.store(data);
    return product;
}

const getOne = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Inventary not found");
    return model;
}

const deleteItem = async (id: string) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Inventary not found");
    return await repository.delete(id);
}
const update = async (id: string, data: Inventary ) => {
    const model = await repository.getOne(id);
    if (!model) throw new Error("Inventary not found");

    const modelUpdate = await repository.update(id, data);
    return modelUpdate;
}
export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update,
}