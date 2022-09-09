const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

button.addEventListener("click", () =>
{
    popup.style.display = 'block';
    console.log('clickou!');
})


//! Um listener no elemento pai é superior a usar listener em cada elemento filho.
popup.addEventListener("click", event =>
{
    const classNameOfClickedElement = event.target.classList[0];
    const classNames = ['popup-close', 'popup-link', 'popup-wrapper']; //* classes dos elementos clicáveis.

    //* o some verifica se um item do array atende a condição. Iterando sobre o array.
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

    if (shouldClosePopup)
    {
        popup.style.display = 'none';
    }
})