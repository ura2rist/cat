window.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product') as NodeList;
  const productDisabled = document.querySelectorAll('.product_disable') as NodeList;

  productDisabled.forEach((disabled) => {
    const element = disabled as HTMLInputElement;
    const text = element.querySelector('.product__title-text')?.textContent as string;
    const textReplace = element.querySelector('.product__text') as HTMLInputElement;

    textReplace.innerHTML = `Печалька, ${ text } закончился.`;
  });

  products.forEach((product) => {
    const element = product as HTMLInputElement;

    element.addEventListener('click', (event: Event) => {
      if(element.classList.contains('product_disable')) return;
      
      if(!element.classList.contains('product_active')) {
        element.addEventListener('mouseout', () => {
          element.classList.add('product_active');
        })
      } else {
        element.addEventListener('mouseout', () => {
          element.classList.remove('product_active');
        })
      }
    })
  });
});