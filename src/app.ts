import template from "./app.template";
import { AnyObject } from "./type";
import { tabMenu } from "./util/api";
import List from "./view/list";

export default class App {
    template = template;
    container: HTMLElement;
    data: AnyObject;
    lists: AnyObject[];

    constructor(container: string, data: AnyObject = {}) {
        this.container = document.querySelector(container) as HTMLElement;
        this.data = data;
        this.lists = [];
    }

    private CreateLists = () => { // 목록 페이지
        const allList = new List ('#list', {
            title: '모두 볼래',
            caption: '전체 리스트',
            listCategory: 'all',
            current: 'current'
        })
        const linkList = new List ('#list', {
            title: '링크만 볼래',
            caption: '링크 리스트',
            listCategory: 'link',
        })
        const wordList = new List ('#list', {
            title: '단어만 볼래',
            caption: '단어 리스트',
            listCategory: 'word',
        })

        // 현재 코드는 임시로 출력해보기 위함입니다
        // 1. 리스트의 최근 10개씩 가져오기 구현 필요
        // 2. 리스트의 단어, 링크 중 최근 10개씩 가져오기 구현 필요
        // 3. 위 두가지 구현하면서 페이지네이션 구현 필요
        this.lists.push(allList);
        this.lists.push(linkList);
        this.lists.push(wordList);
    }

    private closeSplashScreen() {
        const splashScreen = document.getElementById('splash-screen') as HTMLElement;
        splashScreen.style.display = 'none';
    }
    
    public render = () => {
        this.container.innerHTML = this.template(this.data);

        setTimeout(this.closeSplashScreen, 2000);

        this.CreateLists();
        this.lists.forEach(list => {
            list.render();
        });
        tabMenu("list-tab");
    }
}