---
title: "FTPS"
description: "FTPS (File Transfer Protocol Secure) is an extension of the popular File Transfer Protocol that supports Transport Layer Security (TLS) and the new defunct Secure Sockets Layer (SSL)."
authorImage: '../assets/ajesh.jpg'
author: 'Ajesh Mishra'
date: '14 Nov 2021'
duration: '5 min read'
published: true
photo: "https://i.imgur.com/VowXwXl.png"
tags:
  - mft
  - cryptography
  - security
  - ftps
---

<div id="article-header"></div>


## How FTPS works?

- Client sends **Authorization Command** (SSL/TLS) to the server. SSL/TLS encrypts the command channel to send FTP commands. 
- **Server** and **Client** Validation happens.
- **PBSZ** (Protected Buffer Size) Buffer Size of the protocol used to encrypt the Data. Zero for TLS.
- **PROT** (Data Channel Protection Level) (P/C).


## Default Ports

| Protocol | Control/ Command Port | Data Port     |
| :---     |                 ----: |          ---: |
| FTP      | 21                    | 20            |
| FTPS     | 990                   | 989           |


## What are the different connection types?

1. **Passive**: Data Port (random), Command Port (21)
2. **Active**: Data Port (20), Command Port (21)


## What are the different types of connections in FTPS?

1. **Implicit**: Mandates to secure both Data and Control channels, hence SSL handshake and Authorization command is necessary even before any FTP command is transferred.
2. **Explicit**: Client gets to decide weather to secure the channels, this was done so that non secure client's could also connect to FTPS ports eliminating the need to configure 2 FTP servers
3. **Forced Explicit**: Server forces the credentials in the control channel to be secure and client may choose to secure the data channel

<div id="article-footer"></div>