const imgUploadJsonplaceholder = async () => {
  const imgArr = document.getElementsByClassName('popular__img');

  for (let i = 0; i < imgArr.length; i++) {
    let num = Math.round(Math.random() * 100);
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${num}`);
    const card = await response.json();
    const imgUrl = await card[0].url;
    imgArr[i].src = imgUrl;
  };
};

imgUploadJsonplaceholder();

// const imgUpload = async () => {
//   const imgArr = document.getElementsByClassName('popular__img');
//   console.log(imgArr[0].src);
//
//   for (let i = 0; i < imgArr.length; i++) {
//     let num = Math.round(Math.random() * 100);
//     const response = await fetch(`./assets/scripts/database.js${num}`);
//     const card = await response.json();
//     const imgUrl = await card[0].url;
//     console.log(num);
//     console.log(imgUrl);
//     imgArr[i].src = imgUrl;
//   };
// };

//export imgUpload;


