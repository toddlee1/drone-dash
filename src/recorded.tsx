import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Card, Col, Row, Select, Space, Switch, Table} from "antd";
import {NCP_STREAM_VIDEO_URL, STREAM_VIDEO_URL, TABLE_COLUMNS, VIDEO_TABLE_COLUMNS} from "./constant";
import axios from "axios";
import {LineChart} from "./line-chart";
import {Player} from 'video-react';

const {Option} = Select;

function Recorded() {
    const [gasDataList, setGasDataList] = useState<GasDataType[]>([]);
    const [videoList, setVideoList] = useState<Video[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<Video>({} as Video);
    const [extraVideoPlayer, setExtraVideoPlayer] = useState<boolean>(false);

    const fetchGas = async () => {
        const res = await axios.get('/dron/gas');
        setGasDataList(res.data);
    }

    const fetchVideoList = async () => {
        const res = await axios.get('/dron/video');
        setVideoList(res.data);
    }

    useEffect(() => {
        fetchGas();
        fetchVideoList();
    }, []);

    return (
        <div className="App">
            <Row gutter={[24, 0]}>
                <Col span={18}>
                    <Row gutter={[0, 24]} justify="space-around" align="middle" style={{height: '100%'}}>
                        {
                            !!selectedVideo && <Card style={{width: '100%'}}>
                                <Table size='small' dataSource={videoList} columns={VIDEO_TABLE_COLUMNS} pagination={false}/>
                            </Card>
                        }
                        {
                            selectedVideo && <Card style={{width: '100%'}} extra={
                                <Space size="small">
                                    열영상 추가
                                    <Switch checked={extraVideoPlayer}
                                            onClick={() => setExtraVideoPlayer((prev) => !prev)}/>
                                </Space>
                            }>
                                <Player
                                    playsInline
                                    src="https://kr.object.ncloudstorage.com/drone-gas-bucket/125907-527770-202211142335.mp4"
                                />
                            </Card>
                        }
                        {
                            selectedVideo && extraVideoPlayer && (
                                <Card style={{width: '100%'}}>
                                    <Player
                                        playsInline
                                        src="https://kr.object.ncloudstorage.com/drone-gas-bucket/125907-527770-202211142335.mp4"
                                    />
                                </Card>
                            )
                        }

                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[0, 24]} style={{height: '100%'}}>
                        <Card style={{width: '100%'}}>
                            <Table size='small' dataSource={gasDataList} columns={TABLE_COLUMNS} pagination={false}/>
                        </Card>
                        <Card style={{width: '100%'}}>
                            <LineChart gasDataList={gasDataList}/>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Recorded;
