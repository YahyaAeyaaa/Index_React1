import Button from "../Elements/Buttons/Button"

function ProductsCard(props) {
    const {children} = props
    return (
        <section className="p-3 w-80 max-w-lg mt-32 shadow-md rounded overflow-hidden hover:bg-orange-100 transition-all duration-500 group hover:scale-95 flex flex-col justify-between">
            {children}
        </section>
    )
}


function Header( props ) {
    const {image} = props
    return (
        <a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=cup&query=cup">
            <img 
                src={image}
                alt="Images"
                className="bg-fixed bg-no-repeat bg-center w-full group-hover:scale-105 transition-all duration-500 rounded"
            />
        </a>
    )
}

function Body(props) {
    const {title , date , children} = props
    return (
        <div className="px-5 font-comfortaa h-48 pb-5">
            <p className="text-md">{title}</p>
            <i>{date}</i>
            <p>{children}</p>
        </div>
    )
}

function Footer(props) {
    const {price , children} = props
    return (
        <div className="flex items-center justify-between p-3">
                {children}
                <Button text="Buy Now" className="group-hover:bg-white transition-all duration-500 group-hover:text-black cursor-pointer" >
                </Button>
            <p className="text-xl">{price}</p>
        </div>
    )
}

            ProductsCard.Header = Header
            ProductsCard.Body = Body
            ProductsCard.Footer = Footer 


export default ProductsCard