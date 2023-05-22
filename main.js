




const text = document.querySelector(".text-sec");
const textLoad = () => {
	setTimeout(() => {
      text.textContent = "quadratic";
	},0);
	setTimeout(() => {
      text.textContent = "vectors";
	},4000);
	setTimeout(() => {
      text.textContent = "coordinate";
	},8000);
	setTimeout(() => {
      text.textContent = "area...";
	},12000);
	setTimeout(() => {
      text.textContent = "volume";
	},16000);
}

textLoad();

setInterval(textLoad, 20000);