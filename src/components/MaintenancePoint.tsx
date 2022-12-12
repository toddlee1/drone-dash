import React from 'react';
import {PieChart, Pie, Cell, Label, ResponsiveContainer} from "recharts";

import styled from "styled-components";
import CustomBarChart from "./CustomBarChart";

function MaintenancePoint(props: Props) {
    const {dron, gas} = props;

    return (
        <CardDiv>
            <GaugeDiv>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={[
                                {
                                    name: "Value",
                                    value: dron.rate1
                                },
                                {
                                    name: "Rest",
                                    value: 100 - dron.rate1
                                }
                            ]}
                            innerRadius="70%"
                            outerRadius="95%"
                        >
                            <Cell key="cell-1" fill="#ADE792"/>
                            <Cell key="cell-1" fill="#344D67"/>
                            <Label content={<CustomLabel labelText="도장" value={dron.rate1}/>} position="center"/>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </GaugeDiv>
            <GaugeDiv>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={[
                                {
                                    name: "Value",
                                    value: dron.rate2
                                },
                                {
                                    name: "Rest",
                                    value: 100 - dron.rate2
                                }
                            ]}
                            innerRadius="70%"
                            outerRadius="95%"
                        >
                            <Cell key="cell-1" fill="#F3ECB0"/>
                            <Cell key="cell-1" fill="#344D67"/>
                            <Label content={<CustomLabel labelText="용접" value={dron.rate2}/>} position="center"/>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </GaugeDiv>
            <BarDiv>
                {gas && <CustomBarChart dron={dron} gas={gas}/>}
            </BarDiv>
        </CardDiv>
    );
}

export default MaintenancePoint;

const CardDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #212121;
`

const GaugeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
`

const BarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34%;
  height: 100%;
`

const CustomLabel = ({viewBox, labelText, value}: any) => {
    const {cx, cy} = viewBox;
    return (
        <g>
            <text
                x={cx}
                y={cy-20}
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central"
                alignmentBaseline="middle"
                fill="#ffffff"
                fontSize="20"
                fontWeight="500"
            >
                {labelText}
            </text>
            <text
                x={cx}
                y={cy+15}
                className="recharts-text recharts-label"
                textAnchor="middle"
                dominantBaseline="central"
                alignmentBaseline="middle"
                fill="#ffffff"
                fontSize="30"
                fontWeight="500"
            >
                {value} %
            </text>
        </g>
    );
};
