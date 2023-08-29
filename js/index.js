const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList = 'card w-96 bg-base-100 shadow-xl'
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


}

loadPhone();