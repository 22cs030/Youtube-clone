export const API_KEY = 'AIzaSyBumD_dTpc38fvZ_YBXFKp7T-Dl926-PdM';

export const value_converter = (value) => {
    const num = Number(value);

    if (!num) return "0";

    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";   
    }
    else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";      
    }
    else {
        return num.toString();
    }
}