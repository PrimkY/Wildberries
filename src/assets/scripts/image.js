export const imgUploadJsonplaceholder = async () => {
  const imgArr = document.getElementsByClassName('popular__img');

  for (let i = 0; i < imgArr.length; i++) {
    const num = Math.round(Math.random() * 100);
    const response = await fetch(`https://4b77-178-235-189-199.ngrok.io/products/${num}`);
    const card = await response.json();
    const imgUrl = await card[0].url;
    imgArr[i].src = imgUrl;
  }
};
