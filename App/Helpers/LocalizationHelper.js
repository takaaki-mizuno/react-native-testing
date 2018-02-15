import I18n from 'react-native-i18n';
import * as config from "../../config"

export const LocalizationHelper = {
    getLocale: () => {
        const locale =
            (I18n.locale && I18n.locale.toLowerCase()) || config.app.defaultLocale;
        const specialLocales = {
            'zh-hans': 'zh-cn',
            'zh-hans-cn': 'zh-cn',
            'zh-hans-sg': 'zh-cn',
            'zh-hans-hk': 'zh-hk',
            'zh-hant': 'zh-tw',
            'zh-hant-tw': 'zh-tw',
            'zh-hant-hk': 'zh-tw',
        };

        return specialLocales[locale] || locale;
    }
};
