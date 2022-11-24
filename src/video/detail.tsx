import React, {useEffect, useState} from 'react';
import {Card, Col, Row, Select, Space, Switch, Table} from "antd";
import {TABLE_COLUMNS, VIDEO_TABLE_COLUMNS} from "../constant";
import axios from "axios";
import {LineChart} from "../line-chart";
import {Player} from 'video-react';
import {useLocation} from "react-router";


function VideoDetail() {
    const {pathname} = useLocation();

    const [video, setVideo] = useState<Video>({} as Video)
    const [gasDataList, setGasDataList] = useState<GasDataType[]>([]);
    const [extraVideoPlayer, setExtraVideoPlayer] = useState<boolean>(false);

    const fetchGas = async () => {
        const res = await axios.get('/dron/gas', {params:{sensed: Math.floor(new Date(video.created_at).getTime() / 1000)}});
        setGasDataList(res.data);
    }

    const fetchVideo = async () => {
        const res = await axios.get(`/dron${pathname}`);
        setVideo(res.data);
    }

    useEffect(() => {
        fetchVideo();
    }, []);

    useEffect(() => {
        video.created_at && fetchGas();
    }, [video])

    return (
        <div className="App">
            <Row gutter={[12, 0]} style={{width: '1450px', height: '100%'}}>
                <Col style={{width: '750px', height: '100%'}}>
                    <Row gutter={[0, 24]} justify="space-around" align="top" style={{width: '100%', height: '100%'}}>
                        <Card size="small" headStyle={{borderBottom: 'solid white 0.5px'}} style={{border: 'solid white 0.5px', width: '100%', backgroundColor: 'black'}} extra={
                            <Space size="small">
                                <div style={{color: 'white'}}>열영상 추가</div>
                                <Switch style={{border: 'solid white'}} checked={extraVideoPlayer}
                                        onClick={() => setExtraVideoPlayer((prev) => !prev)}/>
                            </Space>
                        }>
                            <Space size="small" direction="vertical">
                                <Player
                                    playsInline
                                    src={video.video_url}
                                    fluid={false}
                                    height={380}
                                    aspectRatio="16:9"
                                />
                                {extraVideoPlayer && (<Player
                                    playsInline
                                    src={video.ir_video_url}
                                    fluid={false}
                                    height={380}
                                    aspectRatio="16:9"
                                />)}
                            </Space>

                        </Card>
                    </Row>
                </Col>
                <Col style={{width: 600}}>
                    <Row gutter={[0, 12]}>
                        <Card size="small" style={{width: '100%', backgroundColor: 'black'}}>
                            <LineChart gasDataList={gasDataList}/>
                        </Card>
                        <Card size="small" style={{width: '100%', backgroundColor: 'black'}}>
                            <Table size='small' style={{width: '100%'}} dataSource={gasDataList} columns={TABLE_COLUMNS} pagination={false} scroll={{ y: 550 }}/>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default VideoDetail;
