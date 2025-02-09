import './App.css';
import ResponsiveSlider from "./components/ResponsiveSlider";
import React, {useState,useEffect} from "react";
import BoxOfficeCanlender from "./components/BoxOfficeCanlender";

function App() {
  const [boxOffices, setBoxOffices] = useState([]); // ✅ 변수명 오타 수정
  const [boxOfficeDate, setBoxOfficeDate] = useState("2025-02-01");
  const [showRange, setShowRange] = useState(""); // ✅ API에서 받은 기간 값 저장
  const [isLoading, setIsLoading] = useState(false);

  const officeRatingKey = 'df3033bb6c6272c3106eb010d8303bcb'
  const formattedDateForAPI = boxOfficeDate.replace(/-/g, "");
  const officeRatingURL = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${officeRatingKey}&targetDt=${formattedDateForAPI}`;

  const randomPosters = [
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  ];
  const randomRatings = [6.5, 7.2, 8.1, 5.9, 9.0, 7.8, 8.5, 6.0, 9.2, 7.4];

  const randomGenres = [
    ["액션","드라마"],
    ["SF","드라마"],
    ["액션","판타지"],
    ["전쟁","드라마"],
    ["액션","드라마"],
    ["다큐멘터리"],
    ["스릴러","공포"],
    ["애니메이션","가족"],
    ["공포","역사"],
    ["범죄","미스터리"],
  ];

  const getOfficeRating = async () => {
    try {

      const response = await fetch(officeRatingURL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.boxOfficeResult || {}; // ✅ 데이터 반환
    } catch (error) {
      console.error("Error fetching box office data:", error);
      return []; // 에러 발생 시 빈 배열 반환
    }
  };

  const handleDateChange = (event) => {
    setBoxOfficeDate(event.target.value);
  }


  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const boxOfficeData = await getOfficeRating();
      setShowRange(boxOfficeData.showRange); // ✅ 기간 정보 저장

      const moviesWithRandomData = (boxOfficeData.weeklyBoxOfficeList || []).map((movie,index) => (
        {
          id: index,
          title: movie.movieNm,
          release_date: movie.openDt,
          poster_path: randomPosters[Math.floor(Math.random() * randomPosters.length)], // ✅ 랜덤 포스터
          vote_average: randomRatings[Math.floor(Math.random() * randomRatings.length)], // ✅ 랜덤 평점
          genres: randomGenres[Math.floor(Math.random() * randomGenres.length)], // ✅ 랜덤 장르
        }));

      setBoxOffices(moviesWithRandomData);
      setIsLoading(false);
    })();
  }, [boxOfficeDate]); // ✅ 빈 배열을 넣어서 한 번만 실행s




  return (
    <div className="App">
      <h2 className='App-title'>주말 박스오피스</h2>
      <BoxOfficeCanlender defaultValue={boxOfficeDate} showRange={showRange} onChange={handleDateChange}></BoxOfficeCanlender>
      {isLoading ? (
        <h2>로딩중입니다.</h2>
      ) : boxOffices.length > 0 ? (
        <ResponsiveSlider movies={boxOffices}/>
      ) : (
        <h2>데이터가 없습니다.</h2>
      )}
    </div>
  );
}

export default App;
