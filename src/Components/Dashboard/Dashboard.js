import {Tabs} from 'antd';
import React from 'react';
import {SystemInfo} from "./SystemInfo";
import {UserManagement} from "./UserManagement";
import {Crawler} from "./Crawler";
import "./Dashboard.css"

const {TabPane} = Tabs;
export const Dashboard = () => {
    return (
        <div className={"Dashboard"}>
            <Tabs tabPosition={'left'}>
                <TabPane tab="Thông tin hệ thống" key="1">
                    <SystemInfo/>
                </TabPane>
                <TabPane tab="Quản lý người dùng" key="2">
                    <UserManagement/>
                </TabPane>
                <TabPane tab="Thu thập báo" key="3">
                    <Crawler/>
                </TabPane>
            </Tabs>
        </div>
    );
}
