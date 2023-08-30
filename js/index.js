const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`); // loadphone function k call korar somoi j arguments ta pathano hoice setar parameter dynamically bosano holo
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones,isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container card
    phoneContainer.innerHTML = '';

    // display show all btn if phones above 20 

    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden')
    }

     
    // display first 12 phones if not Show All

    if(!isShowAll) {
        phones = phones.slice(0,12)
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = 'card bg-base-100 p-4 shadow-xl'
        phoneDiv.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body text-center items-center">
             <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
              <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>  
        `
        phoneContainer.appendChild(phoneDiv)
    });
    toggleLoadSpinner(false)


}
const handleSearch = (isShowAll) => {
    toggleLoadSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    console.log(searchFieldValue);
    loadPhone(searchFieldValue, isShowAll); // upoer loadphone fuction ta call kora holo and arguments pathano holo
}

const toggleLoadSpinner = (isLoading) => {
    const loadSpinner = document.getElementById('loading-spinner');
    if(isLoading) {
        loadSpinner.classList.remove('hidden')
    }
    else {
        loadSpinner.classList.add('hidden')
    }
}

// handle Show All 
const showAllPhones = () => {
    handleSearch(true)
}
