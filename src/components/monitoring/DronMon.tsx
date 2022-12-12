import React, {useState} from "react";
import styled from "styled-components";


const DronMon = (props: Props) => {
    const {dron} = props;
    return (
        <RootDiv>
            <TopDiv>
                <HalfWidthDiv>
                    <img src={`${process.env.PUBLIC_URL}/img/drone.png`} style={{width: '3.5rem', height: '3.5rem', margin: '0 1rem 0 1rem'}} />
                    <TextGroupDiv>
                        <TextDiv>{dron.dron_name}</TextDiv>
                        <TextDiv>Camera</TextDiv>
                        <TextDiv>{dron.sensor_type}</TextDiv>
                    </TextGroupDiv>
                </HalfWidthDiv>
                <HalfWidthDiv>
                    <img src={`${process.env.PUBLIC_URL}/img/user.png`} style={{width: '3rem', height: '3rem', margin: '0 1rem 0 1rem'}} />
                    <TextGroupDiv>
                        <TextDiv>{dron.site_name}</TextDiv>
                        <TextDiv>{dron.admin_name}</TextDiv>
                    </TextGroupDiv>
                </HalfWidthDiv>
            </TopDiv>
            <BottomDiv>
                <img src={`${process.env.PUBLIC_URL}/img/empty-battery.png`} style={{width: '3rem', height: '3rem', margin: '0 1rem 0 1rem'}} />
                <TextGroupDiv direction="row">
                    <TextDiv style={{marginRight: '1rem'}}>Battery {dron.battery}%</TextDiv>
                    <TextDiv style={{marginRight: '1rem'}}>운영시간 {dron.optime}</TextDiv>
                    <TextDiv style={{marginRight: '1rem'}}>고도 {dron.lat}m</TextDiv>
                </TextGroupDiv>
            </BottomDiv>
        </RootDiv>
    )
}

export default DronMon;

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem 0 0;

`

const TopDiv = styled.div`
  display: flex;
  height: 50%;
`

const HalfWidthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const TextGroupDiv = styled.div<{direction?: 'column' | 'row'}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
`

const TextDiv = styled.div`
  color: white;
`

const BottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`