const server = require( './server' );
const port = process.env.port || 7777;
server.listen( port, () => {
    console.log( `It's Working on port ==> ${ port }` );
} )