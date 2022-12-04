import template from './list-table.template';
import { AnyObject } from '../type';
import { listCategory } from '../type';
import { itemsList } from './list-data';

type tableData = {
    item: string;
    readState: string;
    date: string;
}

enum readState { // 나중에 읽음 여부 표시를 자동으로 되도록 바꾸자
    // -1 : 안읽음
    // 0 : 읽는중
    // 양의 정수 : 읽은 횟수
    noRead = -1,
    reading,
    read
}
// 지금은.. 딱히 필요없긴한데..
// 나중에 읽을때마다 체크하면 -> 그에 따라서 readState++를 하면 되니까 그때 사용하자!
// 기억이 잘 안난다면 코드는 '김민태 프론트앤드 아카데미 - 회원가입 폼 중 패스워드 StrongLevel 참고해

const readTag: [string, string, string] = [
    '안읽음',
    '읽는중',
    '읽음'
]

// enum으로 읽음여부 표시
// new Date().toLocaleDateString() // "2022. 12. 4."



export default class ListTable {
    template = template;
    container: HTMLElement;
    data = itemsList;
    category: listCategory;

    constructor(category: listCategory) {
        this.container = document.querySelector(`#${category} table > tbody`) as HTMLElement;
        this.category = category;
    }

    private makeReadTag = (count: number) => {
        if(count === -1 || count === 0) {
            return readTag[count + 1];
        } else if (count >= 1) {
            return readTag[2] + count;
        }
    }

    private makeListTable = () => {
        const itemsTableTrList: string[] = [];

        if (this.category === 'all') {
            for( let i = this.data.length - 1; i >= 0; i--) {
                itemsTableTrList.push(template({
                    item: this.data[i].item,
                    readState: this.makeReadTag(this.data[i].readState),
                    date: this.data[i].date,
                    readStateNoRead: this.data[i].readState === -1,
                    readStateReading: this.data[i].readState === 0,
                    readStateRead: this.data[i].readState >= 1,
                }))
            }
        } else {
            const items = this.data.filter( item => item.category === this.category )
            console.log(items);
            for( let i = items.length - 1; i >= 0; i--) {
                itemsTableTrList.push(template({
                    item: items[i].item,
                    readState: this.makeReadTag(items[i].readState),
                    date: items[i].date,
                    readStateNoRead: items[i].readState === -1,
                    readStateReading: items[i].readState === 0,
                    readStateRead: items[i].readState >= 1,
                }))
            }
        }
        
        return itemsTableTrList.join('');
    }

    public render = () => {
        this.container.innerHTML = this.makeListTable();
    }
}