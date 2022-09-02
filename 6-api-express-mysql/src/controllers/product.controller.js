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

const addProduct = async (req, res) => {
    try{
        const { id, title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        if (id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined){
            res.status(400).json({message:"Bad request. Please fill all field."})
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `books`(`id`, `title`, `total_pages`, `author`, `nationality`, `language`, `cover_url`, `editorial`) VALUES (?,?,?,?,?,?,?,?)", [id, title, total_pages, author, nationality, language, cover_url, editorial]);
        res.json(result)
    }catch (error){
        console.log(error);
        res.status(500);
        res.send(error.message)
    }
}

const updateProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        if (id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language === undefined || cover_url === undefined || editorial === undefined){
            res.status(400).json({message:"Bad request. Please fill all field."})
        }
        const conectBook = { title, total_pages, author, nationality, language, cover_url, editorial};
        const connection = await getConnection();
        const result = await connection.query("UPDATE books SET ? WHERE id = ?", [conectBook, id]);
        res.json(result)
    }catch (error){
        console.log(error);
        res.status(500);
        res.send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM books WHERE id = ?", id);
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
    addProduct,
    updateProduct,
    deleteProduct
} 