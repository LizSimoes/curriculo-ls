import img from "../assets/img.png"
import email from "../assets/email.png"
import telefone from "../assets/telefone.png"
import localização from "../assets/localização.png"
import "../header/responsive.css"
import "../header/header.css"
import music from "../assets/music.mp3"
export default function Header() {
    return (
        <div className="header">
            <div className="img">
                <img src={img} alt="" />
                <div className="components">
                    <h1>Liz Simões</h1>
                    <div className="access">
                        <h2> <img src={email} alt="" />devliz.programadora@gmail.com</h2>
                        <h3><img src={telefone} alt="" />(75) 99166-8759</h3>
                        <h4><img src={localização} alt="" />Alagoinhas-Ba</h4>
                    </div>
                    <div className="audio">
                        <audio src={music} controls autoPlay></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}