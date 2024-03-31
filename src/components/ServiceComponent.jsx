import styled from 'styled-components'


function Component(props) {
    const handleBorder = () =>{

    }
    return ( 
        <div className='row py-3' onClick={handleBorder}>
            <div className="col-3">
                <img src={props.img} alt="" className='img- rounded-circle border p-2' height={"60px"} width={"60px"}/>
            </div>
            <div className="col text-center align-items-center mt-3" style={{verticalAlign:"middle"}}>
                <h5 className="text-secondary">{props.service}</h5>
            </div>
        </div>
     );
}

export default Component;