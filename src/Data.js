const sampleProducts = [
  {
    id: 1,
    name: "Giày Nike Air Presto",
    category: "Quần áo/Giày dép",
    price: 55,
    description: "Nike Air Presto là một trong những dòng sản phẩm được đánh giá rất thời trang và dễ phối đồ. Một điểm cộng cho Nike Air Presto trong mắt các đầu giày là bộ đệm êm ái, độ co giãn tuyệt vời của upper và form dáng retro runner đậm nét. Nếu tìm hiểu sâu về dòng giày Nike Air Presto này, bạn sẽ còn thấy rất nhiều điều khá thú vị.",
    inStock: true,
    popular: true,
    imageURL: "https://khogiaythethao.vn/wp-content/uploads/2019/02/nike-air-presto-trang-den-sf.jpg"
  },
  {
    id: 2,
    name: "Đồng hồ Casio Hammer Tone",
    category: "Đồng hồ/Trang sức",
    price: 60000,
    description: "Thuộc dòng G-Shock thể thao, Hammer Tone MRG-G1000HT vẫn giữ thiết kế khỏe khoắn, năng động. Nổi bật với tông màu đen lì thời thượng, chiếc đồng hồ có thêm điểm nhấn với tông màu vàng đồng điểm xuyết ấn tượng.",
    inStock: false,
    popular: false,
    imageURL: "https://casiovietnam.net/upload/dong-ho-casio-mrg-g1000d-1a%20(2).jpg"
  },
  {
    id: 3,
    name: "Xiaomi Miband 6",
    category: "Đồng hồ/Trang sức",
    price: 39,
    description: "Kế thừa tinh hoa của những thế hệ trước, Xiaomi Mi Band 6 là chiếc vòng đeo tay thông minh hoàn hảo khi sở hữu màn hình AMOLED sắc nét, hỗ trợ đo nhịp tim và SpO2, thời lượng pin 2 tuần, hoạt động tập luyện chuyên nghiệp và khả năng chống nước bền bỉ.",
    inStock: false,
    popular: false,
    imageURL: "https://cdn-amz.fadoglobal.io/images/I/61Tc7hKz-lS.jpg"
  },
  {
    id: 4,
    name: "Homo Sapiens",
    category: "Sách",
    price: 10,
    description: "Lược sử loài người là một cuốn sách của Yuval Noah Harari xuất bản lần đầu bằng tiếng Do Thái ở Israel năm 2011, và bằng tiếng Anh vào năm 2014. Cuốn sách nói bao quát về lịch sử tiến hóa của loài người từ thời cổ xưa trong thời kỳ đồ đá cho đến thế kỷ XXI.",
    inStock: true,
    popular: true,
    imageURL: "https://salt.tikicdn.com/cache/w1200/ts/product/df/e3/b4/867027204c75aa18f89c173877bd57e6.jpg"
  },
  {
    id: 5,
    name: "MacBook Air M2 2022",
    category: "Điện tử",
    price: 1199,
    description:"Thiết kế tinh tế, hiệu năng mạnh mẽ, chiếc MacBook đáng giá nhất 2022!",
    inStock: false,
    popular: true,
    imageURL: "https://cdn.tgdd.vn/Files/2022/03/06/1418756/macs_1280x671-800-resize.jpg"
  },
  {
    id: 6,
    name: "Điều hòa Panasonic Inverter",
    category: "Điện tử",
    price: 500,
    description: "Điều hòa Panasonic Inverter mang sắc trắng thanh lịch, thiết kế đơn giản, tinh tế nhưng vô cùng sang trọng, phù hợp với nhiều không gian nội thất.",
    inStock: true,
    popular: true,
    imageURL: "https://dienmaythienphu.vn/wp-content/uploads/2020/11/3-44.jpg"
  },
  {
    id: 7,
    name: "Đồng Hồ Rolex Datejust",
    category: "Đồng hồ/Trang sức",
    price: 100000,
    description: "Không ngừng nỗ lực để định hình những tiêu chuẩn kĩ thuật mới, Rolex hân hoan giới thiệu đến giới sưu tập đồng hồ sản phẩm Rolex Datejust 126331 với mặt số màu socola ma mị, cuốn hút mọi ánh nhìn.",
    inStock: true,
    popular: false,
    imageURL: "https://cdn2.jomashop.com/media/catalog/product/r/o/rolex-submariner-automatic-chronometer-black-dial-mens-watch-124060bkso_1.jpg"
  },
  {
    id: 8,
    name: "Giày Adidas Gazelle",
    category: "Quần áo/Giày dép",
    price: 55,
    description: "Giày Thể Thao Adidas Gazelle là đôi giày thời trang với thiết kế mang nét thể thao năng động. Adidas Gazelle mang trên mình gam màu thanh lịch cho bạn thêm trẻ trung.",
    inStock: false,
    popular: false,
    imageURL: "https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000198734114_adidas-bb5476_cblack_white_goldmt_pl_08.jpg"
  },
  {
    id: 9,
    name: "Bàn phím Happy Hacking Key board HP Japan",
    category: "Điện tử",
    price: 4500,
    description: "Kiểu dáng “ngoan hiền”, thiết kế đơn giản mang phong vị hoài cổ với cách bố trí phím của HHKBPro2 mang đến trải nghiệm tuyệt vời nhất thế giới phím cơ!",
    inStock: false,
    popular: false,
    imageURL: "https://ae01.alicdn.com/kf/HTB1ffVhNkvoK1RjSZFNq6AxMVXaM/KBDfans-u-Ph-HHKB-RGB-TRAO-I-N-NG-DIY-B-m-kh-ng-Keycaps-v.jpg_Q90.jpg_.webp"
  },

  {
    id: 10,
    name: "Áo PSG - Messi",
    category: "Quần áo/Giày dép",
    price: 1000,
    description: "Chiếc áo số 30 của huyền thoại Leo Messi tại PSG!",
    inStock: false,
    popular: true,
    imageURL: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/312/744/products/dfdty1-bc710287c3369a3f1e16294722544060-1024-1024.png"
  },
  {
    id: 11,
    name: "Bộ dao cắt Sashimi",
    category: "Gia dụng",
    price: 200,
    description: "Trong nghệ thuật làm bếp cũng như văn hóa ẩm thực, không thể không nhắc đến sự tinh tế trong các món ăn của Nhật Bản, đặc biệt là cách thức chế biến các món hải sản tươi sống hay còn gọi là Sashimi. Để thực hiện được những món ăn cầu kỳ mang tính thẩm mỹ cao như Sashimi đòi hỏi phải có một bộ dao chuyên biệt một bộ dao chuyên biệt, đó chính là dao Sashimi.",
    inStock: true,
    popular: false,
    imageURL: "https://vn-live-01.slatic.net/p/e08785b21697ffc6605cfee4943b1405.jpg"
  },
  {
    id: 12,
    name: "Chảo nhôm chống dính Sunhouse",
    category: "Gia dụng",
    price: 50,
    description: "Chảo đá Sunhouse đường kính 24 cm, chiên được 3 trứng ốp la cùng lúc. Chảo đá bằng nhôm đúc, bề mặt là lớp chống dính đá hoa cương phủ sơn Whitford chịu nhiệt tối đa 315oC. Sử dụng được cho bếp gas, bếp hồng ngoại, không sử dụng được cho bếp từ. Đến từ thương hiệu tin cậy Sunhouse – Việt Nam, sản xuất tại Việt Nam.",
    inStock: true,
    popular: false,
    imageURL: "https://cdn.tgdd.vn/Products/Images/2403/74214/do-dung-chao-da-sieu-ben-sunhouse-sbd24-99-org.jpg"
  }
]

/* Available categories */
const categories = ['Tất cả danh mục', 'Quần áo/Giày dép', 'Sách', 'Đồng hồ/Trang sức', 'Điện tử', "Gia dụng"]

/* 
 * This function generates menu items.
 * Some are hardcoded, some based on categories.
 */
const generateMenuItems = () => {
  let menuItems = [
    { type: "title", name: "CHÍNH", id: 0 },
    { type: "item", name: "Trang chủ", url: "/", parent: "CHÍNH", id: 1},
    { type: "item", name: "Thông tin", url: "/about", parent: "CHÍNH", id: 2 },
    { type: "title", name: "DANH MỤC", id: 3 },
  ];

  menuItems = menuItems.concat(categories.map((x, i) => {
    return {
      name: x, url: "/search/?directCategory=true&category=" + x, id: 4 + i , type: "item", parent: "DANH MỤC"
    }
  }))

  return menuItems;
}

let menuItems = generateMenuItems();

export { sampleProducts, menuItems, categories }