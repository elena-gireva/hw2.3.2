let etalonWith = 15;
let etalonHight = 6;
let etalonType = "button";
let etalonColor = "green";

MessageButton = class {
  constructor(widthButton, hightButton, typeButton, colorButton) {
    this.widthButton = widthButton;
    this.hightButton = hightButton;
    this.typeButton = typeButton;
    this.colorButton = colorButton;
  }
  onClick() {
    let props = `- size is ${this.widthButton} x ${this.hightButton}, type is ${this.typeButton}, color is ${this.colorButton}`;
    if (
      this.widthButton === etalonWith &&
      this.hightButton === etalonHight &&
      this.typeButton === etalonType &&
      this.colorButton === etalonColor
    ) {
      console.log(`!!!This button is match to the parametrs ${props}`);
    } else {
      console.log(`This button is not match to the parametrs ${props}`);
    }
  }
};

let button1 = new MessageButton(15, 8, "button", "green");
let button2 = new MessageButton(10, 7, "button", "blue");
let button3 = new MessageButton(15, 6, "button", "green");
let button4 = new MessageButton(13, 8, "button", "grey");

button1.onClick();
button2.onClick();
button3.onClick();
button4.onClick();
