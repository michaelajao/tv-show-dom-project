//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const container = document.getElementById("episodes");

  episodeList.forEach(allEpisodes => {

    const card = document.createElement("div");
    const h1 = document.createElement("hi");
    const p = document.createElement("p");
    const img = document.createElement("img");

    card.classList.add("card");
    h1.innerHTML = `${allEpisodes.name} - ${makeEpisodeCode(allEpisodes)}`;
    p.innerHTML = allEpisodes.summary;
    img.setAttribute("src", allEpisodes.image.medium);

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img);
    card.appendChild(p);

  });

}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function makeEpisodeCode(allEpisodes){
  return `S${pad(allEpisodes.season)}E${pad(allEpisodes.number)}`;
}

window.onload = setup;
