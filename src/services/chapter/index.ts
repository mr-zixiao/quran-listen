import {ChapterDto, ChapterVo} from "@/services/chapter/type.ts";

const transform = (list: ChapterDto[]): ChapterVo[] => {
    return list.map(item => {
        return {
            chapterId: item.id,
            count: item.verses_count,
            bismillah: item.bismillah_pre,
            zh: {
                title: item.title,
                subTitle: item.subTitle
            },
            en: {
                title: item.name_simple,
                subTitle: `${item.revelation_place},A total of ${item.verses_count} sections`
            }
        }
    })
}
export const getChapters = () => {
    return new Promise<ChapterVo[]>(resolve => {
        fetch(`${import.meta.env.VITE_BASE_URL}app/chapters.json`)
            .then(res => res.json())
            .then((data: ChapterDto[]) => {
                resolve(transform(data))
            }).catch(() => {
            resolve([])
        })
    })
}