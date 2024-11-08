//prblem-4


type Circle = {
    shape: "circle";
    radius: number
}
 type Rectangle = {
    shape: "rectangle";
    width: number,
    height: number
 }

 //Union type of shape
 type Shape = Circle | Rectangle

 const calculateShapeArea = (shape: Shape) =>{
     //type guard of circle
     if (shape.shape === "circle"){
        const result = (`the area of circle is = ${3.1416*shape.radius**2}`)
        console.log(result)
     }

     //type guard for rectangle
     else if(shape.shape === "rectangle"){
        const result = (`The area of ractangle is = ${shape.height*shape.width} `)
        console.log(result)
     } else {
        return 0
     }
 }
 

 //with sample of input
 calculateShapeArea(({shape:"circle", radius:5}))
 calculateShapeArea({shape:"rectangle", height:6, width:4})