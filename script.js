//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const container = document.getElementById("episodes");
  console.log(episodeList);

  episodeList.forEach(allEpisodes => {

    const img = document.createElement("img");
    img.setAttribute("src", allEpisodes.image.medium);

    container.appendChild(img);

  });

}

window.onload = setup;
