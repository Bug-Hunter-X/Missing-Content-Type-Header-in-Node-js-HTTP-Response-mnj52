# Node.js HTTP Server - Missing Content-Type Header

This repository demonstrates a common error in Node.js HTTP servers: the absence of a `Content-Type` header in the response.  This can lead to unexpected behavior in the browser, preventing proper content rendering.

## The Problem

The `bug.js` file contains a simple HTTP server.  However, it lacks a `Content-Type` header in its response.  When a browser requests content from this server, it receives the response body but doesn't know how to interpret it due to the missing header. This often results in a blank page or unexpected rendering.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle this. By adding a `Content-Type` header to the response (e.g., `'Content-Type': 'text/plain'` for plain text), the browser can correctly interpret and render the content.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` and `node bugSolution.js` separately.
4. Access the server in your browser at `http://localhost:3000`.  Observe the difference in behavior between the two versions.

This example highlights the importance of setting appropriate headers in your Node.js HTTP responses for correct browser rendering.