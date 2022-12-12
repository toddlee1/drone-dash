import React, {useState} from "react";
import styled from "styled-components";
import DronMon from "./monitoring/DronMon";
import OxygenMon from "./monitoring/OxygenMon";
import OxygenChart from "./monitoring/OxygenChart";
import OxygenTable from "./monitoring/OxygenTable";


const Monitoring = (props: Props) => {
    const {dron, gas} = props;

    return (
        <RootDiv>
            <TopDiv>
                <HalfWidthDiv>
                    <DronMon dron={dron}/>
                </HalfWidthDiv>
                <HalfWidthDiv>
                    {gas && <OxygenMon gas={gas}/>}
                </HalfWidthDiv>
            </TopDiv>
            <BottomDiv>
                <HalfWidthDiv>
                    {gas && <OxygenChart gas={gas}/>}
                </HalfWidthDiv>
                <HalfWidthDiv>
                    {gas && <OxygenTable gas={gas}/>}
                </HalfWidthDiv>
            </BottomDiv>
        </RootDiv>
    )
}

export default Monitoring;

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #212121;
`

const TopDiv = styled.div`
  display: flex;
  height: 30%;
`

const HalfWidthDiv = styled.div`
  width: 50%;
`

const BottomDiv = styled.div`
  display: flex;
  height: 70%;
  margin: 0 0.5rem 0.5rem 0.5rem;
`