import React, {useEffect, useState} from "react";
import styled from "styled-components";
import FileStructure from "../components/FileStructure";
import {useLocation} from "react-router";
import axios from "axios";

const CompareImagePage = () => {
    const {state} = useLocation();
    const [image, setImage] = useState<Image>({} as Image);
    const fetchImage = async () => {
        const res = await axios.get(`/dron/image/detail/${state.id}`);
        setImage(res.data);
    };

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
  width: 100%;
  height: 30%;
  background-color: #121212;
  margin: 0px 20px 20px 0px;
`