document.addEventListener("DOMContentLoaded", () => {
    console.log("หน้าเว็บโหลดเสร็จแล้ว!");

    document.getElementById("imageModal").style.display = "none";

    //ทำให้โชว์เมื่อเลื่อนเจอ
    const texts = document.querySelectorAll(".hidden-text");
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".slide-up").forEach(element => {
    observer.observe(element);
    });
    cards.forEach(card => observer.observe(card));
    texts.forEach(text => observer.observe(text));
    //การ์ด
});



document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.pageY, // 🔥 เปลี่ยนจาก clientY เป็น pageY
            duration: 0.2,
            ease: "power2.out"
        });
    });

    const images = document.querySelectorAll(".image-container img");
    const cards = document.querySelectorAll(".card");
    const cardsmall = document.querySelectorAll(".cardsmall");

    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            //cursor.innerHTML = ">"; // เปลี่ยนอิโมจิตามต้องการ
            //cursor.style.fontSize = "30px";
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                background: "rgb(249, 249, 249)", 
                borderRadius: "100px",
                duration: 0.3
            });
        });

        img.addEventListener("mouseleave", () => {
            cursor.innerHTML = ""
            gsap.to(cursor, { 
                width: 40, 
                height: 40, 
                background: "transparent", 
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
    cards.forEach(cards => {
        cards.addEventListener("mouseenter", () => {
            //cursor.innerHTML = ">"; // เปลี่ยนอิโมจิตามต้องการ
            //cursor.style.fontSize = "30px";
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                background: "rgba(34, 34, 34, 0.33)", 
                borderRadius: "50px",
                duration: 0.3
            });
        });

        cards.addEventListener("mouseleave", () => {
            cursor.innerHTML = ""
            gsap.to(cursor, { 
                width: 40, 
                height: 40, 
                background: "transparent", 
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
    cardsmall.forEach(cardsmall => {
        cardsmall.addEventListener("mouseenter", () => {
            //cursor.innerHTML = ">"; // เปลี่ยนอิโมจิตามต้องการ
            //cursor.style.fontSize = "30px";
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                background: "rgba(34, 34, 34, 0.33)", 
                borderRadius: "50px",
                duration: 0.3
            });
        });

        cardsmall.addEventListener("mouseleave", () => {
            cursor.innerHTML = ""
            gsap.to(cursor, { 
                width: 40, 
                height: 40, 
                background: "transparent", 
                borderRadius: "50%",
                duration: 0.3
            });
        });
    });
});

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
      const popup = document.getElementById("popup");
      popup.classList.add("show");
      setTimeout(() => {
        popup.classList.remove("show");
      }, 1800); // แสดง 1.8 วิแล้วค่อยหาย
    });
  }

function toggleImage(button) {
  const imageSection = button.parentElement.querySelector(".imagecer-container");

  // ให้ใช้ computed style จาก browser แทนการดู style inline
  const isOpen = imageSection.offsetHeight > 0;

  if (isOpen) {
    imageSection.style.maxHeight = imageSection.scrollHeight + "px";
    imageSection.style.opacity = "0";
    setTimeout(() => {
      imageSection.style.maxHeight = "0";
      imageSection.style.padding = "0 10px";
    }, 10);
  } else {
    imageSection.style.maxHeight = imageSection.scrollHeight + "px";
    imageSection.style.opacity = "1";
    imageSection.style.padding = "10px";
  }
}

function showFullscreen(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imgElement.src;
  document.getElementById("imageModal").style.display = "flex";
}

function hideFullscreen() {
  const modal = document.getElementById("imageModal");
  document.getElementById("imageModal").style.display = "none";
}


// กำหนดเงื่อนไข id -> URL ที่ต้องไป
    const routes = {
      "Home": "index.html",
      "Facts": "facts.html",
      "Certificate": "certificate.html",
      "Positions": "positions.html",
      "Blog": "blog.html",
    };

    function fadeAndGo(buttonId) {
      const url = routes[buttonId];
      if (!url) {
        alert("ไม่มีปลายทางสำหรับปุ่มนี้");
        return;
      }

      // ใส่คลาสเพื่อเริ่มเฟดเอาท์
      document.body.classList.add("fade-out");

      // รอให้ transition จบ (1 วินาที) แล้วค่อยเปลี่ยนหน้า
      setTimeout(() => {
        window.location.href = url;
      }, 1000);
    }