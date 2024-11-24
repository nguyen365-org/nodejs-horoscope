const HoroscopeConverter = require("./src/index");

// Example DOBs
const dob1 = "01252000"; // Aquarius
const dob2 = "07311995"; // Leo
const dob3 = "11211990"; // Scorpio

console.log(`DOB: ${dob1}, Horoscope: ${HoroscopeConverter.getHoroscope(dob1)}`);
console.log(`DOB: ${dob2}, Horoscope: ${HoroscopeConverter.getHoroscope(dob2)}`);
console.log(`DOB: ${dob3}, Horoscope: ${HoroscopeConverter.getHoroscope(dob3)}`);
