import React from "react";
import IconYoutube from '../../../Assets/youtube.png'
import IconLinkdin from '../../../Assets/linkedin.png'
import IconInstagram from '../../../Assets/instagram.png'
import IconWhatsApp from '../../../Assets/whatsapp.png'
import IconGitHub from '../../../Assets/github.png'
import IconPortfolio from '../../../Assets/maletin.png'
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer__container">
            <h3>Mis Redes:</h3>
            <ul>
                <li><a href="https://github.com/Bezagus" target="_blank"><img src={IconGitHub} alt="GitHub Icon" /></a></li>
                <li><a href="https://www.linkedin.com/in/agustin-benitez-271b94241" target="_blank"><img src={IconLinkdin} alt="LinkdIn Icon" /></a></li>
                <li><a href="https://www.instagram.com/agus_bez/" target="_blank"><img src={IconInstagram} alt="Instagram Icon" /></a></li>
                <li><a href="https://api.whatsapp.com/send/?phone=%2B542972527279&text&type=phone_number&app_absent=0" target="_blank"><img src={IconWhatsApp} alt="WhatsApp Icon" /></a></li>
                <li><a href="https://www.youtube.com/channel/UC6JvQsrhTbVTeq3bb3gfP6Q" target="_blank"><img src={IconYoutube} alt="Youtube Icon" /></a></li>
                <li><a href="https://agustinbenitez.vercel.app/" target="_blank"><img src={IconPortfolio} alt="Portfolio Icon" /></a></li>
            </ul>
        </div>
    )
}