// btnMenu

const navigation = document.querySelector("nav .navigation");
const menuBtn = document.querySelector(".hamBtn .menuBtn");
menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

// Highlight Rooms
const rooms = document.querySelectorAll('.highlight-card .room-type')
const roompax = document.querySelectorAll('.preview-room-content .pax')
const pricePreview = document.querySelectorAll('.preview-room-content .price-preview')
    
class RoomHighlight {
  constructor(typeRoom,pax,priceWd,priceWe) {
    this.roomType = typeRoom;
    this.capacity = pax;
    this.priceWeekDay = priceWd;
    this.priceWeekEnd = priceWe;
  }
  rewrite(param) {
    rooms[param].innerHTML = `${this.roomType}`
    roompax[param].innerHTML = `Up to ${this.capacity}`
    pricePreview[param].innerHTML = `${this.priceWeekDay.toLocaleString("id-ID")} - ${this.priceWeekEnd.toLocaleString("id-ID")} / Night`
  }
}

const standard = new RoomHighlight('Standard Room ', 3, 699000, 799000)
standard.rewrite(0)

const deluxe = new RoomHighlight('Deluxe Room', 3, 799000, 899000)
standard.rewrite(1)

const suites = new RoomHighlight('Suites Room', 4, 899000, 999000)
standard.rewrite(2)

// Year On Footer
const yearCopyright = document.querySelector("footer .year");
const dFunction = new Date();
yearCopyright.innerHTML = dFunction.getFullYear();
