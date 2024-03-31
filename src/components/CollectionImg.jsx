function Img(props) {
    return (
        <div className="col-3">
            <div className="card text-bg-dark">
                <img className="shadow rounded card-img-top" height={"350px"} width={"250px"} src={props.link} alt="..." />
                <div className="card-img-overlay p-2">
                    {/* <h5 className="card-text m-2" style={{ position: 'absolute', bottom: 25, left: 0, right: 0, textAlign: 'left', color: 'white' }}>New in Town</h5>
                    <p className="card-text m-2" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, textAlign: 'left', color: 'white' }}>17 Places<svg fill="#ffffff" width="30px" height="30px" viewBox="-3.84 -3.84 31.68 31.68" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g data-name="Layer 2">
                                <g data-name="arrow-right">
                                    <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                    <path d="M10.46 18a2.23 2.23 0 0 1-.91-.2 1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    </p> */}

                </div>
            </div>
        </div>
    );
}

export default Img;