
function showGods(list) {
  results.innerHTML = "";
  
  list.forEach(god => {
    results.innerHTML += `
      <div class="card">
        <img src="https://robohash.org/${god.name}?set=set2" width="120">
        <h3>${god.name}</h3>
        <p><strong>Domínio:</strong> ${god.domain}</p>
        <p><strong>Símbolo:</strong> ${god.symbol}</p>
      </div>
    `;
  });
}
