import React from 'react';
import { ReactTyped } from "react-typed";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Init() {
    return (
        <div className="main container">
            <div className='row justify-content-md-center'>
                <div className="col col-md-2 col-lg-3"/>
                <div className="init-section">
                    <ReactTyped strings={["황준익 ♥ 최현진의 결혼식에 초대합니다."]} typeSpeed={80}/>
                </div>
                <div className="col col-md-2 col-lg-3"/>
            </div>
        </div>
    );
}

export default Init;
