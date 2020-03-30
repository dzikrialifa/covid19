import React,{Component} from 'react';

export default class Content extends Component {

    state = {
        dataIndonesia: [{}]
    }

    componentDidMount() {
        fetch('https://api.kawalcorona.com/indonesia/')
            .then(response => response.json())
            .then(result => {
                this.setState({ dataIndonesia: result })
            }).catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="container panel">
                <div className="container mypanel text-center">
                    <h3 style={{ fontFamily: "Sen", fontSize: "36px" }}>Live Data</h3>
                    <h2 style={{ fontFamily: "Sen", fontSize: "72px" }}>Corona Virus Indonesia</h2>
                </div>
                <div className="card round text-center">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="card mycard">
                                    <div className="card-body">
                                        <h2 className="card-title">Negara</h2>
                                        <h4 className="mt-4">{this.state.dataIndonesia[0].name}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="card mycard">
                                    <div className="card-body">
                                        <h2 className="card-title">Positif</h2>
                                        <h4 className="mt-4">{this.state.dataIndonesia[0].positif} Orang</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="card mycard">
                                    <div className="card-body">
                                        <h2 className="card-title">Sembuh</h2>
                                        <h4 className="mt-4">{this.state.dataIndonesia[0].sembuh} Orang</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="card mycard">
                                    <div className="card-body">
                                        <h2 className="card-title">Meninggal</h2>
                                        <h4 className="mt-4">{this.state.dataIndonesia[0].meninggal} Orang</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}