import React, { useState, useEffect } from "react";
import '../App.css'
import "../index.css"
import Navbar from "../components/Navbar.jsx"


const Card = () => {

    const [countries, setCountries] = useState([]);
    const [likes, setLikes] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [commentVisibility, setCommentVisibility] = useState({});
    const [comments, setComments] = useState({});
    const [commentInputs, setCommentInputs] = useState({});
    const [infoVisibility, setInfoVisibility] = useState({});
    const [saved, setSaved] = useState({});
    


    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
            setCountries(data);
            setLikes(data.reduce((acc, country) => ({ ...acc, [country.name.common]: false }), {}));
            setInfoVisibility(data.reduce((acc, country) => ({ ...acc, [country.name.common]: false }), {}));
            setSaved(data.reduce((acc, country) => ({ ...acc, [country.name.common]: false }), {}));
        })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    

    const handleLike = (countryName) => {
        setLikes((prev) => ({ ...prev, [countryName]: !prev[countryName] }));
    };

    const toggleInfoSection = (countryName) => {
        setInfoVisibility((prev) => ({
            ...prev,
            [countryName]: !prev[countryName],
        }));
    };


    const toggleCommentSection = (countryName) => {
      setCommentVisibility((prev) => ({
        ...prev,
        [countryName]: !prev[countryName],
      }));
    };
  
    const handleCommentChange = (event, countryName) => {
      setCommentInputs((prev) => ({
        ...prev,
        [countryName]: event.target.value,
      }));
    };
  
    const submitComment = (countryName) => {
      if (!commentInputs[countryName]) return;
  
      setComments((prev) => ({
        ...prev,
        [countryName]: [...(prev[countryName] || []), commentInputs[countryName]], // Append new comment
      }));
  
      setCommentInputs((prev) => ({
        ...prev,
        [countryName]: "",
      }));
    };
    
    const handleSave = (countryName) => {
        setSaved((prev) => ({ ...prev, [countryName]: !prev[countryName] }));
    };


    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (  
    <>

      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    
      {filteredCountries.map((country) => (

        <section key={country.name.common} className='w-full h-auto flex items-center justify-center opacity-90 '>

          <div className='w-[40%]  rounded-lg flex flex-col items-center p-[15px] bg-white/5  mt-[100px] shadow-[5px_10px_15px_2px_rgba(0,0,0,0.5)]'>

            <h1 className='text-white text-2xl font-bold p-[6px]'>{country.name.common}</h1>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className='h-70 w-140 rounded-lg m-[8px] ' />

            <div className='w-full flex justify-center ml-115 my-2'>
              <button onClick={() => toggleInfoSection(country.name.common)} className='underline  text-blue-500 cursor-pointer mr-[10px]'>{infoVisibility[country.name.common] ? 'Read Less':'Read More'}</button>
            </div>

            {infoVisibility[country.name.common] && (
              <div className='w-full text-white border border-white/15 m-[5px] rounded-lg'>
                <ul className='p-[40px] flex flex-col justify-center z-[-1] overflow-scroll'>
                  <li><span className="font-medium">Capital :</span>{country.capital ? <span className="text-s font-light opacity-90"> {country.capital}</span> : " N/A"}</li>
                  <li><span className="font-medium">Continent :</span>{country.continents ? <span className="text-s font-light opacity-90"> {country.continents}</span> : " N/A"}</li>
                  <li><span className="font-medium">Language :</span>{country.languages?.eng ? <span className="text-sm font-light opacity-90"> {country.languages.eng}</span> : " N/A"}</li>
                  <li><span className="font-medium">Population :</span>{country.population ? <span className="text-s font-light opacity-90"> {country.population}</span> : " N/A"}</li>
                  <li><span className="font-medium">Currency :</span><span className="text-sm font-light opacity-90"> {country.currencies ? Object.values(country.currencies)[0]?.name || "N/A" : "N/A"}</span><span className="ml-1">({country.currencies ? Object.values(country.currencies)[0]?.symbol || "N/A" : "N/A"})</span></li>
                  <li><span className="font-medium">Area :</span>{country.area ? <span className="text-s font-light opacity-90"> {country.area} Km<sup>2</sup></span> : " N/A"}</li>
                  <li><span className="font-medium">Timezone :</span>{country.timezones ? <span className="text-s font-light opacity-90"> {country.timezones}</span> : " N/A"}</li>
                  <li><span className="font-medium">Driving Side :</span>{country.car?.side ? <span className="text-s opacity-90"> {country.car.side}</span> : " N/A"}</li>
                  <li><span className="font-medium">Latitude :</span>{country.capitalInfo?.latlng?.[0] != null ? <span className="text-s opacity-90"> {country.capitalInfo.latlng[0]}<sup>o</sup></span> : " N/A"}</li>
                  <li><span className="font-medium">Longitude :</span>{country.capitalInfo?.latlng?.[1] != null ? <span className="text-s opacity-90"> {country.capitalInfo.latlng[1]}<sup>o</sup></span> : " N/A"}</li>
                  <li><span className="font-medium">Location :</span>{country.maps?.googleMaps ? <a className="text-s opacity-90 text-blue-400" href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer"> Link</a> : " N/A"}</li>
                </ul>
              </div>
            )}
            

            <div className='h-12 w-full flex justify-between items-center gap-5 p-[12px] m-[5px] mt-auto'>
                <div className='flex justify-between items-center gap-5'>
                    <svg  onClick={() => handleLike(country.name.common)} className='w-6 cursor-pointer hover:scale-110 transition duration-100' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill={likes[country.name.common] ? "red" : "white"}><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg> 
                    <span className='text-white'>{likes[country.name.common] ? 1 : 0}</span>
                    
                    <svg onClick={() => toggleCommentSection(country.name.common)} className="w-6 cursor-pointer hover:scale-110 transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg> 
                    
                    <svg className="w-6 cursor-pointer hover:scale-110 transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                </div>

                <div>
                    <svg onClick={() => handleSave(country.name.common)} className="w-4 cursor-pointer hover:scale-110 transition duration-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill={saved[country.name.common] ? "#FFD800" : "#ffffff"} d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/>
                    </svg>
                </div>
            </div>

            {commentVisibility[country.name.common] && (
            <div className="w-full mt-4">
              <textarea value={commentInputs[country.name.common] || ""} onChange={(event) => handleCommentChange(event, country.name.common)} placeholder="Write your comment..." className="w-full p-2 border border-white/40 rounded-lg bg-gray-800 text-white"/>
              <button onClick={() => submitComment(country.name.common)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg cursor-pointer">Submit Comment</button>
              <div className="mt-4 w-full">
                {comments[country.name.common] &&
                  comments[country.name.common].map((comment, index) => (
                    <div key={index} className="p-2 mt-2 bg-gray-700 text-white rounded-lg">
                      {comment}
                    </div>
                  ))}
              </div>
            </div>
          )}
          </div>
        </section>
        

      ))}
    </>
  );
};

export default Card;