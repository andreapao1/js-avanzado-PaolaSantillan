import app from "./app"

const main = () => {
    app.listen(app.get("port"));
    console.log('Serve on port : ${app.get("port")}');
};

main();