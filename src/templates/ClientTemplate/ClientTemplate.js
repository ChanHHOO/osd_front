<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import React, { Component, Fragment } from 'react'
import HeaderContainer from "containers/Commons/HeaderContainer"
import Footer from "components/Commons/Footer"
import styled from 'styled-components'
import MenuContext from "Global/Context/GlobalContext"

const ContentContainer = styled.div`
    top: 55px;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    &.hidemenu{
        top: 0px;
    }
    -webkit-transition: all 0.45s;
    -moz-transition: all 0.45s;
    -ms-transition: all 0.45s;
    -o-transition: all 0.45s;
    transition: all 0.45s;
`

class ClientTemplate extends Component {
    state = { scroll: false, whensmall: 256, hidemenu: false, prevScroll: 0 }
    checkIsOutScroll = (obj) => {
        this.setState({ scroll: true })
        setTimeout(() => { this.setState({ scroll: false }) }, 1500);
    }
    checkScrollUp = (obj) => {
        const currentScrollPos = obj.scrollTop
        const prevScrollPos = this.state.prevScroll
        const { hidemenu, whensmall } = this.state

        if (hidemenu === false) {
            if (currentScrollPos > whensmall * 2) {
                if (prevScrollPos < currentScrollPos) { // console.log("hide")
                    this.setState({ hidemenu: true })
                }
            }
        } else {
            if (prevScrollPos > currentScrollPos) { // console.log("show")
                this.setState({ hidemenu: false })
            }
        }
        this.setState({ prevScroll: currentScrollPos })
    }
    handleScroll = (e) => {
        const obj = e.target
        this.checkScrollUp(obj)
        this.checkIsOutScroll(obj)
    }
    render() {
        return (
            <Fragment>
                <MenuContext.Provider value={this.state.hidemenu}>
                    <HeaderContainer />
                    <ContentContainer className={
                        (this.state.scroll ? "partial-scroll-on" : "partical-scroll-none") +
                        (this.state.hidemenu ? " hidemenu" : "")} onScroll={this.handleScroll}>

                        <div style={{ width: "1920px" }}>
                            {this.props.children}
                            <Footer />
                        </div>

                    </ContentContainer>
                </MenuContext.Provider>
            </Fragment>)
    }
}

<<<<<<< HEAD
export default ClientTemplate
=======
import React, { Component } from "react";
import HeaderContainer from "containers/Commons/HeaderContainer";
import Footer from "components/Commons/Footer";

class ClientTemplate extends Component {
  componentDidMount() {
    console.log("isActive", this.props.isActive);
  }
  onClose = e => {
    if (this.props.isActive !== "INIT") {
      this.props.SetActive("INIT");
    }
  };

  render() {
    return (
      <div style={{ position: "relative" , paddingBottom: "33px", paddingTop: "60px"}} onClick={this.onClose}>
        <HeaderContainer active={this.props.isActive} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default ClientTemplate;
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
export default ClientTemplate
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
