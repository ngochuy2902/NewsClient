import React from 'react';
import 'antd/dist/antd.css';
import {Button, Form, Input, Select, Checkbox, Divider} from 'antd';
import {LockOutlined, UserOutlined, InboxOutlined} from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 4,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 0,
    },
};

let yearOfBirths = Array.from({length: 102}, (x, i) => i + 1920);
const categories = ["Chính trị", "Xã hôi", "Văn hoá", "Kinh tế", "Giáo dục", "Khoa học", "Công nghệ", "Y tế", "Thể thao", "Giải trí"];
const {Option} = Select
const CheckboxGroup = Checkbox.Group;
export const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    const [checkedList, setCheckedList] = React.useState([]);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < categories.length);
        setCheckAll(list.length === categories.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? categories : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className='login-form'
            {...layout}
            name='login'
            initialValues={{
                remember: true,
            }
            }>
            <Form.Item
                label='Tên đăng nhập'
                name='username'
                rules={[
                    {
                        required: true,
                        message: 'Nhập tên đăng nhập',
                    },
                ]}
            >
                <Input prefix={<UserOutlined type={'user'} style={{fontsize: 13}}/>}
                       placeholder={"Tên đăng nhập"}
                />
            </Form.Item>
            <Form.Item
                label='Mật khẩu'
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Nhập mật khẩu',
                    },
                ]}
            >
                <Input prefix={<LockOutlined style={{fontsize: 13}}/>}
                       type={"password"}
                       placeholder={"Mật khẩu"}
                />
            </Form.Item>
            <Form.Item
                label='Nhập lại mật khẩu'
                name='re-password'
                rules={[
                    {
                        required: true,
                        message: 'Nhập lại mật khẩu',
                    },
                ]}
            >
                <Input prefix={<LockOutlined style={{fontsize: 13}}/>}
                       type={"password"}
                       placeholder={"Nhập lại mật khẩu"}
                />
            </Form.Item>
            <Form.Item
                label={"Năm sinh"}
                name={"yearOfBirth"}
                rules={[
                    {
                        required: true,
                        message: "Chọn năm sinh"
                    },
                ]}
            >
                <Select
                    placeholder={"-- Năm sinh --"}
                >
                    {yearOfBirths.map(year => (
                        <Option key={year}>{year}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
            >
                <Input prefix={<InboxOutlined style={{fontsize: 13}}/>}
                       type={"email"}
                       placeholder={"Email"}
                />
            </Form.Item>

            <>
                <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                    Chọn tất cả
                </Checkbox>
                <CheckboxGroup options={categories} value={checkedList} onChange={onChange} />
            </>
            <Divider />
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    ĐĂNG KÝ
                </Button>
            </Form.Item>
        </Form>
    );
};