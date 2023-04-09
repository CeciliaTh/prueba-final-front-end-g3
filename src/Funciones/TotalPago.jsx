const totalPago = (listaHamburguesas) => {
    let totalPago = 0;
    listaHamburguesas.map((lsth) => {
        return totalPago = totalPago + (lsth.precio * lsth.cantidad)
    })
    return totalPago
    }
    
    export { totalPago } 