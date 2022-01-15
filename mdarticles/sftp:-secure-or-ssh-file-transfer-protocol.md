---
title: 'SFTP: Secure or SSH File Transfer Protocol'
description: "SFTP (SSH File Transfer Protocol) is a secure file transfer protocol. It runs over the SSH protocol. It supports the full security and authentication functionality of SSH."
authorImage: '../assets/ajesh.jpg'
author: 'Ajesh Mishra'
date: '28 Nov 2021'
duration: '5 min read'
published: true
photo: "https://i.imgur.com/8STOTWa.png"
tags:
  - mft
  - cryptography
  - security
  - sftp
---

<div id="article-header"></div>


## There is a 2 step authentication process?

1. Client is asked to check if the server is know by checking in the known host key.
2. ‎Once server is validated, client will encrypt a signature using the private key and send it to the server to verify the signature using client's public key.

> Default Port is 22.


## What are the parameters required for SFTP?

1. Cipher - 3des-cbc, aes128-cbc, blowfish-cbc
2. MAC (Message Authentication Codes) - hmac-sha1, hmac-md5, hmac-sha2-256
3. Know Host Key of the server
4. User identity key from client


## What are the commonly used SFTP commands?

- Command to scan a SSH Host key ssh-keyscan -t dsa -p 22 hostname
- Command to create SSH Keys ssh-keygen -b 1024 -t rsa

<div id="article-footer"></div>