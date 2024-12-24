export interface CollectionDto {
  id: number;
  title: string;
  type: string;
  src: string;
  subTitle: string;
  banner: string;
  chapter: string;
  createTime: string;
}

export interface CollectionChapterVo {
    sura: number;
    start: number;
    end: number;
    max: number;
    key: number;
}
export interface CollectionVo {
    id: number;
    title: string;
    src: string;
    subTitle: string;
    cover: string;
    chapter: CollectionChapterVo[];
}
