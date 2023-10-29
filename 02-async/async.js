const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const json = await res.json();
    return json
}

fetchData(2)

module.exports = { fetchData }