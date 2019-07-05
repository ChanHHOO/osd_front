import React, { Component } from "react";
import styled from "styled-components";

const ImagePart = styled.div`
    width: 150px;
    height: 150px;
    background-color: #D6D6D6;
    border-radius: 50%;
    position: absolute;
    top:171px;
    left:9px;
    & img {
      width: 100%;
      height: 100%;
    }
`;

const TextGruop = styled.div`
    width: 527px;
    height: 130px;
    background-color:#EFEFEF;
    border-radius: 15px 15px 15px 15px;
    position: absolute;
    top:181px;
    left:69px;
    font-family: Noto Sans KR;
    
    .userName{
        
        top:15px;
        left:114px;
        font-size:20px;
        position:absolute;
        color:#707070;
        font-weight: 500;

    }
    .description{
        top:51px;
        left:114px;
        font-size:20px;
        position:absolute;
        color:#707070;
        font-weight: 100;
    }
    .cate{
        top:15px;
        left:462px;
        font-size:20px;
        position:absolute;
        color:#FF0000;
        
    }
    .counts{
        top:93px;
        left:357px;
        font-size:15px;
        color:#707070;
        position:absolute;
    }
    
`;



class Designer extends Component{
    render(){
        const designer = this.props.data;
        const designCount = 1, groupdesignCount = 2;//임시로 지정한 값. 
        return(
            <div>
                <TextGruop>
                    <div className="userName">진아진아진</div>
                    <div className="description">descript </div>
                    <div className="cate">패션</div>
                    <div className="counts">디자인:{designCount}개 &nbsp; 그룹:{groupdesignCount}개</div>
                </TextGruop>
                <ImagePart/>
            </div>

        )
    }
    
}
export default Designer