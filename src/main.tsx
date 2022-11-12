import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Card, Col, Row, Space, Table} from "antd";
import ReactHlsPlayer from "react-hls-player";
import {STREAM_VIDEO_URL, TABLE_COLUMNS} from "./constant";
import axios from "axios";
import {LineChart} from "./line-chart";

function Main() {
    const videoEl = useRef<HTMLVideoElement | null>(null);
    const [gasDataList, setGasDataList] = useState([]);
    const fetch = async () => {
        const res = await axios.get('/api/gas');
        setGasDataList(res.data);
    }
    useEffect(() => {
        fetch();
    }, []);
    return (
        <div className="App">
            <Space size='large'>
                <Space size='large' direction='vertical' style={{width: '50%'}}>
                    <Card title="Card title">
                        <ReactHlsPlayer
                            src={STREAM_VIDEO_URL}
                            autoPlay={true}
                            controls={true}
                            width="100%"
                            height="100%"
                            playerRef={videoEl}
                        />
                    </Card>
                    <Card title="Card title">
                        <ReactHlsPlayer
                            src={STREAM_VIDEO_URL}
                            autoPlay={true}
                            controls={true}
                            width="100%"
                            height="100%"
                            playerRef={videoEl}
                        />
                    </Card>
                </Space>
                <Space size='large' direction='vertical'>
                    <Card title="TABLE">
                        <Table size='small' dataSource={gasDataList} columns={TABLE_COLUMNS} />
                    </Card>
                    <Card title="CHART">
                        <LineChart gasDataList={gasDataList} />
                    </Card>
                </Space>
            </Space>
        </div>
    );
}

export default Main;
