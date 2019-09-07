import React, { Component } from 'react'
import styled from 'styled-components'
import zoom from "source/zoom.svg"

const SearchContainer = styled.div`
    display: ${props => props.visible};
    background-color: #FFFFFF;
    border-radius: 20px;
    border: 1.5px solid #707070;
    width: 327px;
    height: 36px;
    background: url(${zoom});
    background-size: 21.49px 21.49px;
    background-repeat: no-repeat;
    background-position: right 12.7px top 4px;
    &:focus{
        outline: 1.5px solid red;
    }
    input {
        outline: none;
        width: 280px;
        border: none;
        margin: 0px 10px;
    }
    .shadow_button{
        position: absolute;
        transform: translate( 285px, -2px);
        width:36px;
        height:36px;
        cursor: pointer;
    }
`;
<<<<<<< HEAD
=======

>>>>>>> 1db583f755bb9a44f5c56764780864f91885f910
class SearchForm extends Component {
    state = {
        searchKeyword: "",
    };
<<<<<<< HEAD

    goSearch = () => {
        const addrText = window.location.href.toString();
        let thisCate = "/all";
        if(addrText.indexOf('/group')!=-1)
=======
    _search = () => { };
    _handleKeyDown = (e) => {
        const addrText = window.location.href.toString();
        let thisCate = "#all";
        if(addrText.indexOf('/group')!==-1)
        {
            thisCate="#group"
        }
        else if(addrText.indexOf('/designer')!==-1)
        {
            thisCate="#designer"
        }
        else if(this.addrText.indexOf('/design')!==-1)
        {
            thisCate="#design"
        }
        window.location.href = '/search' + thisCate;
    }

    goSearch = () => {
        const addrText = window.location.href.toString();
        let thisCate = "#all";
        if(addrText.indexOf('/group')!==-1)
>>>>>>> 1db583f755bb9a44f5c56764780864f91885f910
        {
            thisCate="/group"
        }
        else if(addrText.indexOf('/designer')!==-1)
        {
            thisCate="/designer"
        }
<<<<<<< HEAD
        else if(addrText.indexOf('/design')!=-1)
=======
        else if(this.addrText.indexOf('/design')!==-1)
>>>>>>> 1db583f755bb9a44f5c56764780864f91885f910
        {
            thisCate="/design"
        }
<<<<<<< HEAD
        window.location.href = '/search'+thisCate+'/null/'+this.state.searchKeyword;
    };
    handleChange = (e)=>{
        this.setState({searchKeyword:e.target.value});
        console.log(this.state.searchKeyword);
=======
        window.location.href = '/search' + thisCate;
>>>>>>> 1db583f755bb9a44f5c56764780864f91885f910
    }
    handleKeyDown = (e)=>{
        if(e.keyCode === 13){
            this.goSearch();
        }

    }
    render() {
        return (
            <SearchContainer visible={this.props.visible === 1 ? "block" : "none"} onKeyDown={this.handleKeyDown}>
                <div className="shadow_button" onClick={this.goSearch} />

<<<<<<< HEAD
                <input type="text" placeholder="Search..." maxLength = "100" onChange={this.handleChange} value={this.state.searchKeyword}/>
=======
                <input type="text" placeholder="Search..." maxLength="100" />
>>>>>>> 1db583f755bb9a44f5c56764780864f91885f910

            </SearchContainer>)
    }

}


export default SearchForm