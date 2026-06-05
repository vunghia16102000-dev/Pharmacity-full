const products = [
  {
    id: 1,

    name: "Panadol Extra đỏ (Hộp 120 viên)",

    price: 235000,

    category: "Thuốc không kê đơn",

    image: "panadonlextrado.webp",
  },

  {
    id: 2,

    name: "Siro ho Prospan Đức 100ml",

    price: 72000,

    category: "Thuốc không kê đơn",

    image: "sirohoprospan.jpg",
  },

  {
    id: 3,

    name: "Gaviscon dạng hỗn dịch (Gói 10ml)",

    price: 15000,

    category: "Thuốc không kê đơn",

    image: "gaviscon.jpg",
  },

  {
    id: 4,

    name: "Dầu gió xanh Con Ó 24ml",

    price: 145000,

    category: "Thuốc không kê đơn",

    image: "daudoxanhcono.webp",
  },

  {
    id: 5,

    name: "Thuốc nhỏ mắt V.Rohto New",

    price: 52000,

    category: "Thuốc không kê đơn",

    image: "thuocnhomat.jpg",
  },

  {
    id: 6,

    name: "Men vi sinh Enterogermina (Ống 5ml)",

    price: 9000,

    category: "Thuốc không kê đơn",

    image: "menvisinh.webp",
  },

  {
    id: 7,

    name: "Efferalgan sủi 500mg",

    price: 48000,

    category: "Thuốc không kê đơn",

    image: "efferalgan.jpg",
  },

  {
    id: 8,

    name: "Kem trị côn trùng đốt Remos",

    price: 35000,

    category: "Thuốc không kê đơn",

    image: "kemtricontrung.jpg",
  },

  {
    id: 9,

    name: "Viên uống Vitamin C DHC (60 ngày)",

    price: 160000,

    category: "Vitamin & Khoáng chất",

    image: "vienuongvitaminC.webp",
  },

  {
    id: 10,

    name: "Dầu cá Fish Oil Healthy Care 1000mg",

    price: 385000,

    category: "Vitamin & Khoáng chất",

    image: "dauca.webp",
  },

  {
    id: 11,

    name: "Viên sủi Berocca Performance (Tuýp 10 viên)",

    price: 82000,

    category: "Vitamin & Khoáng chất",

    image: "viensuiberocca.webp",
  },

  {
    id: 12,

    name: "Canxi nước Ostelin cho bé",

    price: 310000,

    category: "Vitamin & Khoáng chất",

    image: "canxinuoc.jpg",
  },

  {
    id: 13,

    name: "Vitamin tổng hợp Blackmores Multivitamin",

    price: 420000,

    category: "Vitamin & Khoáng chất",

    image: "vitamintonghop.jpg",
  },

  {
    id: 14,

    name: "Kẽm ZinC giúp ăn ngon Bio Island",

    price: 295000,

    category: "Vitamin & Khoáng chất",

    image: "kemzinc.webp",
  },

  {
    id: 15,

    name: "Sắt cho bà bầu Blackmores Pregnancy Iron",

    price: 195000,

    category: "Vitamin & Khoáng chất",

    image: "satchobabau.jpg",
  },

  {
    id: 16,

    name: "Viên uống bổ não Ginkgo Biloba",

    price: 250000,

    category: "Vitamin & Khoáng chất",

    image: "vienuongbonao.jpeg",
  },

  {
    id: 17,

    name: "Sữa rửa mặt Cetaphil Gentle Skin 500ml",

    price: 395000,

    category: "Dược mỹ phẩm",

    image: "suaruamatceta.webp",
  },

  {
    id: 18,

    name: "Kem chống nắng La Roche-Posay Anthelios",

    price: 415000,

    category: "Dược mỹ phẩm",

    image: "kemchongnangla.webp",
  },

  {
    id: 19,

    name: "Tẩy trang Bioderma hồng cho da nhạy cảm",

    price: 380000,

    category: "Dược mỹ phẩm",

    image: "taytrangbloderma.jpg",
  },

  {
    id: 20,

    name: "Xịt khoáng Vichy Eau Thermale 300ml",

    price: 285000,

    category: "Dược mỹ phẩm",

    image: "xitkhoangvichy.avif",
  },

  {
    id: 21,

    name: "Kem dưỡng ẩm chuyên sâu Neutrogena",

    price: 320000,

    category: "Dược mỹ phẩm",

    image: "kemduongam.jpg",
  },

  {
    id: 22,

    name: "Tinh chất phục hồi da B5 Eucerin",

    price: 650000,

    category: "Dược mỹ phẩm",

    image: "tinhchatphuchoi.jpg",
  },

  {
    id: 23,

    name: "Kem trị mụn Laroche Posay Duo+",

    price: 355000,

    category: "Dược mỹ phẩm",

    image: "kemtrimun.jpg",
  },

  {
    id: 24,

    name: "Dầu gội trị gàu Selsun 100ml",

    price: 92000,

    category: "Dược mỹ phẩm",

    image: "daugoi.webp",
  },

  {
    id: 25,

    name: "Son dưỡng môi Vaseline Lip Therapy",

    price: 65000,

    category: "Chăm sóc sắc đẹp",

    image: "sonduongmoi.jpg",
  },

  {
    id: 26,

    name: "Mặt nạ giấy Banobagi Jelly Mask",

    price: 25000,

    category: "Chăm sóc sắc đẹp",

    image: "matnagiay.jpg",
  },

  {
    id: 27,

    name: "Nước hoa hồng Mamonde Rose Water",

    price: 220000,

    category: "Chăm sóc sắc đẹp",

    image: "nuochoahong.jpeg",
  },

  {
    id: 28,

    name: "Bông tẩy trang Ipek (150 miếng)",

    price: 45000,

    category: "Chăm sóc sắc đẹp",

    image: "bongtaytrang.webp",
  },

  {
    id: 29,

    name: "Kem dưỡng tay Innisfree",

    price: 95000,

    category: "Chăm sóc sắc đẹp",

    image: "kemduongtay.jpg",
  },

  {
    id: 30,

    name: "Dầu dưỡng tóc Moroccanoil 25ml",

    price: 350000,

    category: "Chăm sóc sắc đẹp",

    image: "dauduongtoc.jpg",
  },

  {
    id: 31,

    name: "Sữa tắm trắng da White Conc",

    price: 280000,

    category: "Chăm sóc sắc đẹp",

    image: "suatamtrang.jpg",
  },

  {
    id: 32,

    name: "Máy rửa mặt Halio Facial Cleansing",

    price: 550000,

    category: "Chăm sóc sắc đẹp",

    image: "mayruamat.webp",
  },

  {
    id: 33,

    name: "Khẩu trang 3D Mask Pharmacity",

    price: 85000,

    category: "Sản phẩm tiện lợi",

    image: "khautrang.webp",
  },

  {
    id: 34,

    name: "Nước rửa tay diệt khuẩn Lifebuoy 500ml",

    price: 75000,

    category: "Sản phẩm tiện lợi",

    image: "nuocruatay.jpg",
  },

  {
    id: 35,

    name: "Băng cá nhân Urgo túi 10 miếng",

    price: 12000,

    category: "Sản phẩm tiện lợi",

    image: "bangcanhan.jpg",
  },

  {
    id: 36,

    name: "Khăn ướt Bobby không mùi (Gói 80 tờ)",

    price: 38000,

    category: "Sản phẩm tiện lợi",

    image: "khanuot.jpg",
  },

  {
    id: 37,

    name: "Bông tăm y tế đầu nhỏ (Hộp 200 que)",

    price: 25000,

    category: "Sản phẩm tiện lợi",

    image: "bongtam.jpg",
  },

  {
    id: 38,

    name: "Gel rửa tay khô On1 250ml",

    price: 45000,

    category: "Sản phẩm tiện lợi",

    image: "gelruatay.jpg",
  },

  {
    id: 39,

    name: "Nhiệt kế thủy ngân y tế",

    price: 25000,

    category: "Sản phẩm tiện lợi",

    image: "nhitke.jpg",
  },
];

let cart = [];

// Hiển thị sản phẩm
function renderProducts(data = products) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = data
    .map(
      (p) => `
        <div class="product-item">
            <div class="product-img-box">
  ${
    p.image
      ? `<img src="${p.image}" alt="${p.name}">`
      : `<i class="fa-solid fa-pills" style="font-size:50px;color:#eee;"></i>`
  }
  <span class="product-id-tag">#${p.id}</span>
</div>
            <div class="product-info">
                <span class="badge">${p.category}</span>
                <h4>${p.name}</h4>
                <p class="price">${p.price.toLocaleString()}đ</p>
                <button class="btn-add-cart" onclick="addToCart(${p.id})">MUA NGAY</button>
            </div>
        </div>
    `,
    )
    .join("");
}

// Tìm kiếm
function handleSearch() {
  const term = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter((p) => p.name.toLowerCase().includes(term));
  renderProducts(filtered);
  document.getElementById("categoryTitle").innerText =
    `Kết quả tìm kiếm cho: "${term}"`;
}

// Giỏ hàng
function addToCart(id) {
  const p = products.find((item) => item.id === id);
  cart.push(p);
  updateCartUI();

  document.getElementById("cartSidebar").classList.add("active");
  alert("Đã thêm vào giỏ hàng!");
}
function updateCartUI() {
  const cartBody = document.getElementById("cartItems");
  const countLabels = document.querySelectorAll(".cart-count, #cartCountTotal");

  countLabels.forEach((el) => (el.innerText = cart.length));

  let total = 0;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div style="text-align:center; padding:40px; color:#999;">
        <i class="fa-solid fa-cart-shopping" style="font-size:50px;"></i>
        <p>Giỏ hàng trống</p>
      </div>
    `;
  } else {
    cartBody.innerHTML = cart
      .map((item, index) => {
        total += item.price;

        return `
      <div class="cart-item-row">
      <div class="product-img-box">
  ${
    item.image
      ? `<img src="${item.image}" alt="${item.name}">`
      : `<i class="fa-solid fa-pills"></i>`
  }
 <span class="product-id-tag">#${item.id}</span>
</div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-price">${item.price.toLocaleString()}đ</div>
        </div>

        <i class="fa-solid fa-trash remove-btn" onclick="removeFromCart(${index})"></i>
      </div>
      `;
      })
      .join("");
  }

  // ✅ QUAN TRỌNG
  document.getElementById("cartTotal").innerText = total.toLocaleString() + "đ";

  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("active");
}


function switchTab(type) {
  const isLogin = type === "login";
  document.getElementById("loginForm").style.display = isLogin
    ? "block"
    : "none";
  document.getElementById("registerForm").style.display = isLogin
    ? "none"
    : "block";
  document.getElementById("tabLogin").classList.toggle("active", isLogin);
  document.getElementById("tabRegister").classList.toggle("active", !isLogin);
}
function updateUserUI() {
  const userSpan = document.getElementById("userText");

  const currentUser = localStorage.getItem("currentUser");

  if (userSpan) {
    userSpan.innerText = currentUser || "Đăng nhập";
  }
}
// Khởi chạy
window.onload = () => {
  renderProducts();
  updateUserUI();
  // Bắt sự kiện Enter khi tìm kiếm
  document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSearch();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-checkout").onclick = () => {
    if (cart.length === 0) {
      alert("Giỏ hàng đang trống!");
    } else {
      alert("Thanh toán thành công!");
    }
  };
});
localStorage.setItem("cart", JSON.stringify(cart));
cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartUI();
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const userBtn = document.getElementById("userAuthBtn");
  const userSpan = document.getElementById("userText");

  updateUserUI();

  // REGISTER
  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("regUser").value.trim();
    const pass = document.getElementById("regPass").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.user === user)) {
      alert("Tài khoản đã tồn tại!");
      return;
    }

    users.push({ user, pass });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    switchTab("login");
  });

  // LOGIN
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const found = users.find((u) => u.user === user && u.pass === pass);

    if (!found) {
      alert("Sai tài khoản hoặc mật khẩu!");
      return;
    }

    currentUser = user;
    localStorage.setItem("currentUser", currentUser);

    updateUserUI();
    toggleModal("authModal");

    alert("Đăng nhập thành công!");
  });
});
function goToCategory(cat) {
  // 1. Lọc sản phẩm
  filterByCategory(cat);

  // 2. Cuộn lên khu sản phẩm
  document.getElementById("productSection").scrollIntoView({
    behavior: "smooth",
  });
}
function openPolicy(type) {
  const title = document.getElementById("policyTitle");
  const content = document.getElementById("policyContent");

  if (type === "return") {
    title.innerText = "Chính sách đổi trả";
    content.innerHTML = `
      <p>✔ Đổi trả trong 7 ngày nếu sản phẩm lỗi</p>
      <p>✔ Sản phẩm phải còn nguyên tem</p>
      <p>✔ Có hóa đơn mua hàng</p>
    `;
  } else if (type === "privacy") {
    title.innerText = "Chính sách bảo mật";
    content.innerHTML = `
      <p>🔒 Chúng tôi cam kết bảo mật thông tin khách hàng</p>
      <p>🔒 Không chia sẻ dữ liệu cho bên thứ ba</p>
      <p>🔒 Thanh toán an toàn</p>
    `;
  } else if (type === "terms") {
    title.innerText = "Điều khoản sử dụng";
    content.innerHTML = `
      <p>📌 Không sử dụng website cho mục đích xấu</p>
      <p>📌 Không spam hoặc hack hệ thống</p>
      <p>📌 Tuân thủ pháp luật Việt Nam</p>
    `;
  }

  // MỞ MODAL
  toggleModal("policyModal");
}
function increaseQty(index) {
  cart.push(cart[index]); // thêm lại sản phẩm
  updateCartUI();
}

function decreaseQty(index) {
  cart.splice(index, 1);
  updateCartUI();
}
function setCategory(element, category) {
  // 1. Cập nhật trạng thái hiển thị của Menu (Đổi màu nút được chọn)
  // Xóa class 'active' của tất cả các nút cũ
  document.querySelectorAll(".cat-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Thêm class 'active' vào nút vừa ấn (nếu ấn từ menu ngang)
  if (element) {
    element.classList.add("active");
  }

  // 2. Lọc sản phẩm
  const title = document.getElementById("categoryTitle");
  let filtered;

  if (category === "all") {
    filtered = products;
    title.innerText = "Tất cả sản phẩm";
  } else {
    filtered = products.filter((p) => p.category === category);
    title.innerText = category;
  }

  // 3. Hiển thị sản phẩm đã lọc ra màn hình
  renderProducts(filtered);
}
function toggleModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}
