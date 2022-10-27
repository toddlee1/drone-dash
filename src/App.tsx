import React, {useRef} from 'react';
import './App.css';
import {Col, Image, Row, Table} from "antd";
import ReactHlsPlayer from "react-hls-player";
import {MOCK_DATA_SOURCE, STREAM_VIDEO_URL, STREAM_VIDEO_URL_2, TABLE_COLUMNS} from "./constant";
import {LineChart} from "./line-chart";
import {PieChart} from "./pie-chart";

function App() {
  const videoEl = useRef<HTMLVideoElement | null>(null);
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
                  src={STREAM_VIDEO_URL_2}
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
                <Table dataSource={MOCK_DATA_SOURCE} columns={TABLE_COLUMNS} />
              </Col>
            </Row>
            <Row style={{height: '47vh'}}>
              <Col span={12}>
                <LineChart />
              </Col>
              <Col span={3}></Col>
              <Col span={6}>
                <PieChart />
              </Col>
              <Col span={3}></Col>
            </Row>
          </Col>
        </Row>
    </div>
  );
}

export default App;
