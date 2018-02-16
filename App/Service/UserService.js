import { PersistentHelper } from '../Helpers';


export const UserService = {

    getUser: () => {
        return PersistentHelper.get('user');
    }


};
