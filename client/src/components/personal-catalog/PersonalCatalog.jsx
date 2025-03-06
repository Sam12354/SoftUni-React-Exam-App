import { useContext } from "react";
import PersonalCatalogItem from "./personal-catalog-item/PersonalCatalogItem";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetAllItems } from "../../hooks/useService";

export default function PersonalCatalog() {

    const { userId } = useContext(AuthContext);

    const [items] = useGetAllItems();

    const ownerItems = items.filter(item => item.owner === userId);
    console.log(ownerItems);


    return (
        <section className="page-section personal-catalog">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">My Products</h2>
                    <h3 className="section-subheading text-muted fw-bold fs-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                        Manage your uploaded products
                    </h3>
                </div>
                <div className="row">
                    {ownerItems.length ?
                        ownerItems.map(item => <PersonalCatalogItem key={item._id} {...item} />)
                        :
                        <h1 className="text-center text-muted">No products available at the moment. Check back later!</h1>
                    }
                </div>
            </div>
        </section>
    );
}

