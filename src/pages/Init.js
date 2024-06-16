import React, { useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import data from "../assets/image_data.json";

function Init() {
    const navigate = useNavigate();

    useEffect(() => {
        const loadImages = (urls) => {
            return Promise.all(
                urls.map(
                    (imageSource) =>
                        new Promise((resolve, reject) => {
                            const img = new Image();
                            img.src = imageSource;
                            img.onload = resolve;
                            img.onerror = reject;
                        })
                )
            );
        };

        loadImages(data.all)
            .then(() => {
                setTimeout(() => {
                    navigate('/main');
                }, 3000); // 모든 리소스가 로드된 후 5초 뒤에 화면 전환
            })
            .catch((error) => {
                console.error('Error loading images:', error);
            });
    }, [navigate]);

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
