import {Button, Input, Menu} from "antd";
import {UserOutlined} from '@ant-design/icons'

const SubMenu = Menu.SubMenu;
const {Search} = Input;
export const Header = () => {
    return (
        <Menu
            mode={"horizontal"}
        >
            <Button>
                Báo đọc
            </Button>

            <SubMenu
                style={{float: "right"}}
                icon={<UserOutlined/>}
            >
                <Menu.Item key="singin">Đăng nhập</Menu.Item>
                <Menu.Item key="singup">Đăng xuất</Menu.Item>
                <Menu.Item key="singup">Trang cá nhân</Menu.Item>
            </SubMenu>

            <Search placeholder="Nội dung tìm kiếm" allowClear style={{ width: 200, marginTop: 5, float: "right"}} />

        </Menu>
    );
}