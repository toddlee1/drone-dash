import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import DetailPage from "./pages/detail";
import MappingPointPage from "./pages/mapping-point";


const CustomLayout = () => {
    return (
        <Root>
            <Head>
                <LogoImg src={`${process.env.PUBLIC_URL}/img/fmpd-logo.png`}/>
                <IconGroupDiv>
                    <IconImg src={`${process.env.PUBLIC_URL}/img/enter.png`}/>
                    <IconImg src={`${process.env.PUBLIC_URL}/img/settings.png`}/>
                </IconGroupDiv>
            </Head>
            <Body>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/detail/:id" element={<DetailPage/>}></Route>
                    <Route path="/mapping/:id" element={<MappingPointPage/>}></Route>

                    {/*<Route path="*" element={<NotFound />}></Route>*/}
                </Routes>
            </Body>
        </Root>
    )
}

export default CustomLayout;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  min-width: 1330px;
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(5vh + 20px);
  background-color: #121212;
`

const LogoImg = styled.img`
  //width: 10rem;
  height: 4rem;
  object-fit: contain;
  margin: 7px 0 0 1rem;
`

const IconGroupDiv = styled.div`
  height: 2rem;
  margin-right: 1rem;
`

const IconImg = styled.img`
  height: 100%;
  margin-right: 1rem;
`

const Body = styled.div`
  height: calc(95vh - 20px);
`
