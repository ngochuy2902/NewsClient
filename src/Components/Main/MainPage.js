import {ArticleCard} from "../Article/ArticleCard";
import {CategoryBar} from "../Category/CategoryBar";
import {Col, Row} from "antd";
import axios from "axios";
import {useEffect, useState} from "react";
import {Footer} from "../Footer/Footer";
import "./MainPage.css"

export const MainPage = ({isLogin}) => {
    const [articles, setArticles] = useState([]);
    const [audio, setAudio] = useState([]);

    function fetchArticlesUser() {
        axios.get('http://localhost:8080/api/user/article', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                setArticles(res.data);
                setAudio(res.data.map(article => {
                    return {src: article.audio_path.replace('/Users/huyhn/Study/DATN/', '')}
                }))

            })
            .catch(error => {
                console.log(error);
            });
    }

    function fetchArticlesNoUser() {
        axios.get('http://localhost:8080/api/common/article')
            .then(res => {
                setArticles(res.data);
                setAudio(res.data.map(article => {
                    return {src: article.audio_path.replace('/Users/huyhn/Study/DATN/', '')}
                }))

            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (isLogin) {
            fetchArticlesUser();
        } else {
            fetchArticlesNoUser()
        }
    }, [isLogin]);

    useEffect(() => {
        console.log(articles);
    }, [articles]);

    return (
        <div className={"MainPage"}>
            <CategoryBar/>
            <Row gutter={24}>
                {articles.map(article => (
                    <Col sm={{span: 24}} md={{span: 8}} key={article.uuid_url}>
                        <ArticleCard article={article}/>
                    </Col>
                ))}
            </Row>
            <Footer audios={audio}/>
        </div>
    )
}