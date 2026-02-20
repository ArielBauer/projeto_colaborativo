const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    const godName = document
        .getElementById("godInput")
        .value
        .trim()
        .toLowerCase();

    fetch("db.json")
        .then(response => response.json())
        .then(data => {

            // IMPORTANTE: seu JSON tem "gods"
            const god = data.gods.find(g =>
                g.name.toLowerCase() === godName
            );

            if (!god) {
                throw new Error("Deus não encontrado");
            }

            // Atualiza dados
            document.getElementById("nome").innerText = god.name;
            document.getElementById("dominio").innerText = god.domain;
            document.getElementById("poderes").innerText = god.symbol;

            // 🔥 BUSCA IMAGEM NA WIKIPEDIA AUTOMATICAMENTE
            return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${god.name}`)
                .then(res => res.json())
                .then(wikiData => {

                    if (wikiData.thumbnail && wikiData.thumbnail.source) {
                        document.getElementById("imagem").src = wikiData.thumbnail.source;
                    } else {
                        document.getElementById("imagem").src =
                            "https://via.placeholder.com/200?text=Sem+Imagem";
                    }
                });

        })
        .catch(err => {
            console.error("Erro:", err);
            alert("Deus não encontrado no Olimpo ⚡");
        });
});