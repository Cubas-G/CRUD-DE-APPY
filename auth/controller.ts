import bcryp from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import { AuthException } from './exceptions';
import { User, UserLogin } from './interfaces';
import repository from './repository';
import validations from './validations';


const register = async (data: User) => {
    validations.validateRegisterInput(data);
    return await repository.register(data);
}

const login = async (data: UserLogin) => {
    validations.validateLoginInput(data);
    const user = await repository.findUserByUserName(data.username);

    if (!user) throw new AuthException('Invalid credentials');

    const passwordIsValid = await bcryp.compare(data.password, String(user.password));

    if (!passwordIsValid) throw new AuthException('Invalid credentials');

    const token = generateToken(user);
    await repository.storeUserToken(data.username, token);

    user.token = token;

    return user;
}

const generateToken = (user: any) => {
    return jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 6465412
    });
}

export default {
    register,
    login
}