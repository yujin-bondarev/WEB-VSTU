drop database if exists racers_db;
create database racers_db DEFAULT CHARACTER SET utf8;

use racers_db;

drop table if exists racers;

create table racer (
rc_id bigint not null auto_increment,
rc_name varchar(30) null comment '',
car_model varchar(30) null comment '',
primary key (rc_id) comment '');

insert into racer (rc_id, rc_name, car_model) values ('1','Yujin','BMW');
insert into racer (rc_id, rc_name, car_model) values ('2','Arthur','Audi');
