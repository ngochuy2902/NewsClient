import {Button} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";

export const Crawler = () => {
    const [message, setMessage] = useState(null);
    const callCrawler = () => {
        axios.post("http://localhost:8080/api/admin/crawler", null,{
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                setMessage(res.data);
                console.log(res.data);
            }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
    }, [message]);
    return (
        <div>
            <p>Bắt đầu phiên báo mới</p>
            <Button type={"primary"} onClick={callCrawler}>
                Bắt đầu
            </Button>
            <p>{message}</p>
        </div>
    )
}