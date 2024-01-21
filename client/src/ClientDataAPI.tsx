import AsyncStorage from "@react-native-async-storage/async-storage";

/*
 * Uploads Data to Async Storage
 */
export const storeData = async (key: string, value: string): {} => {
/*	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch ({ message }) {
		alert(message);
	}
*/
	return null;
};

/*
 * Retrieves Data from Async Storage
 */
export const getData = async (key: string): {} => {
/*	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch ({ message }) {
		alert(message);
	}
	*/
	return null;
};

/*
 * Connects to the HAC API to gather each user's most recent cumulative gpa
 */
export const getTranscriptGPA = 
	async (uid: string, pwd: string, hac_url: string): number => 
{
/*
	let request = new XMLHttpRequest();

	request.addEventListener('load', () => {
		// Update the state of the component with the result here
		const json: {} = 
	});

	request.open('GET', 
		`https://homeaccesscenterapi.vercel.app/api/transcript?link=https://${hac_url}/&user=${uid}&pass=${pwd}`);
	request.send();
*/
	return null;
}
