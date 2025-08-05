const greetingWithWeather = (name, weather) => {
    if (weather === "sunny"){
        return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
    } else if (weather === "rainy") {
        return `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
    } else {
        return `Chào ${name}! Thời tiết hôm nay không xác định`;
    }
}

console.log(greetingWithWeather("Nguyễn An", "sunny"));
console.log(greetingWithWeather("Lê Nam", "rainy"));
console.log(greetingWithWeather("Trần Tâm", "cloudy"));


