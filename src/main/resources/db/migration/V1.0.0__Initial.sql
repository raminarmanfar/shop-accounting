create sequence entity_seq
    increment by 10;

create table customer
(
    id                  bigint not null
                        constraint customer_pk
                        primary key,
    customer_name       varchar(50) not null,
    customer_surname    varchar(50) not null,
    date_started        DATE,
    home_address        varchar(255),
    cell_phone          varchar(15),
    work_address        varchar(255),
    home_phone          varchar(15),
    work_phone          varchar(15),
    description         varchar(255)
);
