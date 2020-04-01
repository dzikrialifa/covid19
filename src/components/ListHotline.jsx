import React from 'react';

const ListHotline = props => {
    return (
            <div className="card provinsi mt-3" style={{height:"130px"}}>
                <div className="card-body">
                    <h6 className="text-capitalize text-center pt-3">{props.name}</h6>
                    <h6 className="text-center">{props.telp}</h6>
                </div>
            </div>
    )
}
export default ListHotline;