// import {ReactTree} from '@naisutech/react-tree'
import styled from "styled-components";


const RecordingList = () => {
    return (
        <TreeDiv>
            <FileTreeTable>
                <th>Video</th>
                <tr>
                    <td>화력발전소</td>
                </tr>
                <tr>
                    <td>화력발전소</td>
                </tr>
            </FileTreeTable>
        </TreeDiv>
    );
}

export default RecordingList;

const TreeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1
`

const FileTreeTable = styled.table`
  width: 100%;
`