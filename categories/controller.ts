import repository from './repository';

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {
    if (!data.name) throw new Error("Property name is missing")
    const categorie = await repository.store(data);
    return categorie;
}
const getOne = async (id: string) => {
    const categorie = await repository.getOne(id);
    if(!categorie) throw new Error('Categorie not found')
    return categorie;
}
const deleteItem = async (id: string) => {
    const categorie = await repository.deleteItem(id);
    if(!categorie) throw new Error('Categorie not found')
    return categorie;
}

const update = async (id: string, data: any) => {
    const categorie = await repository.updateOne(id, data);
    if(!categorie) throw new Error('Categorie not found')
    return categorie;
 }

export default {
    list,
    store,
    getOne,
    delete: deleteItem,
    update,
}