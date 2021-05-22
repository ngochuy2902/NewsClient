import {Button} from "antd";
import axios from "axios";

export const Crawler = () => {
    const callCrawler = () => {
        axios.post("http://localhost:5505/crawler")
            .then(res => {
                console.log(res.data);
            }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <p>Bắt đầu thu thập báo</p>
            <Button type={"primary"} onClick={callCrawler}>
                Bắt đầu
            </Button>
        </div>
    )
}