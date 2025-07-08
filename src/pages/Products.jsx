
import { Link } from "react-router-dom"
import Button from "../components/Elements/Buttons/Button"
import ProductsCard from "../components/Fragments/ProductsCard"

let ProcukNih = [
    {
        id : 1,
        image : "images/shoes-removebg-preview.png",
        title : "",
        date : "",
        description : "",
        price : "",
    },
    {
        id : 2,
        image : "images/11415019.png",
        title : "",
        date : "",
        description : "",
        price : "",
    }
]


const email = localStorage.getItem("email")


function Products() {
    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        localStorage.removeItem("Name")
        window.location.href = "/Login"
    }
    return (
        <>
        <div className="flex items-center justify-end h-15 bg-slate-300 p-3">
            {email}
            <Button text="Logout" className="ml-5" onClick={handleLogout}></Button>
        </div>
        <div className="flex items-center justify-center gap-3">
            {ProcukNih.map((ProcukNih) => (
                <ProductsCard key={ProcukNih.id}>
                <ProductsCard.Header
                    image={ProcukNih.image} />
                    <ProductsCard.Body title={ProcukNih.title}
                    date={ProcukNih.date}
                    >
                        {ProcukNih.description}
                    </ProductsCard.Body>
                    <ProductsCard.Footer price={ProcukNih.price}>
                    </ProductsCard.Footer>
            </ProductsCard>
            ))}
            
        </div>
        </>
    )
}

export default Products