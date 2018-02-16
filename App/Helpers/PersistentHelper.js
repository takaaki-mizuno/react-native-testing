import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import * as config from "../../config"

export const PersistentHelper = {

    storage : null,

    getStorage: () => {
        if( !this.storage ) {
            this.storage = new Storage({
                // maximum capacity, default 1000
                size: config.storage.size || 1000,

                // Use AsyncStorage for RN, or window.localStorage for web.
                // If not set, data would be lost after reload.
                storageBackend: AsyncStorage,

                // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
                // can be null, which means never expire.
                defaultExpires: null,

                // cache data in the memory. default is true.
                enableCache: true,

                // if data was not found in storage or expired,
                // the corresponding sync method will be invoked and return
                // the latest data.
                sync: {
                    // we'll talk about the details later.
                }
            });
        }

        return this.storage;
    },

    get: async (key, defaultValue) => {
        let storage = this.getStorage();
        return await storage.load({
            key: key,
        }).catch(() => defaultValue);
    },

    put: (key, value, expires = null ) => {
        let storage = this.getStorage();
        storage.save({
            key: key,
            data: value,
            expires: expires
        });
    },

    remove: (key) => {
        let storage = this.getStorage();
        storage.remove({
            key: key
        });
    }

};
