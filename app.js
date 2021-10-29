window.onload = () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', async (e) => {
        const searchVal = searchInput.value;
        let response;
        if (searchVal.length == 0) {
            response = await fetch("/superheroes.php");
            resultDiv.innerHTML = await response.text()
        } else {
            response = await fetch(`/superheroes.php?alias=${searchVal}`)
            const jsonResponse = await response.json();
            const hero = jsonResponse[0];
            console.log(hero);
        }

    })
}