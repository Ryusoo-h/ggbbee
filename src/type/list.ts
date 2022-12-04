
export type listCategory = 'all' | 'link' | 'word';

export type listData = {
    title: string;
    caption: string;
    listCategory: listCategory;
    current?: 'current';
}
