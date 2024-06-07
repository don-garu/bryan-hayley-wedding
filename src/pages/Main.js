import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import KakaoMap from "../components/kakaoMap";
import Calendar from "../components/calendar";
import ImageList from "../components/imageList";
import Account from "../components/account";
import Countdown from "../components/countdown";
import Contact from "../components/contact";

function Main() {
    const direction = "pictures/direction.jpg"
    const directionInfo = "pictures/direction-info.jpg"
    return (
        <div className="">
            <div className='main container'>
                <div className="row justify-content-md-center">
                    <div className="col col-md-2 col-lg-3">
                    </div>

                    <div className="col-md">
                        <div className='mainsection'>
                            <div>
                                <img
                                    src={"pictures/IMG_7131.jpg"}
                                    className='main-image' alt='t1'></img>
                            </div>
                            <div className='mainsection-text'>
                                <div className='mainsection-text-1'>결혼식에 초대합니다</div>
                                <div className='mainsection-text-2'>
                                    황준익 <span className='text2-inner'> & </span> 최현진
                                </div>
                                <div className='mainsection-text-3'>
                                    2024. 09. 29 일요일 오전 11시
                                </div>
                                <div className='mainsection-text-4'>
                                    상록 아트홀 (L층 그랜드볼룸)
                                </div>
                            </div>
                        </div>
                        <div className='invitation-section'>
                            <div className='invitation-section-text1'>INVITATION</div>
                            <div className='invitation-section-text2'>
                                각자 서로 다른 길을 걸어온 저희가<br/>
                                이제 부부의 연으로 한 길을 걸어가고자 합니다.<br/>
                                평생을 서로의 곁에서 함께하기로 약속하는<br/>
                                그 시작의 자리에 귀한 걸음 하시어 축복해주시면<br/>
                                더없는 격려와 기쁨으로 간직하겠습니다.
                            </div>
                            <div className='invitation-section-text3'>
                                황우일・정미옥<span className='text3-inner'>의 차남</span> 신랑 황준익
                            </div>
                            <div className='invitation-section-text3'>
                                최원철・이영주<span className='text3-inner'>의 장녀</span> 신부 최현진
                            </div>
                        </div>
                        <Contact></Contact>
                        <div className='gallery-section'>
                            <div className='gallery-section-text'>
                                GALLERY
                            </div>
                            <ImageList></ImageList>
                        </div>
                        <div className='calendar-section'>
                            <Calendar year={2024} month={8} highlightDay={29}></Calendar>
                            <Countdown></Countdown>
                        </div>
                        <div className='calendar-countdown-section'>
                        </div>
                        <div className='location-section'>
                            <div className='location-section-text1'>
                                LOCATION
                            </div>
                        </div>
                        <div className='location-map-section'>
                            <KakaoMap></KakaoMap>
                            <div className='location-map-section-text'>마커를 클릭하시면 카카오맵으로 이동합니다.</div>
                        </div>
                        <div className='location-direction-section'>
                            <div className='location-section-text1'>
                                약도
                            </div>
                            <img className="direction-image" src={direction} alt={''}/>
                            <img className="direction-image-2" src={directionInfo} alt={''}/>
                            <div className='location-map-section-text'>
                                하객 주차 1시간 30분 무료, 초과 30분당 1,700원
                            </div>
                        </div>
                        <Account></Account>
                    </div>
                    <div className="col col-md-2 col-lg-3">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
