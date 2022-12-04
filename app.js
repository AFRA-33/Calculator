let obj = [
  "https://media.gettyimages.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=612x612&w=gi&k=20&c=Uo_yzYm9UJu6GpKilOLGrCbiSjyMB5DsvZTYpybYxj4=",
  "https://www.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J1l-rceZJyefqnMdLtIaqX2q72MoEZJJ4Q&usqp=CAU",
  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=6hCgXAzeqhu-lU1yTwe2o4rtS4jI2PVC6_MRqvOjORg=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMma1RsDUuSNsB1CLxhrSbNJH9OApmgGQndQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
  "https://t3.ftcdn.net/jpg/02/01/21/90/360_F_201219029_69S3Oy0WMLN7bl1GTbxMAUNZkQhJmjbj.jpg",
  "https://thumbs.dreamstime.com/z/double-exposure-image-businessman-using-smartphone-sunrise-overlay-cityscape-concept-modern-life-business-123301987.jpg",
  "https://loveshayariimages.in/wp-content/uploads/2022/05/nature-Simple-Whatsapp-Dp-Profile-Images-photo-hd.gif",
  "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
  "https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"];

var img = document.getElementsByTagName("img");
var src = document.createAttribute("src");
var count=0;

function image() {
    if (count < obj.length) {
      src.value=obj[count];
      img[0].setAttributeNode(src);
    }
    count = count + 1;
}
