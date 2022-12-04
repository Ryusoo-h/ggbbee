
    // tab메뉴 안내
    // 
    // 탭메뉴는 같은 [className]으로 메뉴와 내용이 연결되기 때문에 class이름이 겹치지 않게 해주세요
    // ex) list-tab 처럼 구분을 위해 -tab을 붙여주길 바랍니다

    // 꼭 role="tablist"안에 role="tab"이 있어야하며 하나의 role="tablist"안에
    // 다른 탭메뉴의 role="tablist"나 role="tab"이 있으면 안됩니다.
    // <div class="tabbutton-wrapper [className]" role="tablist">
    //     <button id="[id1]" class="tabbutton current" role="tab" aria-selected="true">☕ 모두 볼래</button>
    //     <button id="[id2]" class="tabbutton" role="tab">🍪 단어만</button>
    //     <button id="[id3]" class="tabbutton" role="tab">🍰 링크만</button>
    // </div>

    // role="tabpanel"은 [id]로 tab button과 연결되지만 같은 wrapper에 들어있어야합니다.
    // <section id="list" class="tab-wrapper">
    //     <div class="[className]" id="[id1]" role="tabpanel">
    //     </div>
    //     <div class="[className]" id="[id2]" role="tabpanel">
    //     </div>
    //     <div class="[className]" id="[id3]" role="tabpanel">
    //     </div>
    // </section>

export const tabMenu = (className: string) => {
        const tab:NodeListOf<Element> = document.querySelectorAll(`.${className}`);
        let tabButton:NodeListOf<Element>|undefined;
        let tabPanel:Element[] = [];
        tab.forEach( el => {
            if(el.getAttribute('role') === 'tablist') {
                tabButton = el.querySelectorAll('button');
            } else if(el.getAttribute('role') === 'tabpanel') {
                tabPanel.push(el);
            }
        })
        if (tabButton !== undefined) {
            tabButton.forEach(button => {
                button.addEventListener('click', function(e) {

                    // current 가진 녀석 없애기
                    if (tabButton !== undefined) {
                        tabButton.forEach(button => {
                            button.classList.remove('current');
                            for(let i = 0; i < tabPanel.length; i++) {
                                if (tabPanel[i].id === button.id) {
                                    tabPanel[i].classList.remove('current');
                                    break;
                                }
                            }
                        })
                    }

                    // 클릭된 녀석에게 current 주기
                    button.classList.toggle('current');
                    button.ariaSelected === "true" 
                        ? button.ariaSelected ="false" : button.ariaSelected ="true";
                    for(let i = 0; i < tabPanel.length; i++) {
                        if (tabPanel[i].id === button.id) {
                            tabPanel[i].classList.toggle('current');
                            break;
                        }
                    }
                    // 일치하는 tabPanel 보여주기
                })
            })
        }
        

    }
    
    // 1. class가 일치하는 DOM 가져오기 (여럿일 수 있음)
    // 2. 가져온 DOM에서 role="tablist" 안의 role="tab" DOM 과
    //    role="tabpanel" 가져오기
    // 3. role="tab" DOM을 클릭하면
    //    id가 같은 role="tabpanel"이 보이도록 하기

    // 클릭 이벤트를 추가해줌
