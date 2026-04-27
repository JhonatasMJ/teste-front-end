import { categoriesData } from "@/utils/categoriesData";
import "./styles.scss";

export default function Categories() { 

    return (
        <div className="categories">
            <div className="categories-container">
                {categoriesData.map((category) => (
                    <div key={category.id} className="category-item">
                        <img src={category.image} alt={category.name} />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
} 