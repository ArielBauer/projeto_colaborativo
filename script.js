const baseURL = "http://localhost:3000/gods";
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const godName = document.getElementById("godInput").value.trim().toLowerCase();

    fetch(baseURL)
        .then(response => response.json())
        .then(data => {

            // Procura o deus pelo nome
            const god = data.find(g => g.name.toLowerCase() === godName);

            if (!god) {
                throw new Error("Deus não encontrado");
            }

            // Atualiza os dados na tela
            document.getElementById("nome").innerText = god.name;
            document.getElementById("dominio").innerText = god.domain;
            document.getElementById("poderes").innerText = god.symbol;

            // Imagem automática
            document.getElementById("imagem").src = `https://robohash.org/${god.name}?set=set2`;

        })
        .catch(err => {
            console.error("Erro ao buscar no Olimpo:", err);
            alert("Deus não encontrado no Olimpo ⚡");
        });
});
