import React,{Component} from 'react';
import ListHotline from '../components/ListHotline';

export default class Hotline extends Component {

    state = {
        Data: [
            {id:1,name: "Kementrian Kesehatan", telp: "021-5210-411"},
            {id:2,name: "Pemprov DKI Jakarta", telp: "0813-8837-6955"},
            {id:3,name: "Pemprov Jawa Barat", telp: "0811-209-3306"},
            {id:4,name: "Pemrov Jawa Tengah", telp: "0823-1360-0560"},
            {id:5,name: "Pemprov DIY", telp: "0274-555-585"},
            {id:6,name: "Pemprov Jawa Timur", telp: "031-843-0313"}
            // {id:7,name: "bali", telp: "31233"},
            // {id:8,name: "kalteng", telp: "12333"},
            // {id:9,name: "jkt", telp: "31233"},
            // {id:6,name: "jogja", telp: "15125"},
            // {id:7,name: "bali", telp: "31233"},
            // {id:10,name: "lampung", telp: "12333"}
        ]
    }

    render(){
        let columns = [];
        this.state.Data.forEach((item,index) => {
            columns.push(
                <div className="col-md-3 py-2" style={{ clear: (index !== 0 && index % 4 === 0) ? 'both' : 'none' }} key={item.id}>
                    <ListHotline key={item.id} name={item.name} telp={item.telp} />
                </div>)
        })
        return(
            <div className="container" style={{marginTop: "80px"}}>
                <h1 className="text-primary text-center">Hotline Corona Indonesia</h1>
                <h6 className="text-white text-capitalize text-center">list hotline penanganan atau laporan mengenai virus corona di indonesia</h6>
                <div className="row">
                    {columns}
                </div>
            </div>
        )
    }
}