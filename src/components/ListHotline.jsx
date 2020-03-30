import React from 'react';

const ListHotline = props => {
    return (
            <div className="card provinsi mt-3" style={{height:"130px"}}>
                <div className="card-body">
                    <h5 className="text-capitalize text-center">{props.name}</h5>
                    <h6>+62{props.telp}</h6>
                </div>
            </div>
    )
}
export default ListHotline;