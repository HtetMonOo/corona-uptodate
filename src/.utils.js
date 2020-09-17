export const getGlobal = () => `${process.env.REACT_APP_API_URL}spots/summary?rapidapi-key=${process.env.REACT_APP_API_KEY}`;

export const getLatest = () => `${process.env.REACT_APP_API_URL}summary/latest?rapidapi-key=${process.env.REACT_APP_API_KEY}`;

export const getByCountry = (country, duration) => `${process.env.REACT_APP_API_URL}spots/${duration}?rapidapi-key=${process.env.REACT_APP_API_KEY}&region=${country}`;