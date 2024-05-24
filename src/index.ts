// Tính trừu tượng - chỉ tập trung vào các khái quát về Lớp, phương thức
// ví du : Cnn người : chiều cao ,cần nặng , nói
// phương thức trừu tượng : là phương thức không có phần thân

// interface - giao diện tính năng 

interface IShape{
    // khai báo các thuộc tính và phương thức trừu tượng
    chuVi : number;
    dienTich : number;
    //  phương thức trừu tượng
    tinhChuVi : ()=> number;
    tinhDienTich : ()=>number;
}
interface Colorable{

}
// tạo 1 lớp kề thừa và triển khai các phương thức trừu tượng
class Square implements IShape,Colorable{
    chuVi: number = 0; 
    dienTich: number = 0;
    canh : number;
    // constructor
    constructor(_canh:number){
        this.canh=_canh;
    }
    // phải triển khai toaanf bộ các phương thức trừu tượng của interface
    tinhChuVi = () => {
        return this.canh*4;
    };
    tinhDienTich = () => {
        return this.canh*this.canh;
    };
    getInfo=()=>{

    }
}
let squareOne: IShape = new Square(5);

// abstract class - lớp trừu tượng 

abstract class Animals{
    // các phương thức và thuộc tính bình thương
    species : string;
    sex : boolean;
    color: string;
    constructor(_species: string, _sex: boolean, _color: string){
        this.species = _species;
        this.sex = _sex;
        this.color = _color;
    }
    getInfor(){
        return `Animal [Species: ${this.species} | Sex: ${this.sex} | color : ${this.color} ]`
    }
    // các phương thức trừu tượng 
    abstract makeSound : () => string;
}

class Dog extends Animals{
    constructor(_species: string, _sex: boolean, _color: string){
        super(_species, _sex, _color);
    }

   // triển khai toàn bộ phương thức trừu tượng 
    makeSound = () => {
        return "Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go Go";
    } 
}

let dogOne : Animals = new Dog("Husky",true,"white-black");
console.log("Con husky kêu :", dogOne.makeSound());

class Cat extends Animals{
    constructor(_species: string, _sex: boolean, _color: string){
        super(_species, _sex, _color);
    }
    // triển khai toàn bộ phương thức trừu tượng
    makeSound = () => {
        return "MÈO MÉO MEO MÈO MEO";
    }
}

let catOne : Animals = new Cat("Ba Tư",false,"Pink");
console.log("Con mèo Ba tư kêu :", catOne.makeSound());