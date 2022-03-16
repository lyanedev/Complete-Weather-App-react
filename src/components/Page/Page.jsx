import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

const API_KEY = "a2eb2fabb14a478a59b7f382a30fe3d9";

import { Header } from "../Header/Header";

import { StyledBox } from "./Page.styled";

import { Form } from "../../components/Form/Form";
import { Error } from "../../components/Error/Error";
import { Loading } from "../../components/Loading/Loading";
import { Forecast } from "../../components/forecast/forecast";

export const Page = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState({});

  // -------- CALL API -----------
  const getForecastData = async (city) => {
    setIsLoading(true)
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
   setForecast({data})
   setIsLoading(false)
   console.log(forecast);
  };

  return (
    <>
      <Header />
      <StyledBox>
        {/* Form */}
        {!isLoading && <Form getForecastData={getForecastData}/>}
        {/* Error */}
        {isError && <Error message={isError} />}
        {/* Loader */}
        {isLoading && <Loading />}
      </StyledBox>
      {/* Forecast */}
      {forecast && <Forecast />}
    </>
  );
};
