import {QariDto, QariVo} from "@/services/qari/type.ts";

const transform = (list: QariDto[]): QariVo[] => {
    return list.map(item => {
        return {
            qariId: item.id,
            name: item.Qari,
            path: item.path,
            avatar: item.avatar,
        }
    })
}
export const getQariList = () => {
    return new Promise<QariVo[]>(resolve => {
        fetch(`${import.meta.env.VITE_BASE_URL}qari/list`)
            .then(res => res.json())
            .then((res) => {
                const data:QariDto[] = res.data.data
                resolve(transform(data))
            }).catch(() => {
            resolve([])
        })
    })
}