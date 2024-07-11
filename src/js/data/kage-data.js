class KageData {
    static async searchEvent(team) {
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${team}`);
            const responseJson = await response.json();

            if (responseJson.event) {
                return Promise.resolve(responseJson.event);
            } else {
                return Promise.reject(`Pertandingan antara ${team} tidak ditemukan`)
            };
        } catch (error) {
            return Promise.reject(`Error: ${error}`)
        }
    }
}

export default KageData;