import { Ui } from "./ui.module.js";
export class Detailes {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("games").classList.remove("d-none");
    });
    this.loading = document.querySelector(".loading");
    this.getDetailes(id);
  }
  async getDetailes(id) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "28b7dca50bmshec7bef839493adfp1aa723jsn641f52516606",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const apiDetails = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await apiDetails.json();
    this.loading.classList.add("d-none");
    console.log(response);
    new Ui().displayDetails(response);
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
    });
  }
}
