const template = `
    <tr>
        <td class="item">{{item}}</td>
        <td class="read">
            {{#if readStateNoRead}}
                <span class="no-read">{{readState}}</span>
            {{/if}}
            {{#if readStateReading}}
                <span class="reading">{{readState}}</span>
            {{/if}}
            {{#if readStateRead}}
                <span class="read">{{readState}}</span>
            {{/if}}
        </td>
        <td class="date">{{date}}</td>
    </tr>
`;

export default window.Handlebars.compile(template); 