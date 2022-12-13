import React from "react";
import styled from "styled-components";
import {formatDateTime, getBgColor} from "../../utils/util";

type CustomProps = {
    gas: GasDataType[];
}

const OxygenTable = (props: CustomProps) => {
    const {gas} = props;
    return (
        <RootDiv>
            <TableDiv>
                <table style={{width: '100%', color: 'white'}}>
                    <thead style={{borderBottom: '2px solid white'}}>
                    <th>No.</th>
                    <th>산소 농도</th>
                    <th>시간</th>
                    </thead>
                    <tbody style={{textAlign: 'center'}}>
                    {
                        gas.map((g, idx) =>
                            <tr style={{borderBottom: '0.5px solid white'}}>
                                <td>{idx + 1}</td>
                                <td style={{color: getBgColor(Number(g.oxy))}}>{g.oxy}</td>
                                <td>{formatDateTime(g.sensed)}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </TableDiv>
        </RootDiv>
    )
}

export default OxygenTable;

const RootDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const TableDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`
