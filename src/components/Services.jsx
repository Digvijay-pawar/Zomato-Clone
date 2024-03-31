import React, { useState } from 'react';
import Service from './ServiceComponent';

function Services() {
    const [clickedService, setClickedService] = useState('Dining Out');

    const handleClick = (service) => {
        setClickedService(service);
    };

    return (
        <div className="container mt-4">
            <div className="row w-75">
                <div className="col-3" onClick={() => handleClick('Dining Out')} style={{ borderBottom: clickedService === 'Dining Out' ? '3px solid red' : '' }}>
                    <Service
                        service="Dining Out"
                        img="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                    />
                </div>
                <div className="col-3"     onClick={() => handleClick('Delivery')} style={{ borderBottom: clickedService === 'Delivery' ? '3px solid red' : '' }}>
                    <Service
                        service="Delivery"
                        img="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                    />
                </div>
                <div className="col-3"    onClick={() => handleClick('Nightlife')} style={{ borderBottom: clickedService === 'Nightlife' ? '3px solid red' : '' }}>
                    <Service
                        service="Nightlife"
                        img="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;
