export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dedee119f9bfe8bc861db0afb0668195
&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
    }
  };
};
