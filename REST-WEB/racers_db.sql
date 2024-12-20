drop database if exists racers_db;
create database racers_db DEFAULT CHARACTER SET utf8;

use racers_db;

drop table if exists racers;
drop table if exists my_user;

create table racers (
rc_id bigint not null auto_increment,
rc_name varchar(30) null comment '',
car_model varchar(30) null comment '',
primary key (rc_id) comment '');

insert into racers (rc_id, rc_name, car_model) values ('1','Yujin','BMW');
insert into racers (rc_id, rc_name, car_model) values ('2','Arthur','Audi');

create table my_user (
id bigint not null auto_increment,
login varchar(30) null comment '',
position bigint not null,
password varchar(100) null comment '',
role varchar(30) null comment '',
primary key (id) comment '');

insert into my_user(login, position, password, role) values('user', '1', '$2a$12$7IcBoBg2rpdb.QlxymAs6OKufu6.EIGVUNC8s/KLYF0zQAqKJJAfW', 'USER');
insert into my_user( login, position, password, role) values('admin', '2', '$2a$12$7IcBoBg2rpdb.QlxymAs6OKufu6.EIGVUNC8s/KLYF0zQAqKJJAfW', 'ADMIN');