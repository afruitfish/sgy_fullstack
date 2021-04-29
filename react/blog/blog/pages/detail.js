import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Author from '../components/author';
import Advert from '../components/advert';
import Footer from '../components/footer';
import { Row, Col, Icon, Breadcrumb } from 'antd'
import '../static/style/pages/detail.css'

const Detail = () => (
    <div>
        <Head>
            <title>Detail</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                左侧
            </Col>
            <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                右侧
            </Col>
        </Row>
    </div>
)

export default Detail