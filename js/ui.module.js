export class Ui {
  constructor() {}
  displayGames(data) {
    let gameBox = ``;
    for (let i = 0; i < data.length; i++) {
      gameBox += `    <div class="col">
            <div data-id="${
              data[i].id
            }" class="card h-100 bg-transparent" role="button">
                <div class="card-body">
                    <figure class="position-relative">
                        <img src="${
                          data[i].thumbnail
                        }" class="card-img-top object-fit-cover
                        h-100" alt="game photo">
                    </figure>
                    <figcaption>
                        <div class="hstack justify-content-between">
                            <h3 class="h4 text-white">${data[i].title}</h3>
                            <span class="badge text-bg-primary p-2">free</span>
                        </div>
                        <p class="card-text small text-center opacity-50">      
                         ${data[i].short_description.split(" ", 8)}
                        </p>
                    </figcaption>
                </div>
                <footer class="card-footer small hstack justify-content-between">
                    <span class="badge badge-color">${data[i].genre}</span>
                    <span class="badge badge-color">${data[i].platform}</span>
                </footer>
            </div>
        </div>`;
    }
    document.getElementById("gameData").innerHTML = gameBox;
  }
  displayDetails(data) {
    const detailsBox = `  <div class="col-md-4">
    <img src="${data.thumbnail}" alt="" class="w-100" />
  </div>
  <div class="col-md-8">
    <h3>title:${data.title}</h3>
    <p>category: <span class="badge text-bg-info">${data.genre}</span></p>
    <p>platform: <span class="badge text-bg-info">${data.platform}</span></p>
    <p>status: <span class="badge text-bg-info">${data.status}</span></p>
    <p class="small">${data.description}</p>
    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">show game</a>
  </div>
  <div class="owl-carousel w-75 mx-auto pb-3">
  <div><img src="${data.screenshots[0].image}" alt="" class="w-100" ></div>
  <div><img src="${data.screenshots[1].image}" alt="" class="w-100" ></div>
  <div><img src="${data.screenshots[2].image}" alt="" class="w-100" ></div>
</div>
  `;
    document.getElementById("detailsContent").innerHTML = detailsBox;
  }
}
