import React,{Component} from 'react';

export default class Provinsi extends Component {

    state = {
        listProvinsi: []
    }

    componentDidMount() {
        fetch('https://api.kawalcorona.com/indonesia/provinsi/')
        .then(response => response.json())
        .then(result => {
            this.setState({ listProvinsi: result})
        })
    }

    render() {
        return(
            <div className="container" style={{marginTop:"80px"}}>
                <h1 className="text-primary text-center text-capitalize mb-5">Daftar kasus virus corona di provinsi</h1>
                <div className="row">
                    <div className="col-lg col-md mx-auto bg-white rounded shadow">
                        <div className="table-responsive">
                            <table className="table table-fixed">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col- col-lg-2">#</th>
                                        <th scope="col" className="col- col-lg-4">Provinsi</th>
                                        <th scope="col" className="col- col-lg-2">Positif</th>
                                        <th scope="col" className="col- col-lg-2">Sembuh</th>
                                        <th scope="col" className="col- col-lg-2">Meninggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.listProvinsi.map((data, index) => {
                                        return (
                                            <tr key={data.attributes.FID}>
                                                <th scope="row" className="col-2" key={data.attributes.FID}>{index + 1}</th>
                                                <td className="col-4">{data.attributes.Provinsi}</td>
                                                <td className="col-3 text-center">{data.attributes.Kasus_Posi}</td>
                                                <td className="col-2 text-center">{data.attributes.Kasus_Semb}</td>
                                                <td className="col-2 text-center">{data.attributes.Kasus_Meni}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}