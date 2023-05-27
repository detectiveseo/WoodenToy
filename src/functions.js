const wishList = (id ,quntity) => {
    const storedData = localStorage.getItem("wishList");
    const inisiartData = {
        id: quntity,
    }
    localStorage.setItem("wishList", JSON.stringify(inisiartData))
}

export {wishList}