# SimpleHashEncryption Test Server

This test server shows a basic demonstration of usage of the [SimpleHashEncryption framework](https://www.npmjs.com/package/simplehashencryption)

## Usage
- Clone or download this repo
- cd to the root of the directory
- from terminal, run `source vars` (this makes sure you have the proper env variables)
- after sourcing the env vars, run `npm start`
- your server is now running locally

### Encrypting
Hit the endpoint 
`http://localhost:4800/encrypt?string=anystringhere`

You will recieve a response with the encrypted string

### Decrypting
Hit the endpoint 
`http://localhost:4800/decrypt?string={HASHED STRING FROM PREVIOUS EXAMPLE}`

You will recieve a response with the decrypted string provided in the original request
