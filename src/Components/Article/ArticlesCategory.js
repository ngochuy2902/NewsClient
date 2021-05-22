import {useEffect, useState} from "react";
import axios from "axios";
import {ArticleCard} from "./ArticleCard";
import {useParams} from "react-router-dom";
import {Footer} from "../Footer/Footer";

export const ArticlesCategory = () => {
    const [articles, setArticles] = useState([]);
    const [audio, setAudio] = useState([]);

    const {categoryName} = useParams();

    function fetchArticles() {
        axios.get('http://localhost:8080/api/common/article/name/' + categoryName)
            .then(res => {
                setArticles(res.data);
                setAudio(res.data.map(article => {
                    return {src: `http://localhost:3000/${article.audio_path}`}
                }));

            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchArticles();
    }, []);
    return (
        <div>

            {articles.map(article => (
                <ArticleCard article={article} key={article.id}/>
            ))}
            <Footer audios={audio}/>
        </div>
    )
}