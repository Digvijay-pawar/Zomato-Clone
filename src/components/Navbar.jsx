import React from 'react';
import styled from 'styled-components'

function Navbar() {
    const StyledSpan = styled.span`
        transition: color 0.3s;

        &:hover {
            color: black;
        }
    `;
    return (
        <nav className='container'>
            <div className="row mt-2">
                <div className="col-2">
                    <h1 style={{ fontWeight: "1000" }}> <i>zomato</i> </h1>
                </div>
                <div className="col-7 rounded shadow border-danger ">
                    <div className="row w-100 d-flex align-items-center pt-2">
                        <div className="col-6 dropdown border-right border-2">
                            <button className="btn dropdown-toggle w-100" style={{ outline: "none", border: "none", boxShadow: "none", textAlign: "left" }} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg className='' xmlns="http://www.w3.org/2000/svg" fill="#ff0000" version="1.1" id="Capa_1" width="35px" height="35px" viewBox="-91.01 -91.01 577.73 577.73" xmlSpace="preserve" stroke="#ff0000" strokeWidth="0.0039571" transform="matrix(-1, 0, 0, 1, 0, 0)">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="9.49704">
                                        <g>
                                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                                        </g>
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />
                                        </g>
                                    </g>
                                </svg>
                                <StyledSpan className="mr-3 ml-2">Select your location</StyledSpan> {/* Adjusted margin here */}
                            </button>
                            <div className="dropdown-menu mt-3" style={{ width: "93%" }} aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item py-0 d-inline text-danger opacity-75 w-100 h-100" type="button">
                                    <div className="row align-items-center">
                                        <div className="col-2">
                                            <svg className='inline' width="35px" height="35px" viewBox="-5.52 -5.52 35.04 35.04" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e80000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.192"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2a1 1 0 0 1 2 0v2.062A8.004 8.004 0 0 1 19.938 11H22a1 1 0 0 1 0 2h-2.062A8.004 8.004 0 0 1 13 19.938V22a1 1 0 0 1-2 0v-2.062A8.004 8.004 0 0 1 4.062 13H2a1 1 0 0 1 0-2h2.062A8.004 8.004 0 0 1 11 4.062V2zm7 10a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#ee0000"></path></g></svg>
                                        </div>
                                        <div className="col mt-2">
                                            <div className='mx-2 inline'>Detect current location
                                                <br />
                                                <p className='mute text-secondary'>Use GPS</p>
                                            </div>

                                        </div>
                                    </div>
                                </button>
                                <button className="dropdown-item py-0 d-inline text-primary opacity-75 w-100 h-100" type="button">
                                    <div className="row align-items-center">
                                        <div className="col mt-2">
                                           <span className='text-dark ml-2 mr-4' style={{fontSize:"x-large"}}>+</span> Add your current address
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-1">
                                    <svg width="35px" height="35px" viewBox="-9.6 -9.6 51.20 51.20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" fill="#575757" stroke="#575757">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.856">
                                            <title>search</title>
                                            <desc>Created with Sketch Beta.</desc>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
                                                <g id="Icon-Set" sketchType="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#787878">
                                                    <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketchType="MSShapeGroup" />
                                                </g>
                                            </g>
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>search</title>
                                            <desc>Created with Sketch Beta.</desc>
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchType="MSPage">
                                                <g id="Icon-Set" sketchType="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#787878">
                                                    <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" sketchType="MSShapeGroup" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="col">
                                    <input className="form-control me-2" style={{ outline: "none", border: "none", boxShadow: "none" }} type="search" placeholder="Search for restaurant, cusine or a dish" aria-label="Search" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 text-secondary align-items-center opacity-50 py-3" style={{ fontSize: "large" }}>
                    <StyledSpan className='px-5'>Log in</StyledSpan>
                    <StyledSpan>Sign up</StyledSpan>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
