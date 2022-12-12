import React, {useRef} from 'react';
import styled from "styled-components";
import FileStructure from "../components/FileStructure";
import VideoList from "../components/VideoList";


const MainPage = () => {
    return (
        <Root>
            <Side>
                <FileStructure/>
            </Side>
            <Main>
                <VideoList />
            </Main>
        </Root>
    )
}

export default MainPage;

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

const Main = styled.div`
  min-width: 780px;
  width: 85%;
  min-width: 1090px;
  background-color: #121212;
  margin: 20px 20px 20px 0px;
`
