import React, { Component } from 'react';

export default class UsuarioDetalhes extends Component{

    componentDidMount(){
        fetch("http://15.228.57.175:5000/userData", {
            method: "POST",
            crossDomain: "true",
            headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
                "Acess-Control-Allow-Origin":"*",
            },
            body: JSON.stringify({
                token
            })
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data, "userData")
        })
    }


    render(){
        return(
            <div>
                Name: <h1>aaaa</h1>
                Email: <h1>saasa@gmail.com</h1>
            </div>
        )

        
    }






}