import React from "react";
import styled from "styled-components";

const VerticalBarGauge = (props: {latestValue: number}) => {
    const {latestValue} = props;
    if (latestValue <= 18.1) return (
        <BarGroupDiv>
            <BarDiv/>
            <BarDiv/>
            <BarDiv/>
            <BarDiv/>
            <BarDiv backgroundColor="#ff0000"/>
        </BarGroupDiv>
    );
    else if (latestValue > 18.1 && latestValue < 20.3) return (
        <BarGroupDiv>
            <BarDiv/>
            <BarDiv/>
            <BarDiv backgroundColor="#2bfe00"/>
            <BarDiv backgroundColor="#2bfe00"/>
            <BarDiv backgroundColor="#2bfe00"/>
        </BarGroupDiv>
    );
    else if (latestValue >= 20.3 && latestValue < 21.6) return (
        <BarGroupDiv>
            <BarDiv backgroundColor="#0091ff"/>
            <BarDiv backgroundColor="#0091ff"/>
            <BarDiv backgroundColor="#0091ff"/>
            <BarDiv backgroundColor="#0091ff"/>
            <BarDiv backgroundColor="#0091ff"/>
        </BarGroupDiv>
    );
    else return <></>;
}


const CustomBarChart = (props: Props) => {
    const {gas} = props;
    const latestValue = Number(gas?.slice(-1)[0]?.oxy);

    return (
        <RootDiv>
            {latestValue && <VerticalBarGauge latestValue={latestValue} />}
            <StaticGroupDiv>
                <StaticTitleDiv>산소 농도</StaticTitleDiv>
                <StaticValueDiv>{latestValue} %</StaticValueDiv>
            </StaticGroupDiv>
            <DottedBarImg src={`${process.env.PUBLIC_URL}/img/dotted-bar-with-value.png`} />
        </RootDiv>
    )
}

export default CustomBarChart;

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const DottedBarImg = styled.img`
  width: 80%;
  height: 2.5rem;
`


const BarGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`

const BarDiv = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || "#616161"};
  width: 80%;
  height: 0.8rem;
  margin-bottom: 0.4rem;
`

const StaticGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

const StaticTitleDiv = styled.div`
  font-size: 0.8rem;
  color: white;
`

const StaticValueDiv = styled.div`
  font-size: 1.5rem;
  color: white;
`

const Hr = styled.hr`
  border: none;
  border-top: 0.5rem dotted black;
  color: black;
  height: 1px;
  width: 50%;
`
