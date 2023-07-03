export class APIActions {
    getLocalDate() {
        let getDate = new Date();
        return (`${getDate.getDay()}/${getDate.getMonth() + 1}/${getDate.getFullYear()}`);
    }

    getInternetDate() {
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => {
                var hour = data.datetime;
                console.log(hour);
            })
            .catch(error => {
                console.log('Erro ao obter o horário da internet:', error);
            });
    }
}
