import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Select, Space, Switch, Table} from "antd";
import {TABLE_COLUMNS, VIDEO_TABLE_COLUMNS} from "../constant";
import axios from "axios";



function VideoList() {
    const [videoList, setVideoList] = useState<Video[]>([]);

    const fetchVideoList = async () => {
        const res = await axios.get('/dron/videos');
        setVideoList(res.data);
    }

    useEffect(() => {
        fetchVideoList();
    }, []);

    return (
        <div className="App">
            <Row gutter={[24, 0]} style={{height: '100%'}}>
                <Col span={18}>
                    <Row gutter={[0, 24]} justify="space-around" align="middle" style={{height: '100%'}}>
                        <Card style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
                            <Table style={{backgroundColor: 'black'}} size='small' dataSource={videoList} columns={VIDEO_TABLE_COLUMNS}
                                   pagination={false}/>
                        </Card>
                    </Row>
                </Col>
                <Col span={6}></Col>
            </Row>
        </div>
    );
}

export default VideoList;
