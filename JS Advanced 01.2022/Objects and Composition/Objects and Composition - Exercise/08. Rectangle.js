function rectangle(width, height , col) {

    let color = col[0].toUpperCase() + col.slice(1);

   class Rectangle {
       constructor(width,height, color){
           this.width = width;
           this.height = height;
           this.color = color;
        }

        calcArea = () =>  this.width*this.height;
   }
   return new Rectangle (width, height, color)
}