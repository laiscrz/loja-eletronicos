import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaYoutube} from 'react-icons/fa';

export default function Rodape() {
    return (
        <footer>
            <section>
                <div className="footer-container">
                    <div className="redes-sociais">
                        <h2>Nós Siga nas Redes Sociais:</h2>
                        <FaWhatsapp className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaFacebookSquare className='icon'/>
                        <FaYoutube className='icon'/>
                    </div>
                    
                    <div className="nossa-equipe">
                        <h2>Nossa Equipe:</h2>
                        <p>Bianca Leticia Roman Caldeira - RM: 552267</p>
                        <p>Lais Alves da Silva Cruz - RM: 552258</p>
                        <p>Matheus Colossal Araújo - RM: 99572</p>
                    </div>

                </div>
            </section>
        </footer>
    )
}