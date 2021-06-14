import {Button, Input, Menu} from "antd";
import {UserOutlined} from '@ant-design/icons'
import {Link, useHistory} from "react-router-dom";
import './Header.css'

const SubMenu = Menu.SubMenu;
const {Search} = Input;

export const Header = ({isLogin, setIsLogin, isAdmin, setIsAdmin}) => {
    const history = useHistory();
    function logout() {
        localStorage.setItem('token', null);
        setIsLogin(false);
        setIsAdmin(false);
        history.push("/");
    }

    const handleSearch = (e) => {
        console.log(e);
    }
    return (
        <div className={"Header"}>
            <Menu
                mode={"horizontal"}
            >
                <Button>
                    <Link to={"/"}>
                        Báo đọc
                    </Link>

                </Button>

                <SubMenu
                    style={{float: "right"}}
                    icon={<UserOutlined/>}
                >
                    {isLogin? <>
                        <Menu.Item key="profile">
                            <Link to={"/profile"}>
                                Trang cá nhân
                            </Link>
                        </Menu.Item>
                        {isAdmin? <>
                            <Menu.Item key="dashboard">
                                <Link to={"/dashboard"}>
                                    Trang quản lý
                                </Link>
                            </Menu.Item>
                        </> : <></>}
                        <Menu.Item key="/logout">
                            <p onClick={logout}>
                                Đăng xuất
                            </p>
                        </Menu.Item>
                    </>: <>
                        <Menu.Item key="singin">
                            <Link to={"/login"}>
                                Đăng nhập
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="register">
                            <Link to={"/register"}>
                                Đăng ký
                            </Link>
                        </Menu.Item>
                    </>}
                </SubMenu>
                <Search onSearch={handleSearch} placeholder="Nội dung tìm kiếm" allowClear style={{width: 200, marginTop: 5, float: "right"}}/>

            </Menu>
        </div>
    );
}