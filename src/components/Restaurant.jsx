import React, { useState } from 'react';

function Restaurant(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="col-4 px-4 mb-5">
            <div
                className={`p-2 card-1 rounded pb-3 ${isHovered ? 'border shadow' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img src={props.img} className="img-fluid rounded" style={{ maxHeight: "200px", minHeight: "200px", maxWidth: "100%", minWidth: "100%" }} alt="" />                <div className="row py-2">
                    <div className="col-8 overflow-hidden" style={{ textOverflow: 'ellipsis' }}>
                        <b>{props.name}</b>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                        <span className="rounded p-1 text-white" style={{ background: "green", fontSize: "smaller" ,maxHeight:"30px", minHeight:"30px"}}><b>{props.rating}*</b></span>
                    </div>
                </div>
                <div className="row text-secondary mt-1" style={{ fontSize: "smaller" }}>
                    <div className="col-8" >
                        North Indian, BBQ, Biryani, K...
                    </div>
                    <div className="col-4">
                        ₹{props.price} for two
                    </div>
                </div>
                <div className="row text-secondary " style={{ fontSize: "smaller" }}><div className="col">Omaxe Connaught Place, Beta 2, Greate...</div></div>
                <div className="row" style={{ fontSize: "small" }}>
                    <div className="col-8 text-danger">
                        Closes in {props.time}
                    </div>
                    <div className="col-4 d-flex text-dark justify-content-end"><b>1.6km</b></div>
                </div>
            </div>
        </div>

    );
}

export default Restaurant;