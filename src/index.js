class HoroscopeConverter {
  /**
   * Converts a DOB in 'mmddyyyy' format to a horoscope sign.
   * @param {string} dob - Date of birth in 'mmddyyyy' format.
   * @returns {string} - Horoscope sign.
   */
  static getHoroscope(dob) {
    if (!/^\d{8}$/.test(dob)) {
      throw new Error("Invalid DOB format. Use 'mmddyyyy'.");
    }

    const month = parseInt(dob.substring(0, 2), 10);
    const day = parseInt(dob.substring(2, 4), 10);

    // Validate month and day
    if (month < 1 || month > 12) {
      throw new Error("Invalid date.");
    }
    const daysInMonth = [31, (this.isLeapYear(dob) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day < 1 || day > daysInMonth[month - 1]) {
      throw new Error("Invalid date.");
    }

    const zodiacSigns = [
      { sign: "Capricorn", start: "1222", end: "1231" },
      { sign: "Capricorn", start: "0101", end: "0119" },
      { sign: "Aquarius", start: "0120", end: "0218" },
      { sign: "Pisces", start: "0219", end: "0320" },
      { sign: "Aries", start: "0321", end: "0419" },
      { sign: "Taurus", start: "0420", end: "0520" },
      { sign: "Gemini", start: "0521", end: "0620" },
      { sign: "Cancer", start: "0621", end: "0722" },
      { sign: "Leo", start: "0723", end: "0822" },
      { sign: "Virgo", start: "0823", end: "0922" },
      { sign: "Libra", start: "0923", end: "1022" },
      { sign: "Scorpio", start: "1023", end: "1121" },
      { sign: "Sagittarius", start: "1122", end: "1221" },
    ];

    const dobMMDD = dob.substring(0, 4);

    for (const { sign, start, end } of zodiacSigns) {
      if (dobMMDD >= start && dobMMDD <= end) {
        return sign;
      }
    }

    throw new Error("Horoscope sign could not be determined.");
  }

  /**
   * Determines if the year in the given DOB is a leap year.
   * @param {string} dob - Date of birth in 'mmddyyyy' format.
   * @returns {boolean} - True if it's a leap year, false otherwise.
   */
  static isLeapYear(dob) {
    const year = parseInt(dob.substring(4), 10);
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
}

module.exports = HoroscopeConverter;
