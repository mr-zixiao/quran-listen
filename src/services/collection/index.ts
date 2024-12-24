import {CollectionChapterVo, CollectionDto, CollectionVo} from "@/services/collection/type.ts";

const transform = (list: CollectionDto[]): CollectionVo[] => {
    return list.map(item => {
        return {
            id: item.id,
            title: item.title,
            src: item.banner,
            subTitle: item.subTitle,
            cover: item.banner,
            chapter: JSON.parse(item.chapter || '[]') as CollectionChapterVo[]
        }
    })
}
export const getCollectionList = () => {
    return new Promise<CollectionVo[]>(resolve => {
        fetch(`${import.meta.env.VITE_BASE_URL}collect/list`)
            .then(res => res.json())
            .then((res) => {
                const data: CollectionDto[] = res.data.data
                resolve(transform(data))
            }).catch(() => {
            resolve([])
        })
    })
}