import { h } from 'preact'
import Component from '../libs/Component'

interface MenuItem {
    items
}
interface Props {
    mode?: 'horizontal'
    defaultActive?: string
    defaultOpeneds?: Array<string>
    theme?: 'dark'
    uniqueOpened?: boolean
    menuTrigger?: 'click'
    onSelect?: (index: string) => void
    onOpen?: (index: string) => void
    onClose: (index: string) => void
}
interface State {
    activeIndex: string
    openedMenus: Array<string>
}

export default class Menu extends Component<Props, State> {
    state: State
    instanceType = 'Menu'
    getChildContext(): { component: Menu } {
        return {
            component: this
        };
    }
    constructor(props: Props) {
        super(props)
        this.state = {
            activeIndex: props.defaultActive,
            openedMenus: props.defaultOpeneds ? props.defaultOpeneds.slice(0) : []
        }
    }
    render () {
        const { mode = 'vertical', theme = 'light', children } = this.props

        return <ul 
            style={this.style()}
            className={this.className("el-menu", `el-menu--${mode}`, `el-menu--${theme}`)}
        >
            {children}
        </ul>
    }
}
