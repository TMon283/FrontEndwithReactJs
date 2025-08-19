class Audience {
    constructor(name, email, phone) {
        this.id = Audience.audienceId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    getDetails() {
        return `THÔNG TIN KHÁN GIẢ\n- Tên: ${this.name}\n- Email: ${this.email}\n- SĐT: ${this.phone}`;
    }
}
Audience.audienceId = 1;
class Movie {
    constructor(title, genre, ticketPrice) {
        this.isShowing = false;
        this.id = Movie.movieId++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
    }
    startShow() {
        this.isShowing = true;
    }
    stopShow() {
        this.isShowing = false;
    }
}
Movie.movieId = 1;
class ActionMovie extends Movie {
    constructor(title, genre, ticketPrice, specialOffers, info) {
        super(title, genre, ticketPrice);
        this.specialOffers = specialOffers;
        this.info = info;
    }
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }
    getMovieInfo() {
        return `- Tên phim: ${this.title}\n- Giá vé: ${this.ticketPrice}\n- Mô tả: Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
}
class ComedyMovie extends Movie {
    constructor(title, genre, ticketPrice, specialOffers, info) {
        super(title, genre, ticketPrice);
        this.specialOffers = specialOffers;
        this.info = info;
    }
    calculateTicketCost(quantity) {
        return quantity > 4 ? this.ticketPrice * quantity * 0.9 : this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }
    getMovieInfo() {
        return `- Tên phim: ${this.title}\n- Giá vé: ${this.ticketPrice}\n- Mô tả: Phim hài nhẹ nhàng, vui nhộn`;
    }
}
class AnimationMovie extends Movie {
    constructor(title, genre, ticketPrice, specialOffers, info) {
        super(title, genre, ticketPrice);
        this.specialOffers = specialOffers;
        this.info = info;
    }
    calculateTicketCost(quantity) {
        return this.ticketPrice * quantity;
    }
    getSpecialOffers() {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }
    getMovieInfo() {
        return `- Tên phim: ${this.title}\n- Giá vé: ${this.ticketPrice}\n- Mô tả: Phim hoạt hình với hình ảnh sống động`;
    }
}
class TicketBooking {
    constructor(audience, movie, quantity, totalPrice) {
        this.id = TicketBooking.bookingId++;
        this.audience = audience;
        this.movie = movie;
        this.quantity = quantity;
        this.totalPrice = totalPrice;
    }
    getDetails() {
        return `THÔNG TIN VÉ\n- Khán giả đặt vé: ${this.audience.name}\n- Phim: ${this.movie}\n- Số lượng vé đã đặt: ${this.quantity}\n- Tổng tiền phải trả: ${this.totalPrice}`;
    }
}
TicketBooking.bookingId = 1;
class Cinema {
    addMovie(movie) {
        this.movies.push(movie);
    }
    addAudience(name, email, phone) {
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
        return newAudience;
    }
    bookTickets(audienceId, movieId, quantity) {
        let findAudienceById = this.audiences.find(item => item.id === audienceId);
        let findMovieById = this.movies.find(item => item.id === movieId);
        if (findAudienceById && findMovieById && quantity > 0 && findMovieById.isShowing) {
            let newBooking = new TicketBooking(findAudienceById, findMovieById, quantity, findMovieById.calculateTicketCost(quantity));
            this.bookings.push(newBooking);
            return newBooking;
        }
        return null;
    }
    cancelMovie(movieId) {
        let findMovieById = this.movies.find(item => item.id === movieId);
        if (findMovieById) {
            findMovieById.isShowing = false;
        }
    }
    listShowingMovies() {
        this.movies.filter(item => item.isShowing === true).forEach(item => {
            console.log(item.getMovieInfo);
        });
    }
}
