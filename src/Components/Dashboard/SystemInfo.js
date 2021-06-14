import {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "antd";
import Moment from 'react-moment';

export const SystemInfo = () => {
    const [session, setSession] = useState([])

    async function fetchSession() {
        axios.get('http://localhost:8080/api/admin/session', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
            .then(res => {
                setSession(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchSession();
    }, []);

    useEffect(() => {
        console.log(session);
    }, [session]);

    const columns = [
        {
            title: 'Phiên',
            dataIndex: 'id',
        },
        {
            title: 'Thời gian bắt đầu',
            dataIndex: 'created_time',
            render: (created_time) => <p><Moment format={"DD/MM/YYYY HH:mm:ss"}>{created_time}</Moment></p>
        },
        {
            title: 'Thời gian kết thúc',
            dataIndex: 'finished_time',
            render: (finished_time) => {
                if (finished_time) {
                    return (<p><Moment format={"DD/MM/YYYY HH:mm:ss"}>{finished_time}</Moment></p>)
                }
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status) => <p>{status}</p>
        }
    ]
    return (
        <div>
            <Table dataSource={session} columns={columns} rowKey={(record) => record.id}/>
        </div>
    )
}