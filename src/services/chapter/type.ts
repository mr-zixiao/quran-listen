import type {AppLanguage} from "@/lang";

interface Translated_name {
    language_name: string;
    name: string;
}

export interface ChapterDto {
    id: number;
    revelation_place: string;
    revelation_order: number;
    bismillah_pre: boolean;
    name_simple: string;
    name_complex: string;
    name_arabic: string;
    verses_count: number;
    pages: number[];
    translated_name: Translated_name;
    title: string;
    subTitle: string;
}

interface ChapterLangVo {
    title: string;
    subTitle: string;
}

type ChapterWithLangApp = {
    [key in AppLanguage]: ChapterLangVo;
};

export interface ChapterVo extends ChapterWithLangApp {
    chapterId: number;
    count: number;
    bismillah: boolean;
}