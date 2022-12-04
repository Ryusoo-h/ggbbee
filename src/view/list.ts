import template from './list.template';
import ListTable from './list-table';
import { AnyObject } from '../type';
import { listData } from '../type';

export default class List {
    template = template;
    container: HTMLElement;
    data: listData;
    tables = [];

    constructor(container: string, data: listData) {
        this.container = document.querySelector(container) as HTMLElement;
        this.data = data;
    }

    private createTable = () => {
        const linkList = new ListTable(this.data.listCategory);
        linkList.render();
    }

    public render = () => {
        const divfrag = document.createElement('div');
        divfrag.innerHTML = this.template(this.data);

        this.container.appendChild(divfrag.firstElementChild as HTMLElement);
        this.createTable();
    }
}