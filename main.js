var eventcount=""
function My_touchmove(e)
{
current_position_of_touch_X = e.touches[0].clientX - canvas.offsetleft;
current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle - color;
ctx.lineWidth - 10;
ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y)
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
ctx.stroke();

last_position_of_touch_x = current_position_of_touch_x;
last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = "red";
    width_of_line = 10;
    eventcount="mousedown"
}
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mousecount == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        canvas.addEventListener("mousemove", my_mousemove);   ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }