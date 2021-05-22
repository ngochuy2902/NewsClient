import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import {Button, Checkbox, Divider, Form, Input, Select} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import axios from "axios";
import {useHistory} from "react-router-dom";


let yearOfBirths = Array.from({length: 102}, (x, i) => i + 1920);

const {Option} = Select
export const Register = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([]);

    function fetchData() {
        axios.get("http://localhost:8080/api/common/category")
            .then(res => {
                setCategories(res.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
        console.log(setCategories);
    }, []);


    const handleFinish = (values) => {
        console.log({...values, categories: init});
        let data = {
            username: values.username,
            password: values.password,
            year_of_birth: values.year_of_birth,
            category_ids: init
        }
        axios.post('http://localhost:8080/api/auth/register', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                if (res.status === 201) {
                    history.push("/login")
                }
            })
            .catch(error => console.log(error))
    }
    const [checkAll, setCheckAll] = useState(false);
    const [init, setInit] = useState([]);


    return (
        <div className={'login-form-wrapper'}>
            <div>
        <Form
            onFinish={handleFinish}
            className='login-form'
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
                <Input prefix={<UserOutlined type={'user'} style={{fontsize: 13}}/>}
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
                <Input.Password prefix={<LockOutlined style={{fontsize: 13}}/>}
                       type={"password"}
                       placeholder={"Mật khẩu"}
                />
            </Form.Item>
            <Form.Item
                name='re-password'
                rules={[
                    {
                        required: true,
                        message: 'Nhập lại mật khẩu',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Mật khẩu không khớp!');
                        },
                    })
                ]}
            >
                <Input.Password prefix={<LockOutlined style={{fontsize: 13}}/>}
                       type={"password"}
                       placeholder={"Nhập lại mật khẩu"}
                />
            </Form.Item>
            <Form.Item
                name={"year_of_birth"}
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

            <div>
                <Checkbox
                    checked={checkAll}
                    onChange={(e) => {
                        setCheckAll(e.target.checked);
                        e.target.checked
                            ? setInit(categories.map((category) => category.id))
                            : setInit([]);
                    }}
                >
                    Chọn tất cả
                </Checkbox>
                <Checkbox.Group
                    value={init}
                    onChange={(e) => {
                        setInit(e);
                        setCheckAll(e.length === categories.length);
                    }}
                >
                    {categories.map((category) => (
                        <span>
                          <Checkbox value={category.id} key={category.id}>
                            {category.description}
                          </Checkbox>
                         </span>
                    ))}
                </Checkbox.Group>
            </div>
            <Divider/>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    ĐĂNG KÝ
                </Button>
            </Form.Item>
        </Form>
            </div>
        </div>
    );
};