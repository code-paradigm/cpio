---
title: "An introduction to Cryptography!"
description: "In today's world we would all agree that data is the most valuable asset anyone can posses. However we want data to be accessable to easily and securely to the intended person only. Cryptography is the study of secure communications techniques."
authorImage: '../assets/ajesh.jpg'
author: 'Ajesh Mishra'
date: '28 Nov 2021'
duration: '10 min read'
published: true
photo: "https://i.imgur.com/CGiqjJD.png"
tags:
  - mft
  - cryptography
  - security
---

<div id="article-header"></div>


## Algorithm is of two types
- **Symmetric** algorithm ses the same key to both encrypt and decrypt data. Example: DES Developed by IBM.
- **Asymmetric** algorithm uses a public and private key pair, either of the keys can be used to encrypt the data and the opposite can be used to decrypt it. Example: RSA.

> {tip} Hash is an Algorithm which is only used to encrypt and the message digest can't be decrypted. (e.g. SHA-1 and MD5)

## How does a Hash work?
1. Pads the message with random data.
2. Encrypts the message.
3. Takes finite number of bytes to form a finger print.

> {note} Hash can also be used to check data integrity during a transfer. Meaning if the data has been tampered during the transfer.

## What is a Cipher?
Cipher is the mechanism how the algorithm would be used to encrypt the data (e.g. Block and Streams ciphers)

- Block cipher - e.g. DES, 3DES, AES, IDEA
- Stream cipher - e.g. RC4 used in SSL.

## How does Block cipher work?
- Uses Initialisation Vector (IV) and Cipher Block Chaining (CBC).
- Xor IV and 1st chunk of message and encrypt it with a key from the key table
- Xor result/ digest and 2nd chunk of message and encrypt it

## What is DES?
Digital Encryption Standard (obsolete now) uses a 56 bit key to create a key table. And then a key from the key table is used to encrypt data.

> {quote} 3DES just uses 3 different keys one after the other to perform the operation 3 times.

- **IDEA** - International Data Encryption Algorithm. Uses 128 bit key to generate 56 keys each of 16 bits.
- **AES** - Advanced Encryption Standard. 

## How RSA works?
It is based on the principle that when two large prime numbers are multiplied it's difficult to factor the result.
Uses both symmetric and asymmetric keys for encryption as symmetric keys are used to encrypt data and asymmetric keys are used to encrypt the symmetric keys.

## How PGP works?
Creates a one time session key, uses it to encrypt the message. Then uses the public key that the recipient has to encrypt the session key and send it along with the message.

> {know} Difference between PGP and RSA is that in PGP recipient has public key but in RSA recipient has the private key.

<div id="article-footer"></div>