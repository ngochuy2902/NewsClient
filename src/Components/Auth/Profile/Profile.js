import {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Row} from "antd";
import "./Profile.css";

export const Profile = () => {

    const [profile, setProfile] = useState({});

    async function fetchCategories() {
        await axios.get("http://localhost:8080/api/user/me", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                console.log(res.data);
                setProfile(res.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCategories();
        console.log(profile.categories)
    }, []);

    return (
        <div>
            <Row>
                <Col span={24} style={{textAlign: "center"}}>
                    <h1>Thông tin cá nhân</h1>
                </Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={10} style={{textAlign: "left", fontWeight: "bold", color: "blue"}}>Tên đăng nhập</Col>
                <Col span={10} style={{textAlign: "left"}}>{profile.username}</Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={10}  style={{textAlign: "left", fontWeight: "bold", color: "blue"}}>Năm sinh</Col>
                <Col span={10} style={{textAlign: "left"}}>{profile.year_of_birth}</Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={10}  style={{textAlign: "left", fontWeight: "bold", color: "blue"}}>Thể loại yêu thích</Col>
                { (profile.categories)? <>
                    <Col span={10} style={{textAlign: "left"}}>{
                        profile.categories.map((category) => {
                            return (
                                <div>
                                    {category.description}
                                </div>
                            )
                        })}</Col>
                </> : <></>}

            </Row>
            <Button type={"primary"} style={{margin: 10}}>Chỉnh sửa</Button>
            <Button type={"primary"} style={{margin: 10}}>Đổi mật khẩu</Button>
        </div>
    );
}