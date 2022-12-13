import React from 'react';
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import DetailPage from "./pages/detail";
import MappingPointPage from "./pages/mapping-point";
import CompareImagePage from "./pages/compare-image";


const CustomLayout = () => {
    return (
        <Root>
            <DoosanLogo>
                <img style={{marginLeft: '1rem'}} src={`${process.env.PUBLIC_URL}/img/doosan.png`}/>
            </DoosanLogo>
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
                    <Route path="/image/:id" element={<CompareImagePage/>}></Route>
                </Routes>
            </Body>
            <Foot>
                <img style={{marginRight: '1rem'}} src={`${process.env.PUBLIC_URL}/img/sammi-logo.png`}/>
            </Foot>
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

const DoosanLogo = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
`

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
  background-color: #121212;
`

const LogoImg = styled.img`
  height: 4rem;
  object-fit: contain;
  margin: 7px 0 0 0.5rem;
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
  height: calc(90vh - 20px - 3rem);
  min-height: 900px;
  min-width: 1750px;
`

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 5vh;
  background-color: #121212;
`
