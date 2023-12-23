import React, { useState, useEffect } from 'react';
import './product-page.css';
import Heropic from '../../assets/img/product/hero.png';
import High from '../../assets/img/product/highlight.png';
import Button from '../../components/common/button/button.jsx';
import Productcard from '../../components/common/product-card/product-card.jsx';
import Products from '../../data/products.json';

const ProductPage = () => {

    const [isDragging, setIsDragging] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const sensitivity = 2; // Adjust this factor to make it more or less sensitive

    const handleMouseDown = (e) => {
        e.preventDefault(); // Prevent default text selection behavior
        setIsDragging(true);
        setStartPosition(e.clientX - scrollPosition);
        document.querySelector('.prod-collection-scroll').style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        requestAnimationFrame(() => {
            const newX = (e.clientX - startPosition) * sensitivity;
            setScrollPosition(newX);

            const scrollContainer = document.querySelector('.prod-collection-scroll');
            scrollContainer.scrollLeft = -newX;
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.querySelector('.prod-collection-scroll').style.cursor = 'grab';
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);



    return (
        <div className='productpage -shi'>
            <div className='main-container flex-col'>
                <div className='section-container flex-col'>
                    <div className='hero-sct section flex-col'>
                        <div className='img-slider'>
                            <img src={Heropic} alt="hero-img" />
                        </div>
                    </div>
                </div>
                <div className="section-container flex-col">
                    <div className="prod-query-sct section flex-col align-left">
                        <div className='promo-collection-sct flex-row'>
                            <div className='collection-img flex-col'>
                                <img src={High} alt="" />
                            </div>
                            <div className='vt-divider'></div>
                            <div className='collection-content flex-col gap-ms align-left'>
                                <h3 className='h3'>GLASTING WATER TINT COLLECTION</h3>
                                <div className='prod-collection-container prod-collection-scroll' onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                                    <div className='prod-container-outer flex-row gap-xs'>
                                        <Productcard product={Products[0]}></Productcard>
                                        <Productcard product={Products[1]}></Productcard>
                                        <Productcard product={Products[2]}></Productcard>
                                        <Productcard product={Products[3]}></Productcard>
                                        <Productcard product={Products[4]}></Productcard>
                                    </div>

                                </div>
                                <p className='body-lgt collection-description'>Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tellus lectus. Sed sagittis, risus vitae dignissim semper, turpis arcu congue augue, eget ornare orci libero nec enim. Aenean a aliquam nunc.</p>
                            </div>
                        </div>
                        <div className='prod-query-content flex-row align-left'>
                            <div className="filter-container flex-col gap-ms align-left">
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>COLLECTION</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="COLLECTION 1" btnStyle="underline-btn"></Button>
                                        <Button text="COLLECTION 2" btnStyle="underline-btn"></Button>
                                        <Button text="COLLECTION 3" btnStyle="underline-btn"></Button>
                                        <Button text="COLLECTION 4" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>CATEGORY</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="CLEANSER" btnStyle="underline-btn"></Button>
                                        <Button text="MOISTURIZER" btnStyle="underline-btn"></Button>
                                        <Button text="MASK" btnStyle="underline-btn"></Button>
                                        <Button text="LIPSTICK" btnStyle="underline-btn"></Button>
                                        <Button text="FOUNDATION" btnStyle="underline-btn"></Button>
                                        <Button text="MASCARA" btnStyle="underline-btn"></Button>
                                        <Button text="EYELINER" btnStyle="underline-btn"></Button>
                                        <Button text="BLUSH" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>BRAND</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="3CE" btnStyle="underline-btn"></Button>
                                        <Button text="ROMAN" btnStyle="underline-btn"></Button>
                                        <Button text="MERZY" btnStyle="underline-btn"></Button>
                                        <Button text="PERIPERA" btnStyle="underline-btn"></Button>
                                        <Button text="CLIO" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                                <div className="hr-divider"></div>
                                <div className="filter-sct flex-col align-left gap-sm">
                                    <h4 className='h4 filter-title'>PRICE RANGE</h4>
                                    <div className="sub-filter-container flex-col align-left">
                                        <Button text="PRICE RANGE 1" btnStyle="underline-btn"></Button>
                                        <Button text="PRICE RANGE 2" btnStyle="underline-btn"></Button>
                                        <Button text="PRICE RANGE 3" btnStyle="underline-btn"></Button>
                                        <Button text="PRICE RANGE 4" btnStyle="underline-btn"></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="vt-divider"></div>
                            <div className="prod-display flex-col align-left gap-md">
                                <div className = "product-dis-icon flex-row gap-md" >
                                    <h3 className='h3'>PRODUCT SEARCH BY INDEX</h3>
                                    <div className="product-collect3-search-bar ">
                                        <button className="product-collect3-search-btn">
                                            <i className="bi bi-search"></i>
                                        </button>
                                        <input className="product-collect3-search-input" type="text" placeholder="Search" />
                                    </div>
                                    <div>
                                        <select id="sort" name="sort">
                                            <option value="Sort" selected>Sort by</option>
                                            <option value="saab">Saab</option>
                                            <option value="fiat">Fiat</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="prod-grid gap-xs">
                                    <Productcard product={Products[5]}></Productcard>
                                    <Productcard product={Products[6]}></Productcard>
                                    <Productcard product={Products[7]}></Productcard>
                                    <Productcard product={Products[8]}></Productcard>
                                    <Productcard product={Products[9]}></Productcard>
                                    <Productcard product={Products[10]}></Productcard>
                                    <Productcard product={Products[11]}></Productcard>
                                    <Productcard product={Products[12]}></Productcard>
                                    <Productcard product={Products[13]}></Productcard>
                                    <Productcard product={Products[14]}></Productcard>
                                    <Productcard product={Products[15]}></Productcard>
                                    <Productcard product={Products[16]}></Productcard>
                                    <Productcard product={Products[17]}></Productcard>
                                    <Productcard product={Products[18]}></Productcard>
                                    <Productcard product={Products[19]}></Productcard>
                                    <Productcard product={Products[20]}></Productcard>
                                    <Productcard product={Products[21]}></Productcard>
                                    <Productcard product={Products[22]}></Productcard>
                                    <Productcard product={Products[23]}></Productcard>
                                    <Productcard product={Products[24]}></Productcard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductPage;