import {Menu} from "antd";
import './Category.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const CategoryBar = () => {
    const [categories, setCategories] = useState([]);

    function fetchCategories() {
        axios.get("http://localhost:8080/api/common/category")
            .then(res => {
                setCategories(res.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className={"Category"}>
            <Menu
                mode={"horizontal"}
                style={{textAlign: "center"}}
            >
                {categories.map((category) => {
                    return (
                        <Menu.Item>
                            <Link to={`/category/${category.name}`}>
                                {category.description.charAt(0).toUpperCase() + category.description.slice(1)}
                            </Link>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </div>
    );
}