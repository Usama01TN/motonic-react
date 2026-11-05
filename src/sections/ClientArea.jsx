import ClientCarousel from "../components/ClientCarousel";
import { clients } from "../data/site";

export default function ClientArea() {
    return (
        <div className="hx-client-area">
            <div className="container">
                <div className="hx-client-item">
                    <ClientCarousel className="Gift-carousel">
                        {clients.map((src, i) => (
                            // wrapper div: react-slick puts inline width styles on direct children
                            <div key={i}>
                                <img src={src} alt="client" />
                            </div>
                        ))}
                    </ClientCarousel>
                </div>
            </div>
        </div>
    );
}
