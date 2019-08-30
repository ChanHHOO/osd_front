import React, {Component} from 'react';
import styled from 'styled-components'

// import ScrollList from "components/Commons/ScrollList"

//component
import Design from "components/Designs/Design"
import Group from "components/Groups/Group";
import Designer from "components/Designers/Designer"
import ScrollList from "components/Commons/ScrollList"
import Loading from 'components/Commons/Loading'

//css
const MypageBodyComp = styled.div`
    font-family: Noto Sans KR;
    .MypageCategory{
        display:flex;
        justifyContent: space-start;
        padding-top:60px;
        
        font-size:20px;
        color:#707070;
        
    }
    .selectedCate{
        opacity:1.0;
    }
    .unSelectedCate{
        opacity:0.5;
    }
    .interested{
        position:relative;
        font-size:20px;
        color:#707070;
        padding-top:56px;

    }

`;

var pastCate = 0;//for change category
class MypageBody extends Component{
    state = {
        categorys:['디자인', '그룹', '좋아요'],
        selectCate:"unSelectedCate",
        cateIndex:0,
        page: 0,
        uid: undefined,

    }
    componentDidMount() {
        var selectedCate = document.getElementById(0);
        selectedCate.className = selectedCate.className.replace("unSelectedCate", "selectedCate");
        this.getInitData()
    }

    getInitData() {
        this.getLikeDesignList(true);
        this.getLikeDesignerList(true);
        this.getMyDesignListRequest(true);
        this.getMyGroupListRequest(true);
    }

    getLikeDesignList = async (isInit) => {
        console.log(1);
        await this.setState({ page: isInit ? 0 : this.state.page + 1 });
        this.props.GetMyLikeDesignRequest(this.props.token, this.state.page);
    };

    getLikeDesignerList = async (isInit) =>{
        await this.setState({page:isInit ? 0 : this.state.page + 1});
        this.props.GetMyLikeDesignerRequest(this.props.token, this.state.page);
    }


    getMyGroupListRequest = async (isInit) =>{
        await this.setState({page:isInit ? 0 : this.state.page + 1});
        this.props.GetMyGroupListRequest(this.props.token, this.state.page);
    }
    getMyDesignListRequest = async (isInit)=>{
        await this.setState({page:isInit ? 0 : this.state.page + 1});
        this.props.GetMyDesignListRequest(this.props.token, this.state.page)
    }


    changeCategory = (index)=>{
        //unselected to selected
        var selectedCate = document.getElementById(index);
        if(selectedCate.className === "selectedCate"){
            return;
        }
        selectedCate.className = selectedCate.className.replace("unSelectedCate", "selectedCate");

        //selected to unselected
        var unSelectedCate = document.getElementById(pastCate);
        unSelectedCate.className = unSelectedCate.className.replace("selectedCate", "unSelectedCate");


        pastCate = index;
        this.setState({cateIndex:index});
    }

    render(){
        const {MyLikeDesign, MyLikeDesigner, MyLikeDesignAdded, MyLikeDesignerAdded,MyGroup,MyGroupAdded, MyDesign,MyDesignAdded } = this.props;
        const DesignProps = { cols: 5, width: "330px", height: "330px", marginRight: "63px", marginBottom: "80px", marginRightLast: "8px", marginBottomLast: "26px"};
        const GroupProps = { cols: 3, width: "902", height: "230px", marginRight: "94px", marginBottom: "60px", marginRightLast: "11px", marginBottomLast: "179px"};

        const catePadding = ['70px', '55px', '60px'];
        return(
            <MypageBodyComp>
                <div className="MypageCategory">
                    {this.state.categorys.map((category, index) => {
                        return(
                            <div id={index} className="unSelectedCate" style={{paddingLeft:catePadding[index],cursor: 'pointer'}} key={index} onClick={this.changeCategory.bind(this, index)} >{category}</div>
                        )
                    })}
                </div>
                {this.state.cateIndex === 0 &&
                <div className="compWrapper" style={{paddingTop:"35px"}}>
                    <>
                        {this.props.status === "INIT" ?
                            <Loading /> :
                            <ScrollList cols={DesignProps.cols}
                                        width={DesignProps.width} height={DesignProps.height} marginRight={DesignProps.marginRight} marginBottom={DesignProps.marginBottom} marginRightLast={DesignProps.marginRightLast} marginBottomLast={DesignProps.marginBottomLast}
                                        page={this.state.page} ListComponent={Design} dataList={MyDesign} dataListAdded={MyDesignAdded} getListRequest={this.getMyDesignListRequest} />}
                    </>
                </div>}

                {this.state.cateIndex === 1 &&
                <div className="compWrapper" style={{paddingTop:"35px"}}>
                    <>
                        {this.props.status === "INIT" ?
                            <Loading /> :
                            <ScrollList cols={DesignProps.cols}
                                        width={DesignProps.width} height={DesignProps.height} marginRight={DesignProps.marginRight} marginBottom={DesignProps.marginBottom} marginRightLast={DesignProps.marginRightLast} marginBottomLast={DesignProps.marginBottomLast}
                                        page={this.state.page} ListComponent={Design} dataList={MyGroup} dataListAdded={MyGroupAdded} getListRequest={this.getMyGroupListRequest} />}
                    </>
                </div>
                }
                {this.state.cateIndex === 2 &&
                <div className="compWrapper">
                    <div className="interested" style={{display:"flex", justifyContent: "space-start"}}>
                        <div style={{paddingLeft:"67px", fontWeight:"Medium"}}>관심있는 디자인</div>
                        <div style={{paddingLeft:"1600px", fontWeight:"300"}}>모두 보기</div>
                    </div>
                    <div style={{paddingTop:'25px'}}>
                        {this.props.status === "INIT" ?
                            <Loading /> :
                            <ScrollList cols={DesignProps.cols}
                                        width={DesignProps.width} height={DesignProps.height} marginRight={DesignProps.marginRight} marginBottom={DesignProps.marginBottom} marginRightLast={DesignProps.marginRightLast} marginBottomLast={DesignProps.marginBottomLast}
                                        page={this.state.page} ListComponent={Design} dataList={MyLikeDesign} dataListAdded={MyLikeDesignAdded} getListRequest={this.getLikeDesignList} />}
                    </div>
                    <div className="interested" style={{paddingLeft:"67px",paddingTop:"75px"}}>관심있는 그룹</div>
                    <div style={{display:"flex", justifyContent: "space-start", paddingTop:'25px'}}>
                        <div style={{paddingLeft:"10px"}}><Group data={{children:{m_img:null}, title:"", child_update_time:""}}/></div>
                        <div style={{paddingLeft:"95px"}}><Group data={{children:{m_img:null}, title:"", child_update_time:""}}/></div>

                    </div>
                    <div style={{display:"flex", justifyContent: "space-start", paddingTop:'60px'}}>
                        <div style={{paddingLeft:"10px"}}><Group data={{children:{m_img:null}, title:"", child_update_time:""}}/></div>
                        <div style={{paddingLeft:"95px"}}><Group data={{children:{m_img:null}, title:"", child_update_time:""}}/></div>

                    </div>

                    <div style={{display:"flex", justifyContent: "space-start", paddingTop:'67px'}}>
                        <div style={{paddingLeft:"10px"}}><Group data={{children:{m_img:null}, title:"", child_update_time:""}}/></div>
                        <div style={{paddingLeft:"95px"}}><Group data={{children:{m_img:null}, title:"", child_update_time:""}}/></div>

                    </div>
                    <div className="interested" style={{paddingLeft:"67px",paddingTop:"67px"}}>관심있는 디자이너</div>
                    <>
                        {this.props.status === "INIT" ?
                            <Loading /> :
                            <ScrollList cols={DesignProps.cols}
                                        width={DesignProps.width} height={DesignProps.height} marginRight={DesignProps.marginRight} marginBottom={DesignProps.marginBottom} marginRightLast={DesignProps.marginRightLast} marginBottomLast={DesignProps.marginBottomLast}
                                        page={this.state.page} ListComponent={Design} dataList={MyLikeDesigner} dataListAdded={MyLikeDesignerAdded} getListRequest={this.getLikeDesignerList} />}
                    </>
                </div>


                }

            </MypageBodyComp>
        )
    }

}

export default MypageBody;