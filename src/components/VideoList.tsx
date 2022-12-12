import React, {RefObject, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {TEST_VIDEO_URL_LIST} from "../constant";
import {ControlBar, Player} from "video-react";

const SIXTEEN_LIST = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function VideoList() {

    return (
        <RootDiv>
            <VideoGroupDiv>
                {SIXTEEN_LIST.map((it) => {
                    return (
                        <VideoDiv>
                            <Link style={{height: '100%', width: '100%'}} to={`/live/detail/${it}`}>
                                <Player
                                    playsInline
                                    autoPlay
                                    src={TEST_VIDEO_URL_LIST[it % 14]}
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
