import React from 'react'
import './index.css'
import { HomeOutlined, BarsOutlined, SmileOutlined } from '@ant-design/icons'

import { Row, Col, Menu } from 'antd'
const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">水果鱼</span>
                <span className="header-txt">前端实习生,又菜又爱玩</span>
            </Col>

            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <BarsOutlined />文章
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined />生活
                </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header