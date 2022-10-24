let pTable = `CREATE TABLE if not exists Products(
    product_id int auto_increment,
    Product_url varchar(255) not null,
    Product_name varchar(255) not null,
    PRIMARY KEY (product_id))`;
     `CREATE TABLE if not exists ProductDesc(
     description_id int,product_id int,
        Product_brief_description varchar(255) not null,
        Product_description varchar(255) not null,
        Product_img varchar(255) not null,
        Product_link varchar(255) not null,FOREIGN KEY(product_id) REFERENCES Products(product_id))`/`CREATE TABLE if not exists ProductPrice(price_id int auto_increment,Product_id int not null,starting_price varchar(255) not null,price_range varchar(255),PRIMARY KEY (price_id),FOREIGN KEY(product_id) REFERENCES Products(product_id))`;`CREATE TABLE if not exists User(user_id int auto_increment,user_name varchar(255) not null,User_password varchar(255),PRIMARY KEY (user_id))`;
        `CREATE TABLE if not exists Orders(order_id int auto_increment,Product_id int not null,user_id int not null,PRIMARY KEY (order_id),FOREIGN KEY(product_id) REFERENCES Products(product_id),FOREIGN KEY(user_id) REFERENCES User(user_id))`

export default pTable