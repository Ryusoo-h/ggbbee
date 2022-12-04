const template = `
    <div class="list list-tab {{current}}" id="{{listCategory}}" role="tabpanel">
        <h1>{{title}}</h1>
        <table>
            <caption>{{caption}}</caption>
            <thead>
                <tr>
                    <th class="item {{listCategory}}">{{listCategory}}</th>
                    <th class="read">read</th>
                    <th class="date">date</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
`;

export default window.Handlebars.compile(template); 