import { ulid } from 'ulid';
import { Category } from './models';
import { Categories as ICategorie } from './interface';


const list = async () => {
    return await Category.find();
}

const store = async (data: ICategorie) => {
    const id = ulid();

    const categorie = new Category({ name: data.name, description: data.description, id });

    await categorie.save();

    return categorie;
}
const getOne = async (id: string) => {
    return await Category.findOne({ where: { id } });
}


const updateOne= async (id: string, data: ICategorie) => {
    return await Category.update( { id } );
 }
 const deleteItem = async (id: string) => {
    return await Category.deleteOne({ where: { id } });
  }

export default {
    list,
    store,
    getOne,
    updateOne,
    deleteItem
}