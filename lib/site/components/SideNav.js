import { h, Component } from 'preact';
const NAV_GROUPS = [
    {
        title: 'Basic',
        list: [
            { title: 'Layout 布局', key: 'layout' }
        ]
    }
];
export default class extends Component {
    render() {
        const { activeKey = 'layout' } = this.props;
        return h("nav", { className: "side-nav" },
            h("ul", null,
                h("li", { className: "nav-item" },
                    h("a", null, "\u57FA\u7840\u7EC4\u4EF6"),
                    NAV_GROUPS.map(group => h("div", { className: "nav-group" },
                        h("div", { className: "nav-group__title" }, group.title),
                        h("ul", { className: "pure-menu-list" }, group.list && group.list.map(item => h("li", { className: "nav-item" },
                            h("a", { href: `#/${item.key}`, className: activeKey === item.key ? 'active' : '' }, "Layout \u5E03\u5C40")))))))));
    }
}
//# sourceMappingURL=SideNav.js.map