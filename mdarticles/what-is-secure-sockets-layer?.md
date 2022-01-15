---
title: "What is Secure Sockets Layer?"
description: "SSL (Secure Sockets Layer) is a protocol for establishing secure links between networked computers. Its current iteration is called TLS - Transport Layer Security."
authorImage: '../assets/ajesh.jpg'
author: 'Ajesh Mishra'
date: '28 Nov 2021'
duration: '10 min read'
published: true
photo: "https://i.imgur.com/s6h7LhU.png"
tags:
  - mft
  - cryptography
  - security
  - ssl
---

<div id="article-header"></div>


## How SSL works?

1. **SSL Handshake** is the step where Client lets server know the secure communication protocol - SSL/TLS, that would be used for communication. They agree on a key, cipher and hash to use.
2. **Server Validation** and **Client Authentication**.
3. **Key Exchange** happens when Client generates a random symmetric key to encrypt the data and then uses server public key (attached in the servers SSL certificate) to encrypt the symmetric key.


## What is a digital signature?

CA Authority uses it's private key to encrypt the contents of the certificate, the cypher text is attached to the certificate as digital signature.

> Root certificates are self signed certificates. Self signed certificates are signed by their own private key.

<div id="article-footer"></div>