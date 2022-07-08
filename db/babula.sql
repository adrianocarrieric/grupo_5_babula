DROP DATABASE IF EXISTS `babula`;
CREATE DATABASE `babula`;
USE `babula`;

CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `roleId` INT NOT NULL,
    PRIMARY KEY (`id`)
);

    CREATE TABLE `roles` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` LONGTEXT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
    `id` INT AUTO_INCREMENT,
    `title` VARCHAR(30) NOT NULL,
    `price` DECIMAL NOT NULL,
    `ingredients` VARCHAR(255) NOT NULL,
    `img` TEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `categoryId` INT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
    `id` INT AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `description` LONGTEXT NOT NULL,
    PRIMARY KEY (`id`)
    );


ALTER TABLE `users` ADD CONSTRAINT `FK_3fa5fedc-462c-486c-857f-04080227fb00` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_bf67147f-695d-45a2-b4ca-7bc7314d4132` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`)  ;
