import {createContext, FC, ReactNode, useContext, useState} from "react";
import langEn from './resources/en'
import langZh from './resources/zh'

export type AppLanguage = "en" | "zh";
export type LangKey = keyof typeof langEn;

interface ILangContext {
    lang: AppLanguage;
    t: (key: LangKey) => string;
    changeLanguage: () => void;
}

const localKey = 'quran:listen:lang';
const LangContext = createContext<ILangContext>({
    lang: 'en',
    t: (key: string) => key,
    changeLanguage: () => void 0
});
export const useTranslation = () => useContext(LangContext);
export const AppLangProvider: FC<{ children?: ReactNode | undefined }> = props => {
    const [lang, setLang] = useState<AppLanguage>(() => {
        const lang = localStorage.getItem(localKey);
        return lang ? lang as AppLanguage : 'en';
    });
    const changeLanguage = () => {
        const newLang = lang === 'en' ? 'zh' : 'en'
        setLang(newLang);
        localStorage.setItem(localKey, newLang);
    };
    const t = (key: LangKey) => {
        switch (lang) {
            case 'en':
                return langEn[key];
            case 'zh':
                return langZh[key];
            default:
                return langEn[key];
        }
    };
    return (
        <LangContext.Provider value={{
            lang,
            t,
            changeLanguage
        }}>
            {props.children}
        </LangContext.Provider>
    );
};
