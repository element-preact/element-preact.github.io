import { connect, getState, dispatch } from "../store";
import Markdown from '../components/Markdown';
async function loop() {
    const { document_map } = getState();
    const keys = Array.from(document_map.keys()).filter(k => !document_map.get(k));
    for (let i = 0; i < keys.length; i++) {
        const document = await fetch(`/docs/${keys[i]}.md`).then(res => res.text());
        document_map.set(keys[i], document);
    }
    dispatch(state => {
        return {
            ...state,
            document_map: new Map(document_map)
        };
    });
    setTimeout(loop, 1000);
}
loop();
export default connect(() => {
    const { document_map, hash = 'layout' } = getState();
    const document = document_map.get(hash);
    if (!document) {
        document_map.set(hash, null);
    }
    return {
        name: hash,
        document
    };
})(Markdown);
//# sourceMappingURL=Markdown.js.map