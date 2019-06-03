function change1() {
    document.getElementById('img1').src = '/image/img3.jpg';
   }
   
   function change2() {
       document.getElementById('img1').src = '/image/img1.jpg';
   }
   
   function changeimg2() {
       document.getElementById('img2').src = '/image/img3.jpg';
   }
   
   function changeimg2b() {
       document.getElementById('img2').src = '/image/img4.jpg';
   }
   
   function changeimg3() {
       document.getElementById('img4').src = '/image/img4.jpg';
   }
   
   function changeimg3b() {
       document.getElementById('img4').src = '/image/img6.jpg';
   }
   
   function submitForm() {
       var name = document.getElementById("name").value;
       alert("Thank you " + name);
   }