class Audience {
    static audienceId = 1;
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor (name: string, email: string, phone: string) {
        this.id = Audience.audienceId++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    getDetails(): string{
        return `THÔNG TIN KHÁN GIẢ\n- Tên: ${this.name}\n- Email: ${this.email}\n- SĐT: ${this.phone}`;
    }
}

abstract class Movie {
    static movieId = 1;
    id: number;
    title: string;
    genre: string;
    ticketPrice: number;
    isShowing: boolean = false;
    
    constructor (title: string, genre: string, ticketPrice: number) {
        this.id = Movie.movieId++;
        this.title = title;
        this.genre = genre;
        this.ticketPrice = ticketPrice;
    }

    startShow(): void {
        this.isShowing = true;
    }

    stopShow(): void {
        this.isShowing = false;
    }

    abstract calculateTicketCost(quantity: number): number;
    abstract getSpecialOffers(): string[];
    abstract getMovieInfo(): string;
}

class ActionMovie extends Movie {
    specialOffers: string[];
    info: string;
    constructor(title: string, genre: string, ticketPrice: number, specialOffers: string[], info: string) {
        super(title, genre, ticketPrice);
        this.specialOffers = specialOffers;
        this.info = info;
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice*quantity;
    }

    getSpecialOffers(): string[] {
        return ["Miễn phí bắp rang", "Tặng poster"];
    }

    getMovieInfo(): string {
        return `- Tên phim: ${this.title}\n- Giá vé: ${this.ticketPrice}\n- Mô tả: Phim hành động gay cấn, kỹ xảo hoành tráng`;
    }
}

class ComedyMovie extends Movie {
    specialOffers: string[];
    info: string;
    constructor(title: string, genre: string, ticketPrice: number, specialOffers: string[], info: string) {
        super(title, genre, ticketPrice);
        this.specialOffers = specialOffers;
        this.info = info;
    }
    calculateTicketCost(quantity: number): number {
        return quantity > 4 ? this.ticketPrice*quantity*0.9 : this.ticketPrice*quantity;
    }

    getSpecialOffers(): string[] {
        return ["Giảm 10% cho nhóm trên 4 người"];
    }

    getMovieInfo(): string {
        return `- Tên phim: ${this.title}\n- Giá vé: ${this.ticketPrice}\n- Mô tả: Phim hài nhẹ nhàng, vui nhộn`;
    }
}

class AnimationMovie extends Movie {
    specialOffers: string[];
    info: string;
    constructor(title: string, genre: string, ticketPrice: number, specialOffers: string[], info: string) {
        super(title, genre, ticketPrice);
        this.specialOffers = specialOffers;
        this.info = info;
    }
    calculateTicketCost(quantity: number): number {
        return this.ticketPrice*quantity;
    }

    getSpecialOffers(): string[] {
        return ["Giảm giá cho trẻ em dưới 12 tuổi"];
    }

    getMovieInfo(): string {
        return `- Tên phim: ${this.title}\n- Giá vé: ${this.ticketPrice}\n- Mô tả: Phim hoạt hình với hình ảnh sống động`;
    }
}

class TicketBooking {
    static bookingId = 1;
    id: number;
    audience: Audience;
    movie: Movie;
    quantity: number;
    totalPrice: number;

    constructor(audience: Audience, movie: Movie, quantity: number, totalPrice: number) {
    this.id = TicketBooking.bookingId++;
    this.audience = audience;
    this.movie = movie;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
}

    getDetails(): string {
        return `THÔNG TIN VÉ\n- Khán giả đặt vé: ${this.audience.name}\n- Phim: ${this.movie}\n- Số lượng vé đã đặt: ${this.quantity}\n- Tổng tiền phải trả: ${this.totalPrice}`;
    }
}

class Cinema {
    movies: Movie[];
    audiences: Audience[];
    bookings: TicketBooking[];

    addMovie(movie: Movie): void{
        this.movies.push(movie);
    }

    addAudience(name: string, email: string, phone: string): Audience{
        let newAudience = new Audience(name, email, phone);
        this.audiences.push(newAudience);
        return newAudience;
    }

    bookTickets(audienceId: number, movieId: number, quantity: number): TicketBooking | null {
        let findAudienceById = this.audiences.find(item => item.id === audienceId);
        let findMovieById = this.movies.find(item => item.id === movieId);
        if (findAudienceById && findMovieById && quantity > 0 && findMovieById.isShowing) {
            let newBooking = new TicketBooking(findAudienceById, findMovieById, quantity, findMovieById.calculateTicketCost(quantity));
            this.bookings.push(newBooking);
            return newBooking;
        }
        return null;
    }

    cancelMovie(movieId: number): void {
        let findMovieById = this.movies.find(item => item.id === movieId);
        if (findMovieById) {
            findMovieById.isShowing = false;
        }
    }

    listShowingMovies(): void {
        this.movies.filter(item => item.isShowing === true).forEach(item => {
            console.log(item.getMovieInfo);
        });
    }
}