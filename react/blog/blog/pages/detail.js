import React from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import Header from '../components/header';
import Author from '../components/author';
import Advert from '../components/advert';
import Footer from '../components/footer';
import { CalendarOutlined, FireOutlined, FolderOpenOutlined } from '@ant-design/icons'
import { Row, Col, Icon, Breadcrumb } from 'antd'
import '../static/style/pages/detail.css'
import 'markdown-navbar/dist/navbar.css'

const Detail = () => {
    let markdown = '# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n' +
        '\`console.log(111)\` \n\n' +
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n' +
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n' +
        '``` var a=11; ```'
    return (
        <div>
            <Head>
                <title>Detail</title>
            </Head>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    <div className='bread-div'>
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">home</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="/">home</a></Breadcrumb.Item>
                            <Breadcrumb.Item>XXX</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className='detailed-title'>
                        React实战
                    </div>
                    <div className='list-icon center'>
                        <span className='list-icon'>
                            <CalendarOutlined />
                                        2077-11-1
                                    </span>
                        <span className='list-icon'>0
                            <FolderOpenOutlined />
                                        荒坂塔
                                    </span>
                        <span className='list-icon'>
                            <FireOutlined />
                                        强尼手银
                                    </span>
                    </div>
                    <div className='detailed-content'>
                        <ReactMarkdown children={markdown} skipHtml={false} />
                    </div>
                </Col>
                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    右侧
            </Col>
            </Row>
        </div>
    )
}

export default Detail