import Button from "../Button";
import "./styles.scss";

export default function Banner() {
    return (
        <div className="banner" aria-label="Banner" role="img">
            <div className="banner-content">
                <div className="banner-text">
                    <h1>Venha conhecer nossas promoções</h1>
                    <p> <span>50% Off</span> nos produtos </p>
                </div>
                    <Button variant="primary">Ver produto</Button>
            </div>
        </div>
    )
}