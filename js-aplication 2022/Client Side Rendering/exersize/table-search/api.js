
export async function getAllData() {
    let url = 'http://localhost:3030/jsonstore/advanced/table';

    try {
        let res = await fetch(url);
        if (res.status != 200) {
            let error = await res.json();
            throw new Error(error.message)
        }

        let data = await res.json();
        let studetns = Object.values(data);
        studetns.map(x => x.match = false);
        return Object.values(studetns)

    } catch (error) {
        alert(error.message)
        throw new Error(error.message)
    }
}
