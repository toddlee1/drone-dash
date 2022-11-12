import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Col, Image, Row, Table} from "antd";
import ReactHlsPlayer from "react-hls-player";
import {STREAM_VIDEO_URL, TABLE_COLUMNS} from "./constant";
import axios from "axios";
import {LineChart} from "./line-chart";
import {PieChart} from "./pie-chart";

function App() {
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
        <Row gutter={[40, 40]}>
          <Col span={12}>
            <Row style={{height: '47vh'}}>
              <ReactHlsPlayer
                  src={STREAM_VIDEO_URL}
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  playerRef={videoEl}
              />
            </Row>
            <Row style={{height: '47vh'}}>
              <ReactHlsPlayer
                  src={STREAM_VIDEO_URL}
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  playerRef={videoEl}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row style={{height: '47vh'}}>
              <Col span={24}>
                <Table size='small' dataSource={gasDataList} columns={TABLE_COLUMNS} />
              </Col>
            </Row>
            <Row style={{height: '47vh'}}>
              <LineChart gasDataList={gasDataList} />
            </Row>
          </Col>
        </Row>
    </div>
  );
}

export default App;
