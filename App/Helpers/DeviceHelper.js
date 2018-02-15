import * as DeviceInfo from 'react-native-device-info';
import { Dimensions } from "react-native";

export const DeviceHelper = {
    getUniqueID: () => {
        return DeviceInfo.getUniqueID();
    },

    getWindowHeight: () => {
        return Dimensions.get('window').height;
    },

    getWindowWidth: () => {
        return Dimensions.get('window').width;
    },

};
