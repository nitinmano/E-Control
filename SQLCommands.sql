create DATABASE ECDB;
use ECDB;

CREATE TABLE userAuth
(
    username  varchar(50) NOT NULL PRIMARY KEY,
    firstName varchar(50) NOT NULL,
    lastName  varchar(50) NOT NULL,
    mobileNumber varchar(50),
    email     varchar(30) NOT NULL,
    password  varchar(50) NOT NULL
);

CREATE TABLE userTransaction
(

);