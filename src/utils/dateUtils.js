function parseDate(dateStr, timeStr) {
    const [day, month, year] = dateStr.split('/').map(Number);
    const hour = parseInt(timeStr.replace('h', ''));
    
    return new Date(year, month - 1, day, hour);
  }
  
  function isFutureDate(dateStr, timeStr, referenceDate) {
    const bateriaDate = parseDate(dateStr, timeStr);
    return bateriaDate > referenceDate;
  }
  
  module.exports = { isFutureDate, parseDate };