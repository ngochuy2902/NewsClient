import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import axios from "axios";
import {Redirect} from 'react-router-dom';
import './Login.css'

export const Login = ({isLogin, setIsLogin}) => {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        axios.post('http://localhost:8080/api/auth/login', values, {
        })
            .then(res => {
                localStorage.setItem("token", res.data['accessToken']);
                console.log("---", res.data['accessToken']);
                setIsLogin(true);
                setLoading(false);

            })
            .catch(error => {
                console.log(error)
                setLoading(false);
            })
    }

    if (isLogin) {
        return (<Redirect to={"/"}/>)
    }

    return (
        <div
            className='login-form-wrapper'
        >
            <div>
        <Form
            onFinish={onFinish}
            name='login'
            initialValues={{
                remember: true,
            }
            }>
            <Form.Item
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
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Nhập mật khẩu',
                    },
                ]}
            >
                <Input.Password prefix={<LockOutlined type={'lock'} style={{ fontsize: 13}}/>}
                       type={"password"}
                       placeholder={"Mật khẩu"}
                />
            </Form.Item>
            {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked">*/}
            {/*    <Checkbox>Ghi nhớ đăng nhập</Checkbox>*/}
            {/*</Form.Item>*/}
            <Form.Item >
                <Button loading={loading} type="primary" htmlType="submit">
                    ĐĂNG NHẬP
                </Button>
            </Form.Item>
        </Form>
            </div>
        </div>
    )
}