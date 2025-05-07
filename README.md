# Amazon Clone Project

Một dự án mô phỏng giao diện và chức năng của trang web Amazon, được xây dựng bằng JavaScript thuần.

## Mô tả

Dự án này là một bản sao đơn giản của Amazon, tập trung vào việc triển khai các chức năng cơ bản của một nền tảng thương mại điện tử như hiển thị sản phẩm, giỏ hàng, thanh toán và theo dõi đơn hàng.

## Cấu trúc dự án

```
javascript-amazon-project-main/
├── .vscode/
│   └── settings.json
├── backend/
│   └── products.json
├── data/
│   ├── cart-oop.js
│   ├── cart.js
│   ├── deleveryOptions.js
│   └── products.js
├── images/
├── scripts/
│   ├── checkout/
│   │   ├── orderSummary.js
│   │   └── paymentSummary.js
│   ├── utils/
│   │   └── money.js
│   ├── amazon.js
│   └── checkout.js
├── styles/
│   ├── pages/
│   │   └── checkout/
│   ├── shared/
│   │   ├── amazon-header.css
│   │   └── general.css
│   ├── amazon.css
│   ├── orders.css
│   └── tracking.css
└── html/
    ├── amazon.html
    ├── checkout.html
    ├── orders.html
    └── tracking.html
```

## Tính năng

- **Trang chủ sản phẩm**: Hiển thị danh sách sản phẩm từ dữ liệu JSON
- **Giỏ hàng**: Thêm/xóa sản phẩm, cập nhật số lượng
- **Tùy chọn giao hàng**: Cho phép người dùng chọn phương thức giao hàng
- **Tóm tắt đơn hàng**: Hiển thị thông tin sản phẩm đã chọn
- **Tóm tắt thanh toán**: Tính toán và hiển thị chi phí
- **Theo dõi đơn hàng**: Theo dõi trạng thái đơn hàng đã đặt

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript (ES6+)
- Day.js (thư viện xử lý thời gian)
- Thư viện tiện ích money.js để định dạng tiền tệ

## Cài đặt và chạy

1. Clone repository:
   ```
   git clone https://github.com/your-username/javascript-amazon-project-main.git
   ```

2. Mở file `amazon.html` trong trình duyệt web để bắt đầu

   Hoặc sử dụng Live Server nếu bạn đang dùng Visual Studio Code:
   - Cài đặt extension Live Server
   - Click chuột phải vào file `amazon.html` và chọn "Open with Live Server"

## Luồng hoạt động của ứng dụng

1. Người dùng duyệt sản phẩm trên trang chủ (`amazon.html`)
2. Thêm sản phẩm vào giỏ hàng
3. Chuyển đến trang thanh toán (`checkout.html`)
4. Chọn tùy chọn giao hàng và xem tóm tắt đơn hàng
5. Hoàn tất thanh toán
6. Theo dõi đơn hàng qua trang theo dõi (`tracking.html`)

## Các chức năng chính

### Quản lý giỏ hàng (`cart.js` / `cart-oop.js`)
- Thêm sản phẩm vào giỏ hàng
- Xóa sản phẩm khỏi giỏ hàng
- Cập nhật số lượng sản phẩm
- Lưu giỏ hàng vào localStorage

### Tóm tắt đơn hàng (`orderSummary.js`)
- Hiển thị danh sách sản phẩm trong giỏ hàng
- Hiển thị thông tin chi tiết của từng sản phẩm
- Tính toán tổng số tiền

### Tóm tắt thanh toán (`paymentSummary.js`)
- Tính toán tổng chi phí bao gồm thuế và phí giao hàng
- Cập nhật tự động khi thay đổi tùy chọn giao hàng

## Đóng góp

Nếu bạn muốn đóng góp vào dự án, hãy tạo pull request hoặc báo cáo các vấn đề qua phần Issues.

## Giấy phép

Dự án này được phân phối dưới giấy phép [MIT](LICENSE).
