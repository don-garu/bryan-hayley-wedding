import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk"

function KakaoMap() {
    return (
        <Map // 지도를 표시할 Container
            id="map"
            center={{
                // 지도의 중심좌표
                lat: 37.5038913,
                lng: 127.0429552,
            }}
            style={{
                // 지도의 크기
                width: "100%",
                height: "350px",
            }}
            level={4} // 지도의 확대 레벨
        >
            <MapMarker // 마커를 생성합니다
                position={{
                    // 마커가 표시될 위치입니다
                    lat: 37.503938,
                    lng: 127.0427975,
                }}
                clickable={true}
                onClick={() => window.open('https://place.map.kakao.com/2009675378')}
            >
            </MapMarker>
            <ZoomControl />
        </Map>
    )
}

export default KakaoMap;
