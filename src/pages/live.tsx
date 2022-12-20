import React, {RefObject, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import FileStructure from "../components/FileStructure";
import MaintenancePoint from "../components/MaintenancePoint";
import Monitoring from "../components/Monitoring";
import {ControlBar, Player} from "video-react";
import CapturedImages from "../components/CapturedImages";
import axios from "axios";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";

const LivePage = () => {
    const {state} = useLocation();
    const [dron, setDron] = useState<Dron>({} as Dron);
    const [image, setImage] = useState<Image>();
    const videoEl = useRef<HTMLVideoElement | null>(null);

    const fetchImage = async () => {
        const res = await axios.get('/dron/image/list', {params: {video_id: state.id}});
        setImage(res.data[0]);
    };

    const modifyComment = async () => {
        if (!image) return;
        const res = await axios.put(`/dron/image/modify/${image.id}`, {memo: image.memo});
        res.status == 200 ? alert('저장되었습니다.') : alert('저장에 실패했습니다.')
    }
    const [gasData, setGasData] = useState<GasDataType[]>([]);

    const fetchDron = async () => {
        const res = await axios.get(`/dron/detail/${state.id}`);
        setDron(res.data);
    }

    const fetchGas = async () => {
        const res = await axios.get('/dron/gas', {params: {video_id: state.id, size: 20}});
        setGasData(res.data);
    }

    const fetchGasLatest = async () => {
        const res = await axios.get('/dron/gas/latest', {params: {video_id: state.id}});
        setGasData((prev) => {
            if (prev.length == 0 || prev[prev.length - 1].id < res.data.id ) {
                return [...prev, res.data]
            }
            return prev;
        });
    }

    useEffect(() => {
        fetchDron();
        fetchImage();
    }, [state]);

    useEffect(() => {
        dron && fetchGas();
    }, [dron])

    useEffect(() => {
        const timer = dron && setInterval(() => {
            fetchGasLatest();
        }, 5000);

        return () => clearInterval(timer);
    }, [dron]);

    return (
        <Root>
            <Side>
                <FileStructure/>
            </Side>
            <Left>
                <LeftTop>
                    <MaintenancePoint dron={dron} gas={gasData}/>
                </LeftTop>
                <LeftBottom>
                    <Monitoring dron={dron} gas={gasData}/>
                </LeftBottom>
            </Left>
            <Right>
                <RightTop>
                    <div style={{width: '100%', backgroundColor: '#212121', padding: '20px'}}>
                        <ReactHlsPlayer
                            src={dron.video_url}
                            autoPlay={true}
                            playerRef={videoEl}
                            controls={true}
                            width="100%"
                            height="auto"
                        />
                    </div>
                </RightTop>
                <RightBottom>
                    {image &&
                        <>
                            <textarea onChange={(e) => setImage({...image, memo: e.target.value})}
                                      style={{width: '100%', height: '100%', marginBottom: '0.5rem'}}
                                      defaultValue={image.memo}></textarea>
                            <button onClick={() => modifyComment()} style={{width: '100%'}}>저장</button>
                        </>}
                </RightBottom>
            </Right>
        </Root>
    )
}

export default LivePage;

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000000;
`

const Side = styled.div`
  min-width: 180px;
  width: 15%;
  background-color: #121212;
  margin: 20px;
`

const Left = styled.div`
  min-width: 740px;
  display: flex;
  flex-direction: column;
  width: 35%;
  background-color: #000000;
  margin: 20px 20px 20px 0px;
`

const LeftTop = styled.div`
  width: 100%;
  height: 30%;
  background-color: #121212;
  margin-bottom: 20px;
  padding: 20px;
`

const LeftBottom = styled.div`
  width: 100%;
  height: calc(70% - 20px);
  background-color: #121212;
  padding: 20px;
`

const Right = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: #000000;
  margin: 20px 20px 20px 0px;
`

const RightTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #121212;
  margin-bottom: 20px;
  padding: 20px;
`

const RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: #121212;
  margin: 0px 20px 0px 0px;
  padding: 20px;
`
