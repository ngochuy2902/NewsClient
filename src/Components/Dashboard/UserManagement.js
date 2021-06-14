import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "antd";

export const UserManagement = () => {
    const [users, setUsers] = useState([]);

    function fetchUsers() {
        axios.get("http://localhost:8080/api/admin/users", {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        console.log(users)
    }, [users]);

    const columns = [
        {
            title: 'Id người dùng',
            dataIndex: 'id',
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'username',
        },
        {
            title: 'Năm sinh',
            dataIndex: 'year_of_birth',
        }
    ]
    return (
        <div>
            <Table dataSource={users} columns={columns} rowKey={(record) => record.id}/>
        </div>
    )
}