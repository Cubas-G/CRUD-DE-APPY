import { AuthException } from "./exceptions";
import { UserLogin } from "./interfaces";

const validateLoginInput = (data: UserLogin) => {
    if (!data.username) throw new AuthException("Property username is missing");
    if (!data.password) throw new AuthException("Property password is missing");
}

const validateRegisterInput = (data: any) => {
    if (!data.name) throw new AuthException("Property name is missing");
    if (!data.username) throw new AuthException("Property username is missing");
    if (!data.password) throw new AuthException("Property password is missing");
}

export default {
    validateLoginInput,
    validateRegisterInput
}