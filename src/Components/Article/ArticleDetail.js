import {useParams} from 'react-router-dom';
import axios from "axios";
import {useEffect, useState} from "react";
import {Footer} from "../Footer/Footer";
import Moment from "react-moment";
import "./ArticleDetail.css"

export const ArticleDetail = () => {
    const {id} = useParams();
    console.log("id: ", id);

    const [article, setArticle] = useState({});
    function fetchArticleDetail() {
        axios.get("http://localhost:8080/api/common/article/" + id)
            .then(res => {
                setArticle(res.data);
                console.log(res.data);
            }).catch(error => {
            console.log(error);
        });
    }
    useEffect(() => {
        fetchArticleDetail();
    }, [id]);
    return (
        <div className={"article-detail"}>
            <h1>{article.title}</h1>
            <small style={{textAlign: 'right', display: "block", paddingBottom: 15}}>
                <Moment format={"DD/MM/YYYY hh:mm"}>{article.time}</Moment>
            </small>
            <p style={{textAlign: "justify"}}>
                {article.content}
            </p>
            <Footer audios={[{src: `${article.audio_path}`}]}/>
        </div>
    )
}
