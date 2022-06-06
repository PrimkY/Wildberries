fastCheck.addEventListener('click', () => {
    const fastCheckBlock = document.createElement('div');
        const fastCheckClose = document.createElement('div');
        const fastCheckBlockImg = document.createElement('div');
        const fastCheckBlockDescription = document.createElement('div');
        const fastCheckBlockDescriptionTitle = document.createElement('h2');
        const fastCheckBlockDescriptionTitleText = document.createTextNode(name);
        const fastCheckBlockDescriptionPrice = document.createElement('h3');
        const fastCheckBlockDescriptionPriceText = document.createTextNode('Стоимость: '+ price + '₽' )
        const fastCheckBlockDescriptionCategory = document.createElement('h3');
        const fastCheckBlockDescriptionCategoryText = document.createTextNode('Категория: ' + category);
        const fastCheckBlockDescriptionDiscount = document.createElement('h3');
        const fastCheckBlockDescriptionDiscountText = document.createTextNode('Вы экономите: ' + discount + '%');
        const fastCheckBlockDescriptionBtn = document.createElement('button');
        const fastCheckBlockDescriptionBtnText = document.createTextNode('Добавить в корзину');
    
        fastCheckBlock.className = 'fastCheckBlock';
        fastCheckBlockImg.className = 'fastCheckBlockImg';
        fastCheckBlockDescription.className = 'fastCheckBlockDescription';
        fastCheckClose.className = 'fastCheckClose fa-regular fa-circle-xmark fa-2x';
        fastCheckBlockDescriptionCategory.className = 'fastCheckBlockDescriptionCategory';
        fastCheckBlockDescriptionBtn.className = 'fastCheckBlockDescriptionBtn title3';
    
        fastCheckBlock.append(fastCheckClose);
        fastCheckBlockImg.append(img);
        fastCheckBlock.append(fastCheckBlockImg);
        fastCheckBlockDescriptionTitle.append(fastCheckBlockDescriptionTitleText);
        fastCheckBlockDescription.append(fastCheckBlockDescriptionTitle);
        fastCheckBlockDescriptionPrice.append(fastCheckBlockDescriptionPriceText);
        fastCheckBlockDescription.append(fastCheckBlockDescriptionPrice)
        fastCheckBlockDescriptionCategory.append(fastCheckBlockDescriptionCategoryText);
        fastCheckBlockDescription.append(fastCheckBlockDescriptionCategory);
        fastCheckBlockDescriptionDiscount.append(fastCheckBlockDescriptionDiscountText);
        fastCheckBlockDescription.append(fastCheckBlockDescriptionDiscount);
        fastCheckBlockDescriptionBtn.append(fastCheckBlockDescriptionBtnText);
        fastCheckBlockDescription.append(fastCheckBlockDescriptionBtn)
        fastCheckBlock.append(fastCheckBlockDescription);
        body.append(fastCheckBlock);
    
        fastCheckClose.addEventListener('click', () => {
            fastCheckBlock.remove();
        } );
    });
    