import React, {useState} from "react";
import styled from "styled-components";


const DronMon = (props: Props) => {
    const {dron} = props;
    const getBatteryImage = (capacity: number) => {
        if (capacity == 100) return `${process.env.PUBLIC_URL}/img/battery100-white.png`;
        else if (capacity < 100 && capacity >= 80) return `${process.env.PUBLIC_URL}/img/battery80-white.png`;
        else if (capacity < 80 && capacity >= 60) return `${process.env.PUBLIC_URL}/img/battery60-white.png`;
        else if (capacity < 60 && capacity >= 40) return `${process.env.PUBLIC_URL}/img/battery40-white.png`;
        else if (capacity < 40 && capacity >= 20) return `${process.env.PUBLIC_URL}/img/battery20-white.png`;
        else if (capacity < 0 && capacity >= 20) return `${process.env.PUBLIC_URL}/img/battery0-white.png`;
        else return `${process.env.PUBLIC_URL}/img/battery0-white.png`;
    }
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
                <img src={getBatteryImage(dron.battery)} style={{width: '3rem', height: '3rem', margin: '0 1rem 0 1rem'}} />
                <TextGroupDiv direction="row">
                    <TextDiv style={{marginRight: '1rem'}}>Battery {dron.battery}%</TextDiv>
                    <TextDiv style={{marginRight: '1rem'}}>현재전압 {21.2 + (dron.battery / 25)}v</TextDiv>
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