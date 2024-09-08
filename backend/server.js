const {Server} = require('socket.io');

const io = new Server(3000, {cors: { origin: "*"}})
let temp=0;

io.on("connection", (socket)=>{
        console.log(socket.id);
        socket.emit('update', {hello:'World Text'});
        setInterval(()=>{
                socket.emit('update', {'hello': temp});
                temp = temp + 1;
        }, 1000);

})


io.listen(4000);
