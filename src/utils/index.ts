export const makeZero = (id:number|string) => {
    id = String(id)
    if (id.length === 1) {
        id = '00' + id;
        return id;
    }
    if (id.length === 2) {
        id = '0' + id;
        return id;
    }
    return id;
};
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));