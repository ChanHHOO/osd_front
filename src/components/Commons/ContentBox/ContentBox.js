<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
import React, { Component } from 'react'
import styled from 'styled-components'
import opendesign_style from "opendesign_style"

const Container = styled.div`
    @media only screen and (max-width: 767px) and (min-width: 320px){
        padding: 0 20px;
        width: ${opendesign_style.gridContent.mobile};
    }
    @media only screen and (max-width: 991px) and (min-width: 768px) and (min-height: 320px){
        width: ${opendesign_style.gridContent.tablet};
    }
    @media only screen and (min-width: 992px){
        width: ${opendesign_style.gridContent.computer};
    }
    @media only screen and (max-width: 1919px) and (min-width: 1200px){
        width: ${opendesign_style.gridContent.largeScreen};
    }
    @media only screen and (max-width: 1920px){
        width: ${opendesign_style.gridContent.largeScreen};
    }
`
class ContentBox extends Component {
    render() {
        return (
            <Container className={this.props.className}>{this.props.children}</Container>
        )
    }
}

<<<<<<< HEAD
export default ContentBox
=======
import React, { Component } from 'react';
import styled from "styled-components";
import StyleGuide from "StyleGuide";

const Container = styled.div`
  margin: 0 auto;
  @media only screen and (max-width: 767px) and (min-width: 320px){
    padding: 0 20px;
    width: ${StyleGuide.gridContent.mobile};
  }
  @media only screen and (max-width: 991px) and (min-width: 768px){
    width: ${StyleGuide.gridContent.tablet};
  }
  @media only screen and (min-width: 992px){
    width: ${StyleGuide.gridContent.computer};
  }
  @media only screen and (max-width: 1919px) and (min-width: 1200px){
    width: ${StyleGuide.gridContent.largeScreen};
  }
  @media only screen and (min-width: 1920px){
    width: ${StyleGuide.gridContent.largeScreen};
  }
`

class ContentBox extends Component {
  render() {
    return(
      <Container className={this.props.className}>
        {this.props.children}
      </Container>
    );
  }
}

export default ContentBox;
>>>>>>> d451c5fa80bf0a4cd1c0565cf5cff1f3b0edae71
=======
export default ContentBox
>>>>>>> 390cdf52ed7ead96e5630749dc83fb05a6093b5f
