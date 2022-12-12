import React from "react";
import styled from "styled-components";

const CapturedImages = () => {
    return (
        <RootDiv>
            <ImageGroupDiv>
                <ImgButton>1</ImgButton>
                <ImgButton>2</ImgButton>
                <ImgButton>3</ImgButton>
            </ImageGroupDiv>
        </RootDiv>
    )
}

export default CapturedImages;

const RootDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #212121;
`

const ImageGroupDiv = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
`

const CapturedImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
`

const ImgButton = styled.button`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  background-color: transparent;
  border: solid 1px white;
  color: white;
`