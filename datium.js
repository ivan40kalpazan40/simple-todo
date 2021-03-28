let today = new Date();
let options = {
    weekday: 'long', 
    day: 'numeric', 
    month: 'long',
    year:'numeric'
};

module.exports = today.toLocaleDateString('en-US', options);
