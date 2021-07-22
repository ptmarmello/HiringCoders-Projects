// import { createServer } from 'http';
// // import { readFile } from 'fs';
// // import { resolve } from 'path';
// import { request } from 'https';
// import { parse } from 'path';

import express from 'express';
// import cors from 'cors';

import { ApolloServer, gql } from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// const server = express(); // esse seria o natural com apenas express
// server.use(cors());

const app = express(); // com apolo server

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.applyMiddleware({
    app,
    cors:{
        origin: 'http://localhost:3000',
    },
    bodyParserConfig: true,
});

// const enableCors = cors({origin: 'http://localhost:3000'});


// server.get('/status', (_, resp) => {
//     resp.send({
//         status: 'okay'
//     });
// });

// server
//     .options('/authenticate', enableCors)
//     .post('authenticate', enableCors , express.json(), (request,response) => {
//     console.log('email',request.body.email);
//     response.send();
//     }
// )


// const server = createServer((req, res) => {
//     switch (req.url){
//         // case '/status':{
//         //     res.writeHead(200,{
//         //         'Content-Type': 'application/json',
//         //     });
//         //     res.write(JSON.stringify({
//         //         status: okay,
//         //     })
//         //     );
//         //     console.log('Alguém acessou a Status Page');
//         //     res.end();
//         //     return;
//         // }
//         // case '/signin':{
//         //     const filepath = resolve(__dirname, './pages/signin.html');
//         //     readFile(filepath, (error, file) => {
//         //         if(error){
//         //             response.writeHead(500, 'can\'t process HTML file');
//         //             response.end();
//         //             return;
//         //         }
//         //         response.writeHead(200);
//         //         response.write(file);
//         //         response.end();

//         //     });
//         //     break;
//         // }

//         // case '/home':{
//         //     const filepath = resolve(__dirname, './pages/home.html');
//         //     readFile(filepath, (error, file) => {
//         //         if(error){
//         //             response.writeHead(500, 'can\'t process HTML file');
//         //             response.end();
//         //             return;
//         //         }
//         //         response.writeHead(200);
//         //         response.write(file);
//         //         response.end();

//         //     });
//         //     break;
//         // }

//         case 'authenticate':{
//             let data ='';
//             request.on('data',(chunk) => {
//                 data += chunk;
//             });

//             request.on('end', () => {

//                 const params = parse(data);
//                 // console.log(parse(data));
//                 // response.writeHead(301, {
//                 //     Location: '/home'
//                 // });
                
//                 response.end();
//             });
//             break;
//         }

//         default: {
//             res.writeHead(404, 'Service not Found');
//             res.end();
//         }
//     }

// });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'

app.listen(PORT, '127.0.0.1',() =>{
    console.log(`Server listening at ${HOSTNAME}:${PORT}`);
})