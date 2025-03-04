import { useNavigate, useParams } from "react-router-dom"
import { useGetOneItem } from "../../hooks/useService"
import { remove } from "../../api/api"

export default function Details() {
    
    const { itemId } = useParams()
    const [data] = useGetOneItem(itemId);
    const item = data?.item || {};

    const navigate = useNavigate()

    const itemDeleteHandler = async () => {
        try {
            await remove(itemId)
            navigate(`/${itemId}/details`);
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <section className="details-section d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="details-content text-center d-flex flex-column align-items-center">
                                <h2 className="text-uppercase">{item.title}</h2>
                                <img className="img-fluid d-block mx-auto" src={item.image} alt="Project" />
                                <p>
                                    {item.description}
                                </p>
                                <ul className="list-inline">
                                    <li><strong>Client:</strong> Threads</li>
                                    <li><strong>Category:</strong> {item.brand}</li>
                                </ul>
                                <div className="d-flex gap-3">
                                    <button className="btn btn-success btn-xl text-uppercase mt-3" type="button">
                                        <i className="fas fa-shopping-cart me-1"></i> Buy
                                    </button>
                                    <button className="btn btn-warning btn-xl text-uppercase mt-3" type="button">
                                        <i className="fas fa-edit me-1"></i> Edit
                                    </button>
                                    <button className="btn btn-danger btn-xl text-uppercase mt-3" type="button">
                                        <i onClick={itemDeleteHandler} className="fas fa-trash me-1"></i> Delete
                                    </button>
                                </div>
                                <button className="btn btn-primary btn-xl text-uppercase mt-3" type="button">
                                    <i className="fas fa-arrow-left me-1"></i> Back to Catalog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
