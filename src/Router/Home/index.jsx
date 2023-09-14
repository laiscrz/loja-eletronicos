import Carrossel from "../../Components/Carrossel/carrossel";

export default function Home(){
    const imagens = [
        'public/image/promo_frete.png',
        'public/image/promo_tablets.png',
        'public/image/promo_iphones.png',
    ];
    return(
        <main>
            <div className="home-container">
                <h1>Promos</h1>

                <Carrossel imagens={imagens} />
            </div>
        </main>
    )
}