import createStore from 'ipreact';
const { dispatch, connect, getState } = createStore()({
    hash: location.hash && location.hash.replace(/^#\/?/, '') || 'layout',
    document_map: new Map()
});
export { dispatch, connect, getState };
addEventListener('hashchange', () => dispatch(state => {
    return {
        ...state,
        hash: location.hash && location.hash.replace(/^#\/?/, '') || 'layout'
    };
}));
//# sourceMappingURL=store.js.map