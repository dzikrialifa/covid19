import React from 'react';

export default class Global extends React.Component {

    state = {
        listGlobal: []
    }

    componentDidMount() {
        fetch('https://api.kawalcorona.com/')
            .then(response => response.json())
            .then(result => {
                this.setState({ listGlobal: result })
            })
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "80px" }}>
                <h1 className="text-primary text-center text-capitalize mb-5">Daftar kasus virus corona di Dunia</h1>
                <div className="row">
                    <div className="col-lg col-md mx-auto bg-white rounded shadow">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col- col-lg-2">No</th>
                                        <th scope="col" className="col- col-lg-4">Negara</th>
                                        <th scope="col" className="col- col-lg-2">Kasus Positif</th>
                                        <th scope="col" className="col- col-lg-2">Kasus Sembuh</th>
                                        <th scope="col" className="col- col-lg-2">Meninggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {this.state.listGlobal.map((data, index) => {
                                        
                                        return (
                                            <tr>
                                                <th scope="row" className="col- col-lg-2"> {index + 1}</th>
                                                <td className="col- col-lg-4">{data.attributes.Country_Region}</td>
                                                <td className="col- col-lg-2 text-center">{data.attributes.Confirmed}</td>
                                                <td className="col- col-lg-2 text-center">{data.attributes.Recovered}</td>
                                                <td className="col- col-lg-2 text-center">{data.attributes.Deaths}</td>
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