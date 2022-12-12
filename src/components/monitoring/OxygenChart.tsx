import React from "react";
import styled from "styled-components";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


type CustomProps = {
    gas: GasDataType[];
}

const OxygenChart = (props: CustomProps) => {
    const {gas} = props;

    return (
        <RootDiv>
            <ResponsiveContainer height="100%">
                <LineChart data={gas}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <YAxis type="number" domain={['dataMin - 5', 'dataMax + 5']} />
                    <XAxis dataKey="sensed" hide={true}/>
                    <Tooltip/>
                    <Line type="monotone" dataKey="oxy" stroke="#8884d8" strokeWidth={3}/>
                </LineChart>
            </ResponsiveContainer>
        </RootDiv>
    )
}

export default OxygenChart;

const RootDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1rem 0 0;
`