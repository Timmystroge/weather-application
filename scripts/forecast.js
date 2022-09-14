const key = "qlc3BEpu0qVd6LtLVvEbAyhQgw4Y8ltb";
// destructuring console.log
const { log } = console;

//get weather information
const getWeather = async (id) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

/*
? getCity("manchester")
  .then((data) => {
    return getWeather(data.Key);
  })
  .then((data) => {
    log(data);
  })
  .catch((err) => {
    log(err);
  });
  */

/*
 ? my own Version 
const getWeather2 = async (id) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`
  );
  const data = response.json();
  return data[0];
};

const getCity2 = async (city) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`
  );
  const data = await response.json();
  return data[0];
};
*/
