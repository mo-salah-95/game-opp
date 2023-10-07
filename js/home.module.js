import { Ui } from "./ui.module.js";
import { Detailes } from "./details.module.js";
export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveLink(link);
        const cat = link.getAttribute("data-category");
        this.getData(cat);
      });
    });
    this.loading = document.querySelector(".loading");
    this.details= document.getElementById("details");
    this.games = document.getElementById("games");
    this.ui = new Ui();
    this.getData("mmorpg");
    this.changeNavbar()
  }
  changeActiveLink(link) {
    document.querySelector(".navbar .active").classList.remove("active");
    link.classList.add("active");
  }
  async getData(category) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "28b7dca50bmshec7bef839493adfp1aa723jsn641f52516606",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add("d-none");
    this.ui.displayGames(response);
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
        new Detailes(card.getAttribute("data-id"))
      });
    });
  }
  changeNavbar (){
    let minHeight  = document.getElementById("navBar").offsetTop
    $(window).scroll(function(){
        let windowScroll = $(window).scrollTop()
        if(windowScroll>minHeight){
            $("#navBar").addClass("fixed-top")
        }else{
            $("#navBar").removeClass("fixed-top")
        }
    })
   
}
}
