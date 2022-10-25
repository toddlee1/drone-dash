import React, {useRef} from 'react';
import './App.css';
import {Col, Image, Row, Table} from "antd";
import ReactHlsPlayer from "react-hls-player";
import {MOCK_DATA_SOURCE, STREAM_VIDEO_URL, TABLE_COLUMNS} from "./constant";

function App() {
  const videoEl = useRef<HTMLVideoElement | null>(null);
  return (
    <div className="App">
        <Row gutter={[40, 40]}>
          <Col span={12}>
            <Row>
              <ReactHlsPlayer
                  src={STREAM_VIDEO_URL}
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="auto"
                  playerRef={videoEl}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Table dataSource={MOCK_DATA_SOURCE} columns={TABLE_COLUMNS} />
              </Col>
              <Col span={24}>
                <Image src="https://forward.nhn.com/2020/seoul/hands-on-labs/toastui.chart-dashboard/_images/step08.png" />
              </Col>
            </Row>
          </Col>
        </Row>
    </div>
  );
}

export default App;
