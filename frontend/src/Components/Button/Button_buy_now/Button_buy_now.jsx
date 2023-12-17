import React from 'react';
import './Button_buy_now.css';

const Button_buy_now = () => {
    return (
        <div>
            <button className="buy-now-button">
                <svg className="icon-bg" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
                <span>BUY NOW</span>
            </button>
        </div>
    );
}

export default Button_buy_now;