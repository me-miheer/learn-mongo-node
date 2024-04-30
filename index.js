import express from 'express';
const app = express();
const port = 8900;

app.use("/", (req, res)=>{
    res.status(200).send(
        "Hello world!"
    )
});

app.listen(port, () => {
    console.log("App is connected to port : "+port);
})