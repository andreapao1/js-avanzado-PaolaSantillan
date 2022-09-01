import { getConnection } from "./../commons/Connection.js"

const getProducts = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books")
        res.json(result)
    }catch (error){
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
}

const getProduct = async (req, res) => {
    try{
        const { id } = req.params;
        console.log(id);
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books WHERE id = ?", id)
        res.json(result)
    }catch (error){
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getProducts,
    getProduct,
} 