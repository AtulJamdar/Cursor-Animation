 // Add cursor logic at the beginning of the script
 const cursor = document.querySelector('.custom-cursor');
 const follower = document.querySelector('.cursor-follower');
 let posX = 0,
     posY = 0;
 let mouseX = 0,
     mouseY = 0;

 // Cursor animation
 const animateCursor = () => {
     posX += (mouseX - posX) * 0.3;
     posY += (mouseY - posY) * 0.3;

     cursor.style.left = posX + 'px';
     cursor.style.top = posY + 'px';

     follower.style.left = mouseX + 'px';
     follower.style.top = mouseY + 'px';

     requestAnimationFrame(animateCursor);
 };

 // Mouse move listener for cursor
 document.addEventListener('mousemove', (e) => {
     mouseX = e.clientX;
     mouseY = e.clientY;
 });

 // Start cursor animation
 animateCursor();

 // Add hover effects for cursor
 document.querySelectorAll('button, .card-title').forEach(element => {
     element.addEventListener('mouseenter', () => {
         cursor.style.width = '40px';
         cursor.style.height = '40px';
         cursor.style.borderColor = '#0072ff';
     });

     element.addEventListener('mouseleave', () => {
         cursor.style.width = '20px';
         cursor.style.height = '20px';
         cursor.style.borderColor = '#7f00ff';
     });
 });