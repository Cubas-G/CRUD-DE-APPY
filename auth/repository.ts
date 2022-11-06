import { ulid } from 'ulid';
import bcryp from 'bcrypt';
import { User } from './models';
import { User as IUser } from './interfaces';


const register = async (data: IUser) => {
    const id = ulid();
    const password = await bcryp.hash(data.password, 10);

    const user = new User({ id, name: data.name, username: data.username, password });

    await user.save();

    return user;
}

const findUserByUserName = async (username: string) => {
    const user = await User.findOne({ username });

    return user;
}


const findUserById = async (id: string) => {
    const user = await User.findOne({ id });

    return user;
}


const storeUserToken = async (username: string, token: string) => {

    const user = await findUserByUserName(username);

    if (user) {
        user.token = token;

        await user.save();
    }

    return user;
}

export default {
    register,
    findUserByUserName,
    storeUserToken,
    findUserById,
}