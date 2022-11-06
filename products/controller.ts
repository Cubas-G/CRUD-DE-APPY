
import repository from './repository';

const list = async () => {
    return await repository.list();
}

const store = async (data: any) => {
    if (!data.name) throw new Error("Property name is missing")
    const product = await repository.store(data);
    return product;
}

const getOne = async (id: string) => {
    const product = await repository.getOne(id);
    if (!product) throw new Error("Product not found");

    return product;
}

export default {
    list,
    store,
    getOne
}