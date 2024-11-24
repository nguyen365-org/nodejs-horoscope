const HoroscopeConverter = require('../src/index');

describe('HoroscopeConverter', () => {
  // Basic tests
  test('should return Aquarius for DOB 01252000', () => {
    const dob = '01252000';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Aquarius');
  });

  test('should return Leo for DOB 07311995', () => {
    const dob = '07311995';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Leo');
  });

  test('should return Scorpio for DOB 11211990', () => {
    const dob = '11211990';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Scorpio');
  });

  // Edge case tests for boundary dates
  test('should return Pisces for DOB 03202000 (boundary of Pisces)', () => {
    const dob = '03202000';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Pisces');
  });

  test('should return Aries for DOB 03212000 (start of Aries)', () => {
    const dob = '03212000';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Aries');
  });

  test('should return Capricorn for DOB 12222000 (start of Capricorn)', () => {
    const dob = '12222000';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Capricorn');
  });

  test('should return Aquarius for DOB 01202000 (start of Aquarius)', () => {
    const dob = '01202000';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Aquarius');
  });

  // Leap year tests
  test('should correctly handle a leap year date (e.g., 02292000)', () => {
    const dob = '02292000';
    const result = HoroscopeConverter.getHoroscope(dob);
    expect(result).toBe('Pisces');
  });

  test('should throw an error for invalid leap year date (e.g., 02292001)', () => {
    const invalidDob = '02292001';
    expect(() => {
      HoroscopeConverter.getHoroscope(invalidDob);
    }).toThrow('Invalid date.');
  });

  // Invalid input tests
  test('should throw an error for invalid DOB format', () => {
    const invalidDob = '0125';
    expect(() => {
      HoroscopeConverter.getHoroscope(invalidDob);
    }).toThrow('Invalid DOB format. Use \'mmddyyyy\'.');
  });

  test('should throw an error for invalid date (e.g., 13312000)', () => {
    const invalidDob = '13312000'; // Invalid month
    expect(() => {
      HoroscopeConverter.getHoroscope(invalidDob);
    }).toThrow('Invalid date.');
  });

  test('should throw an error for invalid day (e.g., 06322000)', () => {
    const invalidDob = '06322000'; // Invalid day
    expect(() => {
      HoroscopeConverter.getHoroscope(invalidDob);
    }).toThrow('Invalid date.');
  });

  // Non-numeric input tests
  test('should throw an error for non-numeric input (e.g., abcd2020)', () => {
    const invalidDob = 'abcd2020';
    expect(() => {
      HoroscopeConverter.getHoroscope(invalidDob);
    }).toThrow('Invalid DOB format. Use \'mmddyyyy\'.');
  });
});
