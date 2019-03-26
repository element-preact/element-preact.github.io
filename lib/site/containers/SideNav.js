import { connect, getState } from "../store";
import SideNav from '../components/SideNav';
export default connect(() => {
    const { hash = 'layout' } = getState();
    return {
        activeKey: hash
    };
})(SideNav);
//# sourceMappingURL=SideNav.js.map