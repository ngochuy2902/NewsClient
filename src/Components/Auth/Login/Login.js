import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

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

export const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
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
                <Input prefix={<UserOutlined type={'user'} style={{ fontsize: 13}}/>}
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
                <Input prefix={<LockOutlined type={'lock'} style={{ fontsize: 13}}/>}
                       type={"password"}
                       placeholder={"Mật khẩu"}
                />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    ĐĂNG NHẬP
                </Button>
            </Form.Item>
        </Form>
    )
}