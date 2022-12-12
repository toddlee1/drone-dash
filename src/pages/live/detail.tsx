import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import {TEST_STREAM_URL_LIST} from "../../constant";
import styled from "styled-components";


function LiveDetail() {
    const videoEl = useRef<HTMLVideoElement | null>(null);

    // const [videoList, setVideoList] = useState<Video[]>([]);
    //
    // const fetchVideoList = async () => {
    //     const res = await axios.get('/dron/videos');
    //     setVideoList(res.data);
    // }
    //
    // useEffect(() => {
    //     fetchVideoList();
    // }, []);

    return (
        <>
            <MainDiv>
                <VideoDiv>
                    <ReactHlsPlayer
                        src={TEST_STREAM_URL_LIST[0]}
                        autoPlay={true}
                        controls={true}
                        style={{width: '100%', height: '100%'}}
                        playerRef={videoEl}
                    />
                </VideoDiv>
            </MainDiv>
        </>
    );
}

export default LiveDetail;

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`

const MainDiv = styled.div`
  width: 60vw;
  height: 100%;
  border-right: 0.2px solid white;
  padding-top: 25vh;
  padding-bottom: 25vh;
  
`

const VideoDiv = styled.div`
  height: 100%;
  //border: 0.2px solid white;
`
