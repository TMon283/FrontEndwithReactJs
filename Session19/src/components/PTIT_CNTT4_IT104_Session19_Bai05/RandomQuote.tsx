import { useState } from "react";

export default function RandomQuote() {
 
    const [quote, setQuote] = useState("");
 const handleQuotes = () => {
        const randomIndex = Math.floor(Math.random() *5)+1;  
    switch (randomIndex) {
        case 1:
            setQuote("Học, học nữa, học mãi.");
            break;
     case 2:
            setQuote("Thất bại là mẹ thành công.");
            break;
        case 3:
            setQuote("Không gì là không thể.");
            break;
        case 4:
            setQuote("Kiến tha lâu đầy tổ.");
            break;
        case 5:
            setQuote("Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.");
                break
        default:
            break;
    }
 }
    return (
        <div>
            <button onClick={handleQuotes}>Get Quote</button>
            <p>{quote}</p>
        </div>
    );

};