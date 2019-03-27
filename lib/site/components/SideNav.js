import { h, Component } from 'preact';
const NAV_GROUPS = [
    {
        title: 'Basic',
        list: [
            { title: 'Layout 布局', key: 'layout' },
            { title: 'Color 色彩', key: 'color' },
            { title: 'Typography 字体', key: 'typography' },
            { title: 'Icon 图标', key: 'icon' },
            { title: 'Button 按钮', key: 'button' },
        ]
    },
    {
        title: 'Form',
        list: [
            { title: 'Radio 单选框', key: 'radio' },
            { title: 'Checkbox 多选框', key: 'checkbox' },
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
                            h("a", { href: `#/${item.key}`, className: activeKey === item.key ? 'active' : '' }, item.title)))))))));
    }
}
//# sourceMappingURL=SideNav.js.map