---
title: "Connect Direct"
description: "Connect Direct is a proprietary protocol of IBM which can configured transfer files to Sterling Integrator and remote Connect:Direct nodes as it comes with both a client and server built into it."
authorImage: '../assets/ajesh.jpg'
author: 'Ajesh Mishra'
date: '14 Nov 2021'
duration: '5 min read'
published: true
photo: "https://i.imgur.com/IjjE5FV.png"
tags:
  - mft
  - cryptography
  - security
  - cd
---

<div id="article-header"></div>


## Command to Change a CDP

### {terminal} Direct Prompt

```bash
CHANGE PROCESS 
WHERE (NODE, PNAME, PNUM, SUB)
DEST
HOLD = Yes | No | Call
RELEASE
RETAIN = Yes | No | InitialSTARTT
```

## Use FLUSH command to remove a CDP in execution stage

### {terminal} Direct Prompt

```bash
FLUSH PROC
WHERE (PNAME, PNUM, SUB)
```

## Remove a CDP not in execution stage

### {terminal} Direct Prompt

```bash
DELETE PROC
WHERE (PNAME, PNUM, SUB)
```

## Select Statement to query the CDP

### {terminal} Direct Prompt

```bash
SEL STAT
WHERE (CCODE, PNAME, PNUM, STATT, SNODE, FNAME)
```


## DISP parameter for mainframe nodes?

- NEW | OLD | MOD | RPL | SHR, (Stats)
- KEEP | CATLG, (if process completes successfully)
- KEEP | CATLG | DELETE (if process ends abruptly)

> Default Client Port (1363) and Server Port (1364)


## What are the important parameters in netmap.cfg?

- **comm.info**: contains remote nodes IP/ DNS and Port (1364)
- **alternate.comminfo**: to be configured with multiple IPs and Ports for the Pnode which can initiate connection with more than one IP address. This is required when Netmap Check is turned on.
- **alt.comm.outbound**: to be configured with multiple IPs and Ports for Snodes with multiple NIC cards, when Snode can listen to multiple IP addresses. Pnode will try to connect all the IPs configured in this parameter.
- **outgoing.address**: to be configured with Virtual IP of the Snode when it's running on HA/ cluster configuration. This is required when Netmap Check is turned on.

| Operating System | Version |
| :---     |             :---- |
| CD of Unix | 4.2.0.4_iFix56 |
| CD of Windows | 4.8.03 |


## TCQ: Transmission Control Queue

- **Hold** - When hold is yes during execution or process is in error state 
- **Timer** - STARTT is mentioned or if process in retry state
- **Wait** - Process is waiting for a session to be executed
- **Execution** - When the file is being transferred


## Transfer b/w unix and windows via CD

Default datatype for UNIX and all other cd nodes is text except Windows. Default datatype for Windows is binary

- xlate=yes is default for text file transfer
- xlate=no is default for binary file transfer

For file transfer b/w two ASCII nodes like UNIX and Windows it is recommended to add datatype=binary in both from and to part of the copy statement. This ensures that there is no data translation and the file is transferred as it is.

> In Mainframe the datatype is EBSIDIC. For more information chekcout out [IBM Documentation](https://www.ibm.com/support/pages/how-specify-sysopts-copy-between-ascii-platforms) around this topic.

<div id="article-footer"></div>