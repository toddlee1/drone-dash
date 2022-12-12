import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import FileStructure from "../components/FileStructure";
import VideoList from "../components/VideoList";
import MaintenancePoint from "../components/MaintenancePoint";
import Monitoring from "../components/Monitoring";
import {TEST_VIDEO_URL_LIST} from "../constant";
import {ControlBar, Player} from "video-react";
import CapturedImages from "../components/CapturedImages";
import axios from "axios";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const DetailPage = () => {
    const {state} = useLocation();
    const [dron, setDron] = useState<Dron>({} as Dron);
    const [gasData, setGasData] = useState<GasDataType[]>([]);

    const fetchDron = async () => {
        const res = await axios.get(`/dron/detail/${state.id}`);
        setDron(res.data);
    }

    const fetchGas = async () => {
        const res = await axios.get('/dron/gas', {params: {video_id: state.id}});
        setGasData(res.data);
    }

    useEffect(() => {
        fetchDron();
    }, [state]);

    useEffect(() => {
        dron && fetchGas();
    }, [dron])

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
                    <div style={{width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '1rem'}}>
                        <Link to={`/mapping/${dron.id}`} state={{id: dron.id}}>
                            <button style={{width: '10rem'}}>열영상 페이지</button>
                        </Link>
                    </div>
                    <div style={{width: '100%', backgroundColor: '#212121', padding: '20px'}}>
                        <Player
                            playsInline
                            autoPlay
                            src={dron.video_url}
                        >
                            <ControlBar/>
                        </Player>
                    </div>
                </RightTop>
                <RightBottom>
                    <CapturedImages dron={dron}/>
                </RightBottom>
            </Right>
        </Root>
    )
}

export default DetailPage;

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
  width: 100%;
  height: 30%;
  background-color: #121212;
  padding: 20px;
`
