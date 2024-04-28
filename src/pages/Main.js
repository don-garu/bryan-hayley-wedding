import React, { useState } from 'react';
import data from '../assets/image_data.json';
import pinIcon from '../assets/location-pin.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import '../App.css';
import ImageModal from '../components/imageModal';
import KakaoMap from "../components/kakaoMap";
import Calendar from "../components/calendar";
import ReactCalendar from "../components/calendar";

function Main() {
    // state for image modal
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const navermaps = useNavermaps()

    // const map = document.querySelector('.asd');
    //
    // map.addEventListener('click', () => {
    //     window.open('https://kko.to/LyUFsoozNk')
    // });

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handleRotationRight = () => {
        const totalLength = data.data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data.data[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handleRotationLeft = () => {
        const totalLength = data.data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data.data[totalLength - 1].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.data.filter((item) => {
            return data.data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

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
                                    src="https://dave-khim-aws-bucket-public.s3.ap-northeast-2.amazonaws.com/test/love-tenderness-couple-s-crossed-hands.jpg"
                                    className='main-image' alt='t1'></img>
                            </div>
                            <div className='mainsection-text'>
                                <div className='mainsection-text-1'>결혼식에 초대합니다</div>
                                <div className='mainsection-text-2'>
                                    황준익 <span className='text2-inner'> & </span> 최현진
                                </div>
                                <div className='mainsection-text-3'>2024. 09. 29 일요일 오전 11시<br/>상록 아트홀 (그랜드볼룸홀)</div>
                            </div>
                        </div>
                        <div className='invitation-section'>
                            <div className='invitation-section-text1'>INVITATION</div>
                            <div className='invitation-section-text2'>
                                저희 두 사람이 사랑과 믿음으로<br/>
                                한 가정을 이루게 되었습니다.<br/>
                                바쁘시더라도 부디 오셔서<br/>
                                저희의 앞날을 축복해 주시고<br/>
                                격려해 주시면 감사하겠습니다.
                            </div>
                            <div className='invitation-section-text3'>
                                황우일・정미옥<span className='text3-inner'>의 차남</span> 신랑 황준익
                            </div>
                            <div className='invitation-section-text3'>
                                최원철・이영주<span className='text3-inner'>의 장녀</span> 신부 최현진
                            </div>
                        </div>
                        <div className='gallery-section'>
                            <div className='gallery-section-text'>
                                GALLERY
                            </div>
                        </div>
                        <div>
                            <div className='gallery-image-list-wrapper row'>
                                {data.data.map((item, index) => (
                                    <div key={index} className='col-4'>
                                        <img className='gallery-image' src={item.thumb_image_link} alt={item.text}
                                             onClick={() => handleClick(item, index)}/>
                                    </div>
                                ))}
                            </div>
                            {clickedImg && <ImageModal
                                clickedImg={clickedImg}
                                handleRotationRight={handleRotationRight}
                                handleRotationLeft={handleRotationLeft}
                                setClickedImg={setClickedImg}
                            />}
                        </div>
                        <div className='calendar-section'>
                            <ReactCalendar></ReactCalendar>
                        </div>
                        <div className='location-section'>
                            <div className='location-section-text1'>
                                LOCATION
                            </div>
                        </div>
                        <div className='location-map-section'>
                            <MapDiv style={{width: '100%', height: '350px'}}>
                                <KakaoMap></KakaoMap>
                            </MapDiv>
                            <div className='location-map-section-text'>마커를 클릭하시면 카카오맵으로 이동합니다.</div>
                        </div>
                        <div className='location-info-section'>
                            <div className='location-info-section-text1'>상록아트홀</div>
                            <div className='location-info-section-text2'>
                                서울특별시 강남구언주로 508<br/>
                                지하 1층 그랜드볼룸 홀<br/>
                                Tel. 02-564-5757
                            </div>
                        </div>
                        <div className='location-how-publictrans-section'>
                            <div className='location-how-publictrans-section-text1'>지하철 및 셔틀버스 이용시</div>
                            <ul className='location-how-publictrans-section-list'>
                                <li>2호선, 수인분당선 선릉역 5번 출구, <b>도보 5분</b></li>
                                <li><b>셔틀버스</b> : 선릉역 5번 출구에서 운행</li>
                            </ul>
                            <div className='location-how-publictrans-section-text1'>일반 버스 이용시</div>
                            <ul className='location-how-publictrans-section-list'>
                                <li>KT 강남지사 하차: 141(도봉산), 242(중랑, 신내역), 361(여의도)</li>
                                <li>한국기술센터, 상록회관 하차: 146(상계동), 341(하남), 360(송파), 740(덕은동)</li>
                            </ul>
                        </div>
                        <div className='location-how2-section'>
                            <div className='location-how2-section-text1'>자동차 이용시</div>
                            <ul className='location-how-publictrans-section-list'>
                                <li>네비게이션 <b>서울상록회관</b> 또는 <b>서울시 강남구 언주로 508</b> 입력</li>
                                <li>하객 주차 1시간 30분 무료, 초과 30분당 1,700원</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col col-md-2 col-lg-3">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
