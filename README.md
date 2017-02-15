Node app for exploring 'serverless' platforms, like AWS lambda.

Upon connection on :8080, it creates a bash shell and a socket. Input from the socket is sent to the shell. Output from the shell is sent to the socket.


Run it locally:
```bash
docker build -t web-shell .
docker run -d -p 8080:8080 web-shell
open http://localhost:8080
```