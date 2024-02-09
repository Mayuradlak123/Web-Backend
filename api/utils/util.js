 function getCurrentDateTime() {
    const now = new Date();
    
    // Get year, month, day, hour, and minute
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1 and pad with zero if needed
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    
    // Construct the date-time string in the desired format
    const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}`;
    
    return formattedDateTime;
}
module.exports ={getCurrentDateTime}

