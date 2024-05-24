"use strict";
// Tính trừu tượng - chỉ tập trung vào các khái quát về Lớp, phương thức
// ví du : Cnn người : chiều cao ,cần nặng , nói
// phương thức trừu tượng : là phương thức không có phần thân
// tạo 1 lớp kề thừa và triển khai các phương thức trừu tượng
class Square {
    // constructor
    constructor(_canh) {
        this.chuVi = 0;
        this.dienTich = 0;
        // phải triển khai toaanf bộ các phương thức trừu tượng của interface
        this.tinhChuVi = () => {
            return this.canh * 4;
        };
        this.tinhDienTich = () => {
            return this.canh * this.canh;
        };
        this.getInfo = () => {
        };
        this.canh = _canh;
    }
}
let squareOne = new Square(5);
// abstract class - lớp trừu tượng 
class Animals {
    constructor(_species, _sex, _color) {
        this.species = _species;
        this.sex = _sex;
        this.color = _color;
    }
    getInfor() {
        return `Animal [Species: ${this.species} | Sex: ${this.sex} | color : ${this.color} ]`;
    }
}
class Dog extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        // triển khai toàn bộ phương thức trừu tượng 
        this.makeSound = () => {
            return "Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go";
        };
    }
}
let dogOne = new Dog("Husky", true, "white-black");
console.log("Con husky kêu :", dogOne.makeSound());
class Cat extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        // triển khai toàn bộ phương thức trừu tượng
        this.makeSound = () => {
            return "MÈO MÉO MEO MÈO MEO";
        };
    }
}
let catOne = new Cat("Ba Tư", false, "Pink");
console.log("Con mèo Ba tư kêu :", catOne.makeSound());
