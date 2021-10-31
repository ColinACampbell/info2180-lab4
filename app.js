window.onload = () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', async (e) => {
        let searchVal = searchInput.value;

        resultDiv.innerHTML = ""

        let response;
        if (searchVal.length == 0) {
            response = await fetch("/superheroes.php");
            resultDiv.innerHTML = await response.text()
        } else {
            searchVal = sanitizeString(searchVal); 
            response = await fetch(`/superheroes.php?alias=${searchVal}`)
            const jsonResponse = await response.json();
            const hero = jsonResponse[0];
            console.log(hero);
            const aliasNode = document.createElement("h3")
            const nameNode = document.createElement("h4");
            const bioNode = document.createElement("p")


            aliasNode.innerHTML = hero.alias;
            nameNode.innerHTML = hero.name;
            bioNode.innerHTML = hero.biography;

            resultDiv.appendChild(aliasNode);
            resultDiv.appendChild(nameNode);
            resultDiv.appendChild(bioNode);
        }

    })
}

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}