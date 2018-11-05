/**
 * 소켓 서버와 소켓 클라이언트 기능을 노드로 구성하여 소켓 클라이언트에서 데이터를 보내면 소켓 서버에서 다시 돌려주는 기능 만들기
- 노드의 소켓 기능을 이용해 소켓 서버와 소켓 클라이언트를 만든다
- 소켓 클라이언트에서는 소켓 서버로 연결
- 소켓 클라이언트에서 소켓 서버로 '안녕!'같은 글자를 보내면 소켓 서버에서 그 글자를 그대로 다시 소켓 클라이언트로 보낸다
- 소켓 클라이언트와 소켓 서버에서는 보내고 받은 데이터를 화면에 출력
*/
const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!!');
});