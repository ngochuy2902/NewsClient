import {Menu} from "antd";

export const CategoryBar = () => {
    return (
        <Menu
            mode={"horizontal"}
            style={{textAlign: "center"}}
        >
            <Menu.Item>
                Chính trị
            </Menu.Item>
            <Menu.Item>
                Xã hội
            </Menu.Item>
            <Menu.Item>
                Văn hoá
            </Menu.Item>
            <Menu.Item>
                Kinh tế
            </Menu.Item>
            <Menu.Item>
                Giáo dục
            </Menu.Item>
            <Menu.Item>
                Khoa học
            </Menu.Item>
            <Menu.Item>
                Công nghệ
            </Menu.Item>
            <Menu.Item>
                Y tế
            </Menu.Item>
            <Menu.Item>
                Thể thao
            </Menu.Item>
            <Menu.Item>
                Giải trí
            </Menu.Item>
        </Menu>
    );
}