import React, { Component } from 'react'

const withSample=(WrappedComponent)=>{
    return class AnotherHigher extends Component{

        render(){
            if(!WrappedComponent){
                return <div>NO COMPONENT WAS PASSED OOPS</div>
            }else{
                return <WrappedComponent  />
            }
            
        }
    }
}

export default withSample;