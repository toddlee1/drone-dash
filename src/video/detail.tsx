import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Select, Space, Switch, Table} from "antd";
import {TABLE_COLUMNS, VIDEO_TABLE_COLUMNS} from "../constant";
import axios from "axios";
import {LineChart} from "../line-chart";
import {Player} from 'video-react';
import {useLocation} from "react-router";


function VideoDetail() {
    const { pathname } = useLocation();

    const [video, setVideo] = useState<Video>({} as Video)
    const [gasDataList, setGasDataList] = useState<GasDataType[]>([]);
    const [extraVideoPlayer, setExtraVideoPlayer] = useState<boolean>(false);

    const fetchGas = async () => {
        const res = await axios.get('/dron/gas');
        setGasDataList(res.data);
    }

    const fetchVideo = async () => {
        const res = await axios.get(`/dron${pathname}`);
        setVideo(res.data);
    }

    useEffect(() => {
        fetchGas();
        fetchVideo();
    }, []);

    return (
        <div className="App">
            <Row gutter={[24, 0]} style={{height: '100%'}}>
                <Col span={18} style={{height: '100%'}}>
                    <Row gutter={[0, 24]} justify="space-around" align="middle" style={{height: '100%'}}>
                        <Card style={{width: '100%', backgroundColor: 'black'}} extra={
                            <Space size="small">
                                <div style={{color: 'white'}}>열영상 추가</div>
                                <Switch style={{border: 'solid white'}} checked={extraVideoPlayer}
                                        onClick={() => setExtraVideoPlayer((prev) => !prev)}/>
                            </Space>
                        }>
                            <Player
                                playsInline
                                src={video.video_url}
                            />
                        </Card>
                        {
                            extraVideoPlayer && (
                                <Card style={{width: '100%', backgroundColor: 'black'}}>
                                    <Player
                                        playsInline
                                        src={video.ir_video_url}
                                    />
                                </Card>
                            )
                        }
                    </Row>
                </Col>
                <Col span={6}>
                    <Row gutter={[0, 24]} style={{height: '100%'}}>
                        <Card style={{width: '100%', backgroundColor: 'black'}}>
                            <Table size='small' dataSource={gasDataList} columns={TABLE_COLUMNS} pagination={false}/>
                        </Card>
                        <Card style={{width: '100%', backgroundColor: 'black'}}>
                            <LineChart gasDataList={gasDataList}/>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default VideoDetail;
