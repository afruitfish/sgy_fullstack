import React from 'react';
import { Avatar, Divider } from 'antd';
import './index.css'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src='../../static/icons/headerIcon.png' /></div>
            <div className="author-introduction">
                前端麻瓜
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account" />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />

            </div>
        </div>
    )
}

export default Author