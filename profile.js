
var danhSachCauNoi = [
   
    "Ưu điểm: học đều, đủ",
    "nhược điểm: dốt đều",
    "Thích: TIỀN,TIỀN và TIỀN,ngủ,xem phim, đọc tryện, chơi game,...",
    "Năng lực kì lạ: nhớ được tên và sinh nhật người khác rất lâu ngay từ lần đầu gặp. Nhưng mù mặt...",
    "Mong muốn: không bị trường dí dealine nữa,huhu:<",
    "XIN CẢM ƠN VÌ ĐÃ XEM",
    "-HẾT-"
];

var chiSoHienTai = 0;
document.getElementById('btn-doi').onclick = function() {
    document.body.classList.toggle('dark');
};
document.getElementById('btn-quote').onclick = function() {
    chiSoHienTai = chiSoHienTai + 1;
    if (chiSoHienTai >= danhSachCauNoi.length) {
        chiSoHienTai = 0;
        }
    document.getElementById('quote').innerText = danhSachCauNoi[chiSoHienTai];
};
document.getElementById('quote').innerText = danhSachCauNoi[0];