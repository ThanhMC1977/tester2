let menu = ["rau xào","thịt luộc", "gà rán"]
let input;
input = prompt("Mời người dùng nhập vào C,R,U,D");
if (input === 'c') {
    menu.push(
      prompt("Mời người dùng nhập vào món ăn muốn thêm")
    )
    localStorage.setItem("món ăn",menu);
  }
  else if (input === "r") {
    alert("Danh sách món ăn: " + menu);
    localStorage.getItem("món ăn")
  }
  else if (input === "u") {
    let viTriMonAnThayThe = menu.indexOf(
      prompt("Mời người dùng nhập vào tên món ăn muốn thay thế")
    );
    if (viTriMonAnThayThe < 0) {
      alert("Món ăn này hiện không có trong menu")
    }
  
    
    menu[viTriMonAnThayThe] = prompt("Mời người dùng cập nhật món ăn mới");
    localStorage.setItem("món ăn",menu);
  }
  else if (input === "d") {
    let viTriMonAnDelete = menu.indexOf(
      prompt("Mời người dùng nhập vào tên món ăn muốn xóa")
    );
    if (viTriMonAnDelete < 0) {
      alert("Món ăn này hiện không có trong menu")
    }
  
    
    menu.splice(viTriMonAnDelete, 1);
    localStorage.setItem("món ăn",menu);
  }
  else {
    alert("Không tồn tại yêu cầu");
  }