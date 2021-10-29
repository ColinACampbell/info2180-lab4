window.onload = () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    searchBtn.addEventListener('click',async (e)=>{
        console.log(searchInput.value)
        // make AJAX request
        const response = await fetch("/superheroes.php");
        alert(await response.text())
    })
}