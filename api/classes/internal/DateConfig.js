export default class DateConfig {

    getLocalDate() {
        let getDate = new Date();
        return (`${getDate.getDay()}/${getDate.getMonth() + 1}/${getDate.getFullYear()}`);
    }

    getFullDate() {
        let getDate = new Date();
        return (`${getDate}`);
    }

    getInternetDate() {
        fetch('http://worldtimeapi.org/api/ip')
            .then(response => response.json())
            .then(data => {
                var hour = data.datetime;
                console.log(hour);
            })
            .catch(error => {
                console.log('Error to get date from internet:', error);
            });
    }
};
