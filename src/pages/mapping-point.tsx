import React, {useEffect, useState} from "react";
import styled from "styled-components";
import FileStructure from "../components/FileStructure";
import MaintenancePoint from "../components/MaintenancePoint";
import Monitoring from "../components/Monitoring";
import {ControlBar, Player} from "video-react";
import CapturedImages from "../components/CapturedImages";
import {useLocation} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";
import DronMon from "../components/monitoring/DronMon";

const MappingPointPage = () => {
    const {state} = useLocation();
    const [dron, setDron] = useState<Dron>({} as Dron);

    const fetchDron = async () => {
        const res = await axios.get(`/dron/detail/${state.id}`);
        setDron(res.data);
    }

    useEffect(() => {
        fetchDron();
    }, [state]);

    return (
        <Root>
            <Side>
                <FileStructure/>
            </Side>
            <Left>
                <DronMonDiv>
                    <DronMon dron={dron}/>
                </DronMonDiv>
                <MapDiv>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9952238257806!2d126.87850131530928!3d37.48443907981331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e1ce6f7e7e7%3A0x5b0e4cc9d1f7282!2z7IK866-47KCV67O07Iuc7Iqk7YWc!5e0!3m2!1sko!2skr!4v1670857813713!5m2!1sko!2skr"
                        style={{width: '100%', height: '100%', border: 0}} allowFullScreen={false} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </MapDiv>
            </Left>
            <Right>
                <div style={{ width: '100%', height: '20%', display: 'flex', justifyContent: 'end', marginBottom: '1rem'}}>
                    <Link to={`/detail/${dron.id}`} state={{id: dron.id}}>
                        <button style={{width: '10rem'}}>일반영상 페이지</button>
                    </Link>
                </div>
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', padding: '20px', backgroundColor: '#212121', height: '80%'}}>
                    <div style={{height: '50%'}}>
                        <Player
                            playsInline
                            autoPlay
                            src={dron.video_url}
                        >
                            <ControlBar/>
                        </Player>
                    </div>
                    <div style={{height: '50%'}}>
                        <Player
                            playsInline
                            autoPlay
                            src={dron.ir_video_url}
                        >
                            <ControlBar/>
                        </Player>
                    </div>
                </div>
            </Right>
        </Root>
    )
}

export default MappingPointPage;

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
  display: flex;
  flex-direction: column;
  width: 42.5%;
  background-color: #121212;
  //margin-bottom: 20px;
  margin: 20px 20px 20px 0px;
  padding: 20px;
`

const DronMonDiv = styled.div`
  height: 20%;
  background-color: #212121;
`

const MapDiv = styled.div`
  height: 80%;
  padding: 20px;
  background-color: #212121;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 42.5%;
  background-color: #121212;
  margin: 20px 20px 20px 0px;
  padding: 20px;
`
