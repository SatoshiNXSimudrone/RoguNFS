/*
                              
                              
 -Author: Benjamin Keil 
 -Property of RogueFendorLabs 2015
 
 This is the shema to build and initialize the RogueNFX database
 - gatewayWatch is Data corresponding to scans carrie out on Public IPs.
 - abyss anything that corresponds to scans carried out behind routers 
 - pwned succesfull password cracks are saved here!
*/


CREATE TABLE IF NOT EXISTS gateWatch
( unixDate int,
  public_ip varchar(15),
  port varchar (15),
  os varchar(50),
  name varchar(25),
  PRIMARY KEY (unixDate,public_ip,port)
);
CREATE TABLE IF NOT EXISTS abyss
( unixDate int,
  ip varchar(15),
  port varchar (15),
  os varchar(50),
  name varchar(25),
  PRIMARY KEY (unixDate,ip,port)
  );
CREATE TABLE IF NOT EXISTS pwned
( id int PRIMARY KEY,
  type varchar(15) ,
  ipaddress varchar(15),
  password varchar (15),
  unixDate int,
  note varchar(25)
  );
