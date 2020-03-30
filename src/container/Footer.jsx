import React,{Component} from 'react';

export default class Footer extends Component {
    state = {
        date : new Date(),
        month: ['Januari','Februari','Maret','April','Mei','Juni','Agustus','September','Oktober','November','Desember']
    }

    render(){
        return (
            <div className="container-fluid footer text-center fixed-bottom">
                <div className="footer">
                    <p className="text-white">Made with love by Alif | Today, {this.state.date.getUTCDate()} {this.state.month[this.state.date.getMonth()]
                    } {this.state.date.getUTCFullYear()} </p>
                </div>
            </div>
        )
    }

}