import React, { Component } from 'react'
import QRcode from '../pictures/QRcode.jpg'

export default class Footer extends Component {
    toggleDisplay = () => {
        const qrcode = document.querySelector(".qrcode-wrapper")
        const isHidden = qrcode.style.visibility
        isHidden == "visible"
            ? qrcode.setAttribute("style", "visibility: hidden")
            : qrcode.setAttribute("style", "visibility: visible");
    }

    render() {
        return (
            <div className="bg-black-90 white">
                <div className="row footer-wrapper">
                    <div className="footer-title title1 col-xs-12">
                        <span>💌</span>
                        <a name="footer">Interested?</a>
                        <br className="d-block d-md-none" /> <div className="dib">You can find me here:</div> </div>
                    <div className="footer-icons col-xs-12">
                        <a className="link white" href="mailto:ztengc5@gmail.com"><i className="fa fa-envelope"></i></a>
                        <a className="link white"
                            href="https://www.linkedin.com/in/teng-zhang-ontheway/"
                            target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a className="link white" href="https://github.com/tzhang-SSR"
                            target="_blank"
                            rel="noopener noreferrer">
                            <i className="fa fa-github"></i
                            ></a>
                        <div className="qrcode-wrapper" ><img alt="qrcode" className="qrcode-img" src={QRcode} /></div>
                        <i className="fa fa-weixin" onClick={this.toggleDisplay}></i>
                    </div>
                </div>
            </div>
        )
    }
}
