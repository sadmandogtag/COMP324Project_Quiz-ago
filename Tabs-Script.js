const tabs = document.querySelectorAll('[data-tab-target]')

const tabContent = document.querySelectorAll(['[data-tab-content]'])

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.tabTarget)

        tabContent.forEach(tabContent => {
            tabContent.classList.remove('active')})

        tabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
            target.classList.add('active')
        })
    })

    /*************************/
    function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}