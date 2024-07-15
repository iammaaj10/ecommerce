const navdialog= document.getElementById('navdialog')

function handlemenu()
{
    navdialog.classList.toggle('hidden')
}



document.getElementById('btn1').addEventListener('click', ()=> {
    document.getElementById('signup').classList.remove('hidden');
});

document.getElementById('cross').addEventListener('click', ()=> {
    document.getElementById('signup').classList.add('hidden');
});

document.getElementById('btn2').addEventListener('click', ()=> {
    document.getElementById('signup').classList.remove('hidden');
});






document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navdialog a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            handlemenu();
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.formsubmit').addEventListener('click', (e) => {
        e.preventDefault();

        // Clear all previous error messages
        document.querySelectorAll('.error').forEach((curEL) => {
            curEL.innerHTML = "";
        });

        // Get form field values
        const name = document.getElementById("right1").value.trim();
        const phone = document.getElementById("right2").value.trim();
        const message = document.getElementById("right3").value.trim();

        // Define validation patterns
        const usernamePattern = /^[A-Za-z]{3,20}$/;
        const phonePattern = /^[6-9][0-9]{9}$/;

        let valid = true;

        // Validate the name field
        if (!usernamePattern.test(name)) {
            document.getElementById('errormsg').innerHTML = "Invalid username";
            valid = false;
        }

        // Validate the phone number field
        if (!phonePattern.test(phone)) {
            document.getElementById('errormsg1').innerHTML = "Invalid phone number";
            valid = false;
        }

        let arr=[]
        if (valid) {
            
          let formdetails=document.getElementsByClassName("form-control");
          Array.from(formdetails).forEach((e)=>arr.push(e.value));
          console.log(arr);
          Array.from(formdetails).forEach((e)=>(e.value=""))

            // Show success alert
            alert("Thanks for your feedback !!!");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2000, 
        disableOnInteraction: false, 
    },
    });
  });


  
  function filterShoes() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const shoeCards = document.querySelectorAll('#grid-container .product-list');
    
    shoeCards.forEach(card => {
        const shoeName = card.querySelector('h3').innerText.toLowerCase();
        
        if (shoeName.includes(filter)) {
            card.classList.remove('hidden');  
        } else {
            card.classList.add('hidden');  
        }
    });
    document.getElementById('searchInput').addEventListener('input', filterShoes);
}




// signup

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector('.formsubmit1').addEventListener('click',(e)=>{
        e.preventDefault();

        document.querySelectorAll('.err').forEach((val)=>{
            val.innerHTML = '';
        });

        const username=document.getElementById('user').value.trim();
        const number=document.getElementById('nos').value.trim();
        const email=document.getElementById('email').value.trim();
        const pass=document.getElementById('pass').value.trim();
        const cpass=document.getElementById('pass1').value.trim();


        const puser=/^[A-Za-z]{3,20}$/;
        const pnum=/^[6-9][0-9]{9}$/;
        const pemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const ppass=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;



        let valid =true

        if(!puser.test(username))
        {
            document.getElementById('error1').innerHTML="Invalid username";
            valid=false
        }

        if(!pnum.test(number))
        {
            document.getElementById('error2').innerHTML="Invalid phone number";
            valid=false;
        }

        if(!pemail.test(email))
        {
            document.getElementById('error3').innerHTML="Invalid email id!"
            valid=false;
        }

        if(!ppass.test(pass))
        {
            document.getElementById('error4').innerHTML="Password must be atleast 8 letters containing digits letters and special symbols";
            valid=false;
        }
        if(pass!==cpass)
        {
            document.getElementById('error5').innerHTML="Passowrd is not matching !!";
            valid=false;
        }

         if(valid){
            let formdetails= document.getElementsByClassName('form-control')
        
        Array.from(formdetails).forEach((e)=>(e.value=""))
        alert("Sign up done successfully")
         }
        
    });
});

// cart updation

document.addEventListener("DOMContentLoaded", () => {
    let quantity = 0;
    const addToCartButtons = document.querySelectorAll('.btn-hard');
    const quantitySpan = document.getElementById('quan');
    const quantitySpan1 = document.getElementById('quan1');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            quantity++;
            quantitySpan.textContent = quantity;
            quantitySpan1.textContent = quantity;
            
        });
    });
});

// Adding cart logic
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    // Function to update the shopping list UI
    function updateCartUI() {
        const cartContainer = document.getElementById('cart');
        const quantitySpan = document.getElementById('quan');
        const quantitySpan1 = document.getElementById('quan1');
        
        cartContainer.innerHTML = ''; // Clear the cart container

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item', 'bg-white', 'p-2', 'm-2', 'rounded', 'shadow', 'flex', 'justify-between', 'items-center');

            const itemName = document.createElement('span');
            itemName.textContent = item.name;
            itemElement.appendChild(itemName);

            const itemPrice = document.createElement('span');
            itemPrice.textContent = ` - $${item.price}`;
            itemElement.appendChild(itemPrice);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-product', 'bg-red-500', 'text-white', 'rounded-xl', 'px-2', 'py-1', 'ml-2','gap-2');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                cart.splice(index, 1);
                updateCartUI();
            });
            itemElement.appendChild(deleteButton);

            cartContainer.appendChild(itemElement);
        });

        // Update the quantity span
        quantitySpan.textContent = cart.length;
        quantitySpan1.textContent = cart.length;
    }

    // Add event listener to each "Add to Cart" button
    document.querySelectorAll('.btn-hard').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product-list');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = productElement.querySelector('h1').textContent.replace('$', '');

            const product = {
                name: productName,
                price: parseFloat(productPrice)
            };

            cart.push(product);
            updateCartUI();
        });
    });

    // Clear the cart when the cross button is clicked
    document.getElementById('cross').addEventListener('click', () => {
        cart.length = 0;
        updateCartUI();
    });
});

document.getElementById('add-cart1').addEventListener('click', ()=> {
    document.getElementById('cart-container').classList.remove('hidden');
});
document.getElementById('add-cart').addEventListener('click', ()=> {
    document.getElementById('cart-container').classList.remove('hidden');
});



document.getElementById('cross1').addEventListener('click',()=>{
    document.getElementById('cart-container').classList.add('hidden');
})

