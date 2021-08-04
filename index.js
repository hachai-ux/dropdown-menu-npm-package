//hide/reveal menu items using class or setting style in JS

const MenuRevealer = (() => {
    
    
    const clickToggle = (button) => {
    
            button.addEventListener('click', (e) => {
                //select dropdown content of the clicked element
                const dropdownContent = e.target.nextElementSibling;
                console.log(e.target);
                if (dropdownContent.style.display !== 'block') {
                    dropdownContent.style.display = 'block';
                }
                else dropdownContent.style.display = 'none';
    

            })
        
    };
    return { clickToggle };

})();

const dropdownButton = document.querySelector('.dropbtn');
MenuRevealer.clickToggle(dropdownButton);

module.exports = MenuRevealer;