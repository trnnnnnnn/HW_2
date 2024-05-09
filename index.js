let point1 = 0;
let point2 = 0;

function checkAnswer1(answer1) {
   const result1 = document.getElementById('result1');
   if (answer1 === 'a') {
       result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
       result1.style.color = 'green';
       point1 = 1;
   } else {
       result1.textContent = "Incorrect! Try again.";
       result1.style.color = 'red';
       point1 = 0;
   }
   checktotalAnswer(point1, point2);
   return point1
}

function checkAnswer2(answer2) {
   const result2 = document.getElementById('result2');
   if (answer2 === 'b') {
       result2.textContent = "ถูกต้อง  Makro เป็นศูนย์จำหน่ายสินค้าแบบขายส่งของเครือ CP ALL";
       result2.style.color = 'green';
       point2 = 1;
   } else {
       result2.textContent = "Incorrect! Try again.";
       result2.style.color = 'red';
       point2 = 0;
   }
   checktotalAnswer(point1, point2);
   return point2
}

function checktotalAnswer(point1, point2) {
    const result3 = document.getElementById('result3');
    const point_total = point1 + point2;
    result3.textContent = "คุณได้ทั้งหมด " + point_total + " คะแนน";
}
