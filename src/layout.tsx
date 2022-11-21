import React, {useState} from 'react';
import Live from "./live";
import {Layout, Menu, Select} from "antd";
import {LaptopOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";
import VideoDetail from "./video/detail";
import VideoList from "./video/list";


const {Header, Content, Sider} = Layout;

const CustomLayout = () => {
    const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <Layout style={{height: '100vh', backgroundColor: 'black'}}>
            <Header style={{border: 'solid white', backgroundColor: 'black'}}>
                <div className="logo"/>
            </Header>
            <Content style={{padding: '0 50px', height: '100%'}}>
                <Layout className="site-layout-background" style={{padding: '24px 0', height: '100%', backgroundColor: 'black'}}>
                    <Sider className="site-layout-background" width={200} style={{border: 'solid white', backgroundColor: 'black'}}>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', backgroundColor: 'black'}}
                        >
                            <Menu.Item>
                                <Link to="/"><LaptopOutlined/> Live</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to="/videos"><LaptopOutlined/> Recorded</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <Routes>
                            <Route path="/" element={<Live/>}/>
                            <Route path="/videos" element={<VideoList />}/>
                            <Route path="/video/:id" element={<VideoDetail />}/>
                        </Routes>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
}

export default CustomLayout;