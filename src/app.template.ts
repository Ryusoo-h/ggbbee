const template = `
    <section id="splash-screen">
        <div class="flex wrapper">
            <h1 class="main-title"><span class="point">깜</span><span class="point2">박</span>이</h1>
            <p class="point-text">✨ 언제든지 꺼내먹어 ✨</p>
            <div class="main-cake">🍰</div>
        </div>
    </section>

    <header id="main-header">
        <div class="container">
            여기에 [검색]과 [랜덤페이지 버튼], [아이템 추가 버튼]을 넣을 예정!
            {{title}}
        </div>
    </header>

    <section id="list-page">
        <div class="container">
            <div class="tabbutton-wrapper list-tab" role="tablist" onload>
                <button id="all" class="title tabbutton current" role="tab" aria-selected="true">☕ 모두 볼래</button>
                <button id="word" class="title tabbutton" role="tab">🍪 단어만</button>
                <button id="link" class="title tabbutton" role="tab">🍰 링크만</button>
            </div>
            <section id="list" class="tab-wrapper">
            
            </section>
        </div>
    </section>
`;

export default window.Handlebars.compile(template);

// <br>
// <span class="main-title">font test : main-title 쿠키런 볼드 style="font-size: 40px; font-family: CookieRunOTF; font-weight: 700;</span>
// <br>
// <span class="sub-title">sub-title : 서브타이틀</span>
// <br>
// <span class="title-L">title-L : 단어나 링크 제목</span>
// <br>
// <span class="title">title : 기본사이즈 타이틀, 단어/링크 등록 페이지의 항목별 타이틀</span>
// <br>
// <span class="point-text">point-text : 포인트 폰트</span>
// <br>
// <span class="point-text-S">point-text-S : 기본 폰트에서 포인트 // 디자인한건 없음</span>
// <br>
// <span style="font-size: 18px; font-family: CookieRunOTF; font-weight: 400;">쿠키런</span>
// <br>
// <span style="font-size: 24px; font-family: NanumSquareRound; font-weight: 900;">나눔스퀘어라운드 블랙</span>
// <br>
// <span style="font-size: 20px; font-family: NanumSquareRound; font-weight: 700;">나눔스퀘어라운드 볼드</span>
// <br>
// <span> basic-text (기본) 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드 나눔스퀘어라운드</span>
// <br>
// <span class="basic-text-light">basic-text-light 나눔스퀘어라운드 라이트 style="font-size: 13px; font-family: NanumSquareRound; font-weight: 200;</span>