function createGame(player1, hour, player2) {
    return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
    `
  }
  
  let delay = -0.4
  function createCard(date, day, games) {
    delay = delay + 0.4
    return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
    `
  }
  
  document.querySelector("#cards").innerHTML =
  createCard(
      "24/11",
      "quinta",
      createGame("switzerland", "1 x 0", "cameroon") +
        createGame("uruguay", "0 x 0", "south-korea") +
        createGame("portugal", "3 x 2", "ghana") +
        createGame("brazil", "2 x 0", "serbia")
    ) +
    createCard(
      "28/11",
      "segunda",
      createGame("cameroon", "3 x 3", "serbia") +
        createGame("south-korea", "2 x 3", "ghana") +
        createGame("brazil", "1 x 0", "switzerland") +
        createGame("portugal", "2 x 0", "uruguay")
    ) +
    createCard(
      "02/12",
      "sexta",
      createGame("south-korea", "2 x 1", "portugal") +
        createGame("ghana", "0 x 2", "uruguay") +
        createGame("serbia", "2 x 3", "switzerland") +
        createGame("cameroon", "1 x 0", "brazil")
    )