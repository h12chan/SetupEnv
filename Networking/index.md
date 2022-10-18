---
layout: default
title: Networking
nav_order: 5
has_children: true
---

## TCP/IP 5-Layer Network Model

| Layer | Layer Name | Protocol | Protocol Data Unit | Addressing |
| :---- | :--------- | :------- | :----------------- | :--------- |
| Layer 5 | Application Layer | HTTP, SMTP, etc. | Messages | n/a |
| Layer 4 | Transport Layer | TCP/UDP | Segment | Port #s |
| Layer 3 | Network Layer | IP | Datagram | IP Address |
| Layer 2 | Data-Link Layer | Ethernet, Wi-Fi | Frames | MAC Address |
| Layer 1 | Physical Layer | 10 Base T, 802.11 | bits | n/a |


## Layer 1 - Physical Layer

| Layer | Layer Name | Protocol | Protocol Data Unit | Addressing |
| :---- | :--------- | :------- | :----------------- | :--------- |
| Layer 1 | Physical Layer | 10 Base T, 802.11 | bits | n/a |

The physical layer represents the hardware that connect devices on the network.  It focuses on moving bits (1s and 0s) across wires.  A method called modulation is used to make this possible - also called line coding. Duplex communication (data flows both ways at the same time) is possible on wiring such as twist-pair cabling.  They accomplish this via 2 wires going one way and 2 wires going the other way.  When there is interference between the wires, it is termed crosstalk.  

## Layer 2 - Data-Link Layer

| Layer | Layer Name | Protocol | Protocol Data Unit | Addressing |
| :---- | :--------- | :------- | :----------------- | :--------- |
| Layer 2 | Data-Link Layer | Ethernet, Wi-Fi | Frames | MAC Address |

The data-link layer is responsible for definition of a common way to interpret the bits that travel the physical layer such that devices on the network can communicate with each other.  A data packet is an encompassing term meaning any single set of binary bits sent across a network or link.

The Ethernet protocol (standard) is responsible for getting data to network devices on the same network or connection.  It solves the collision domain with a technique called carrier sense multiple access with collision detection (CSMA/CD) - determines when the communication channels are clear and free to transmit data.

A MAC (Media Access Control) address is a globally unique identifier (48-bit number of 6 groups/octets of 2 hexadecimal numbers) attached on a network interface.  

An Ethernet frame is a highly structured collection of information presented in a specific order. Almost all fields are mandatory and are of fixed size.

## Layer 3 - Network Layer

| Layer | Layer Name | Protocol | Protocol Data Unit | Addressing |
| :---- | :--------- | :------- | :----------------- | :--------- |
| Layer 3 | Network Layer | IP | Datagram | IP Address |

The network layer use router devices to communicate inbetween different networks.  The routers use the Internet Protocol (IP) to route packets across networks - it is central to the Internet.  The Internet is the most famous collection of networks connected together by routers.

IP addresses are 32 bit numbers in 4 octets - dotted decimal notation.  Each octet can represent numbers from 0 to 255, represented by 8 bits.  IP addresses belong to networks, and not the devices that connects to these networks.  IP addresses can by dynamic or static.  Dynamic IP addresses are assigned by a Dynamic Host Configuration Protocol (DHCP) automatically whereas static IPs are configured manually.  

The packet at the Network layer is called an IP datagram.  It is separated into the IP Header and Payload.  The entire IP datagram is enclosed in the payload of the data-link layer Ethernet frame.  And the transport layer TCP or UDP segment is entirely enclosed in the payload of the IP datagram.  Finally, the application layer protocol's message is enclosed in the payload of the TCP segment.

Address Resolution Protocol (ARP) is used to discover the hardware address of a node with a certain IP address.  Common network devices contain an ARP table which is a list of IP addresses and the MAC address associated with it.  When discovery of a MAC address is required, an ARP broadcast is sent over the local network in which it awaits for an ARP response with the MAC address. ARP table expires a short amount of time to ensure current updates of the network.

## Layer 4 - Transport Layer

| Layer | Layer Name | Protocol | Protocol Data Unit | Addressing |
| :---- | :--------- | :------- | :----------------- | :--------- |
| Layer 4 | Transport Layer | TCP/UDP | Segment | Port #s |

The transport layer determines which programs get the data that is routed on/across network(s) in a client-server architecture.  A client-server architecture is one where the client requests data from the server on/across network(s).

Transmission Control Protocol (TCP) is the protocol responsible for reliable transmission of data in a connection-ful manner.

User Datagram Protocol (UDP) is much faster in terms of packets transferred but does not guarantee the reliable transmission of data and it works connection-less.

## Layer 5 - Application Layer

| Layer | Layer Name | Protocol | Protocol Data Unit | Addressing |
| :---- | :--------- | :------- | :----------------- | :--------- |
| Layer 5 | Application Layer | HTTP, SMTP, etc. | Messages | n/a |

The application layer uses different protocols related to programs to serve the user.

## Non-Routable Address Space

- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16

Non-Routable Address space is reserved for personal network assignment and cannot be accessed on the Internet.  The Network Address Translation (NAT) can assign these non-routable address space in a network such that it can be represented by a single IP address.  It alleviates IPv4 exhaustion.

## Subnetting
## Routing
## Name Resolution
## Dynamic Host Configuration Protocol (DHCP)
## Network Address Translation (NAT)
## VPNs and Proxies