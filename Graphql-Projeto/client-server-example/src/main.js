import { createServer } from 'http';

const server = createServer((req, res) => {
    switch (req.url){
        case '/status':{
            res.writeHead(200,{
                'Content-Type': 'application/json',
            });
            res.write(JSON.stringify({
                status: okay,
            })
            );
            console.log('Alguém acessou a Status Page');
            res.end();
            return;
        }

        default: {
            res.writeHead(404, 'Service not Found');
            res.end();
        }
    }

});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

server.listen(PORT, '127.0.0.1',() =>{
    console.log(`Server listening at ${HOSTNAME}:${PORT}`);
})