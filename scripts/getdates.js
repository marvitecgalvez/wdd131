const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();


const nowtime = new Date();


currentyear.innerHTML = `${today.getFullYear()}`;



/*lastModified.innerHTML = `${today.getTime()}`;*/


lastModified.innerHTML = `${new Intl.DateTimeFormat(
	"en-UK",
	{
		timeStyle: "medium"
	}
).format(today),

new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(nowtime)}`;