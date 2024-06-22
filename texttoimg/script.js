const token="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"
const inputTxt=document.getElementById("input")
const image=document.getElementById("image")
const button=document.getElementById("btn")


async function query() {
    image.src="https://media3.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952zfh3kz4rwiqg7u5vafj7wv5dmodiaoh94aktygrx&ep=v1_gifs_search&rid=200w.gif&ct=g"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
		{
			headers: { Authorization: `Bearer ${token}` },
			method: "POST",
			body: JSON.stringify({"inputs": inputTxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click',async function(){
    query().then((response) => {
        const objectURL=URL.createObjectURL(response)
        image.src=objectURL
    });

})
 