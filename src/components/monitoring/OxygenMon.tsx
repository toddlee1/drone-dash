import React, {useEffect} from "react";
import styled from "styled-components";

type CustomProps = {
    gas: GasDataType[];
}

const ColoredCard = (props: { latestData: GasDataType }) => {
    const {latestData} = props;
    const oxy = Number(latestData.oxy);
    if (oxy <= 18.1 || oxy >= 23.5) return (
        <>
            <img src={`${process.env.PUBLIC_URL}/img/o2alert.png`}
                 style={{width: '6rem', height: '6rem', marginRight: '1.5rem'}}/>
            <TextDiv style={{color: '#ff0000'}}><b>출입불가</b></TextDiv>
        </>
    )
    else if (oxy > 18.1 && oxy < 20.3) return (
        <>
            <img src={`${process.env.PUBLIC_URL}/img/o2green.png`}
                 style={{width: '6rem', height: '6rem', marginRight: '1.5rem'}}/>
            <TextDiv style={{color: '#2bfe00'}}><b>출입허용</b></TextDiv>
        </>
    )
    else if (oxy >= 21.5 && oxy < 23.5) return (
        <>
            <img src={`${process.env.PUBLIC_URL}/img/o2green.png`}
                 style={{width: '6rem', height: '6rem', marginRight: '1.5rem'}}/>
            <TextDiv style={{color: '#2bfe00'}}><b>출입허용</b></TextDiv>
        </>
    )
    else return (
            <>
                <img src={`${process.env.PUBLIC_URL}/img/o2blue.png`}
                     style={{width: '6rem', height: '6rem', marginRight: '1.5rem'}}/>
                <TextDiv style={{color: '#0091ff'}}><b>출입허용</b></TextDiv>
            </>
        )
}

const OxygenMon = (props: CustomProps) => {
    const {gas} = props;
    const latestGas = gas.slice(-1)[0];

    return (
        <RootDiv>
            {latestGas && <ColoredCard latestData={latestGas}/>}
        </RootDiv>
    )
}

export default OxygenMon;

const RootDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const TextDiv = styled.div`
  font-size: 2rem;
  color: #61dafb;
`