import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ControlBar, Player} from "video-react";

function VideoList() {

    const [dronList, setDronList] = useState<Dron[]>([]);

    const fetchDronList = async () => {
        const res = await axios.get(`/dron/list`);
        setDronList(res.data);
    }

    useEffect(() => {
        fetchDronList();
    }, []);

    return (
        <RootDiv>
            <VideoGroupDiv>
                {dronList.map((dr) => {
                    return (
                        <VideoDiv>
                            <Link style={{height: '100%', width: '100%'}} to={`/detail/${dr.id}`} state={{id: dr.id}}>
                                <Player
                                    playsInline
                                    autoPlay
                                    src={dr.video_url}
                                >
                                    <ControlBar disableCompletely={true}/>
                                </Player>
                            </Link>
                        </VideoDiv>)
                })}
            </VideoGroupDiv>
        </RootDiv>
    );
}

export default VideoList;

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #212121;
`

const VideoGroupDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  padding: 30px 40px 30px 40px;
`

const VideoDiv = styled.div`
  width: 24%;
  min-width: 187px;
  height: 24%;
  margin: 5px;
  border: 0.1px solid black;
  background-color: #212121;
`
