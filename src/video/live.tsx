import React, {useEffect, useRef, useState} from 'react';
import '../App.css';
import {Card, Col, Row, Space, Statistic, Switch, Table} from "antd";
import ReactHlsPlayer from "react-hls-player";
import {NCP_STREAM_VIDEO_URL, STREAM_VIDEO_URL, TABLE_COLUMNS} from "../constant";
import axios from "axios";
import {LineChart} from "../line-chart";

type BgColor = '#3f8600' | '#cf1322' | '#fadb14';

function Live() {
    const videoEl = useRef<HTMLVideoElement | null>(null);
    const tVideoEl = useRef<HTMLVideoElement | null>(null);

    const [gasDataList, setGasDataList] = useState<GasDataType[]>([]);
    const [currentData, setCurrentData ] = useState<GasDataType>({} as GasDataType);
    const [bgColor, setBgColor] = useState<BgColor>('#3f8600');
    const [extraVideoPlayer, setExtraVideoPlayer] = useState<boolean>(false);

    const fetch = async () => {
        const res = await axios.get('/dron/gas');
        setGasDataList(res.data);
    }

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        setCurrentData(gasDataList[0]);
    }, [gasDataList]);

    useEffect(() => {
        const oxy = Number(currentData && currentData.oxy);
        if (oxy <= 18.1 || oxy >= 23.5) setBgColor('#cf1322')
        else if (oxy > 18.1 && oxy < 18.3) setBgColor('#fadb14')
        else if (oxy >= 23.2 && oxy < 23.5 ) setBgColor('#fadb14')
        else setBgColor('#3f8600')
    }, [currentData]);

    return (
        <div className="App">
            <Row gutter={[12, 0]} style={{width: '1450px', height: '100%'}}>
                <Col style={{width: '750px', height: '100%'}}>
                    <Row gutter={[0,24]} justify="space-around" align="middle" style={{height: '100%'}}>
                        <Card size="small" headStyle={{borderBottom: 'solid white 0.5px'}} style={{border: 'solid white 0.5px', width: '100%', backgroundColor: 'black', height: '100%'}} extra={
                            <Space size="small">
                                <div style={{color: 'white'}}>열영상 추가</div>
                                <Switch style={{border: 'solid white'}} checked={extraVideoPlayer} onClick={() => setExtraVideoPlayer((prev) => !prev)} />
                            </Space>
                        }>
                            <Space size="small" direction="vertical">
                                <ReactHlsPlayer
                                    src={NCP_STREAM_VIDEO_URL}
                                    autoPlay={true}
                                    controls={true}
                                    style={{height: 380, width: 675}}
                                    playerRef={videoEl}
                                />
                                {extraVideoPlayer && (<ReactHlsPlayer
                                    src={STREAM_VIDEO_URL}
                                    autoPlay={true}
                                    controls={true}
                                    style={{height: 380, width: 675}}
                                    playerRef={tVideoEl}
                                />)}
                            </Space>
                        </Card>
                    </Row>
                </Col>
                <Col style={{width: 600}}>
                    <Row gutter={[0, 12]} style={{height: '100%'}}>
                        <Card size="small" style={{width: '100%', backgroundColor: 'black'}}>
                            <Statistic
                                style={{backgroundColor: bgColor, height: '100%'}}
                                value={currentData && currentData.oxy}
                                precision={2}
                                valueStyle={{ color: 'white', fontSize: '5rem' }}
                                suffix="%"
                            />
                        </Card>
                        <Card size="small" style={{width: '100%', backgroundColor: 'black'}}>
                            <LineChart gasDataList={gasDataList} />
                        </Card>
                        <Card size="small" style={{width: '100%', backgroundColor: 'black'}}>
                            <Table size='small' dataSource={gasDataList} columns={TABLE_COLUMNS} pagination={false} scroll={{ y: 440 }} />
                        </Card>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Live;
