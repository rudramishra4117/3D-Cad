import { Config, I18n } from "@dronecad/core";
import { type HTMLProps, option, select } from "@dronecad/element";

export const LanguageSelector = (props: HTMLProps<HTMLElement>) => {
    const languages: HTMLOptionElement[] = [];
    I18n.getLanguages().forEach((language) => {
        languages.push(
            option({
                selected: language.language === I18n.currentLanguage(),
                textContent: language.display,
            }),
        );
    });
    return select(
        {
            onchange: (e) => {
                const language = (e.target as HTMLSelectElement).selectedIndex;
                Config.instance.language = I18n.getLanguages()[language].language;
            },
            ...props,
        },
        ...languages,
    );
};
