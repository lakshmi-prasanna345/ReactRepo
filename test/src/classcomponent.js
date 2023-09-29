import React from "react";
 class Header extends React.Component{
    
    render(){
        return(
            <center>
                <h2>{this.props.name}</h2>
            </center>
        )
    }
 }
 export default Header;