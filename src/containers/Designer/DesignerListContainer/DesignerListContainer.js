import React, { Component } from 'react';
import Designer from "components/Designers/Designer";

class DesignerListContainer extends Component{
    render(){
        return(
            <Designer {...this.props}/>
        )
    }

}
export default DesignerListContainer;