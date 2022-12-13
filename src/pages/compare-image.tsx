import React, {useEffect, useState} from "react";
import styled from "styled-components";
import FileStructure from "../components/FileStructure";
import {useLocation} from "react-router";
import axios from "axios";

const CompareImagePage = () => {
    const {state} = useLocation();
    const [image, setImage] = useState<Image>({} as Image);
    const [comment, setComment] = useState<string>('');
    const fetchImage = async () => {
        const res = await axios.get(`/dron/image/detail/${state.id}`);
        setImage(res.data);
        setComment(res.data.memo)
    };

    const modifyImage = async () => {
        const res = await axios.put(`/dron/image/modify/${state.id}`, {memo: comment});
        res.status == 200 ? alert('저장되었습니다.') : alert('저장에 실패했습니다.')
    }

    useEffect(() => {
        fetchImage();
    }, [state]);

    return (
        <Root>
            <Side>
                <FileStructure/>
            </Side>
            <VerticalFlexDiv>
                <CompareImageDiv>
                    <HalfCompareDiv>
                        <img style={{padding: '20px', width: '100%'}} src={image.image_url}/>
                    </HalfCompareDiv>
                    <HalfCompareDiv>
                        <img style={{padding: '20px', width: '100%'}} src={image.image_url}/>
                    </HalfCompareDiv>
                </CompareImageDiv>
                <CommentDiv>
                    <textarea onChange={(e) => setComment(e.target.value)} style={{width: '100%', height: '100%', marginBottom: '0.5rem'}} defaultValue={image.memo}></textarea>
                    <button onClick={() => modifyImage()} style={{width: '100%'}}>저장</button>
                </CommentDiv>
            </VerticalFlexDiv>
        </Root>
    )
}

export default CompareImagePage;

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #000000;
`

const Side = styled.div`
  min-width: 180px;
  width: 15%;
  background-color: #121212;
  margin: 20px;
`

const VerticalFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
`

const CompareImageDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #121212;
  margin: 20px 20px 20px 0px;
`

const HalfCompareDiv = styled.div`
  width: 50%;
`

const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
  background-color: #121212;
  margin: 0px 20px 20px 0px;
  padding: 20px;
`