import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ReactHlsPlayer from "react-hls-player";
import {TEST_STREAM_URL_LIST} from "../../constant";
import styled from "styled-components";


function LiveList() {
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
        <FlexDiv>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((it) => {
                return (
                    <VideoDiv>
                        <Link style={{height: '100%', width: '100%'}} to={`/live/detail/${it}`}>
                            <ReactHlsPlayer
                                src={TEST_STREAM_URL_LIST[it % 5]}
                                autoPlay={true}
                                controls={false}
                                style={{height: '100%', width: '100%'}}
                                playerRef={videoEl}
                            />
                        </Link>
                    </VideoDiv>)
            })}
        </FlexDiv>
    );
}

export default LiveList;

const FlexDiv = styled.div`
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
`
