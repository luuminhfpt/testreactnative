import { API_URL } from '../Constants/Api';

const timeOut = 3000;

export default (url='') => {
    return new Promise( (resolve, reject) => {
		fetch(API_URL+url).then(res => res.json())
        .then(resJSON => {
            resolve(resJSON);
        })
        .catch(err => {
            reject(err);
        });
	});
}