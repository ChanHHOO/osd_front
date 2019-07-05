import React, { Component } from 'react'
import DesignerListContainer from 'containers/Designer/DesignerListContainer'
import ClientTemplate from 'templates/ClientTemplate';

class DesignerList extends Component {
    render() {
        return(
            <ClientTemplate>
                <DesignerListContainer/>
            </ClientTemplate>
        );

    }
}
export default DesignerList