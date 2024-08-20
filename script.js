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


function maaj1()
{
    alert("Mr.John Snow");
}

function maaj2()
{
    alert("At/Post Ajara Dist Kolhapur Pin:416505")
}

function maaj3()
{
    alert("9130304068 , 7770007586")
}




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
        localStorage.setItem("Name",name)
        localStorage.setItem("Phone",phone)
        localStorage.setItem("Message",message)
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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.formsubmit1').addEventListener('click', (e) => {
        e.preventDefault();

        // Clear previous error messages
        document.querySelectorAll('.err').forEach((val) => {
            val.innerHTML = '';
        });

        const username = document.getElementById('user').value.trim();
        const number = document.getElementById('nos').value.trim();
        const email = document.getElementById('email').value.trim();
        const pass = document.getElementById('pass').value.trim();
        const cpass = document.getElementById('pass1').value.trim();

        const puser = /^[A-Za-z]{3,20}$/;
        const pnum = /^[6-9][0-9]{9}$/;
        const pemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const ppass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;

        let valid = true;

        if (!puser.test(username)) {
            document.getElementById('error1').innerHTML = "Invalid username";
            valid = false;
        }

        if (!pnum.test(number)) {
            document.getElementById('error2').innerHTML = "Invalid phone number";
            valid = false;
        }

        if (!pemail.test(email)) {
            document.getElementById('error3').innerHTML = "Invalid email id!";
            valid = false;
        }

        if (!ppass.test(pass)) {
            document.getElementById('error4').innerHTML = "Password must be at least 8 characters long containing digits, letters, and special symbols";
            valid = false;
        }

        if (pass !== cpass) {
            document.getElementById('error5').innerHTML = "Password is not matching !!";
            valid = false;
        }

        if (valid) {
            let formdetails = document.getElementsByClassName('form-control');
            Array.from(formdetails).forEach((e) => (e.value = ""));
            alert("Sign up done successfully");

            localStorage.setItem("User", username);
            localStorage.setItem("Nos", number);
            localStorage.setItem("Email", email);
            localStorage.setItem("pass", pass);
            localStorage.setItem("cpass", cpass);
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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-cart1').addEventListener('click', () => {
        document.getElementById('cart-container').classList.remove('hidden');
    });

    document.getElementById('add-cart').addEventListener('click', () => {
        document.getElementById('cart-container').classList.remove('hidden');
    });

    document.getElementById('cross1').addEventListener('click', () => {
        document.getElementById('cart-container').classList.add('hidden');
    });
});


// dynamically adding the deatails of each shoes
document.addEventListener("DOMContentLoaded", () => {
const containers = document.querySelectorAll('.product-list');
const modal = document.getElementById('details');
const remove = document.getElementById('cross2');
const detail_modal = document.getElementById('pdetails');

containers.forEach(container => {
    const buttons = container.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const containerId = container.id.substring(1); 
            displayDetails(containerId);
        });
    });
});

remove.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

function displayDetails(containerId) {
    const details = {
        1: {
            title: 'Adidas t-103',
            description: 'Extremely heavy and robust shoes and can be used in sports tracking and also it is unisex!!',
            price: '$30.00',
            image: 'images/pngwing.com.png',
            button: 'Buy Now'
        },
        2: {
            title: 'Nike air max',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj1.png',
            button: 'Buy Now'
        },
        3: {
            title: 'Nike R-22',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj2.png',
            button: 'Buy Now'
        },
        4: {
            title: 'Nike t-104',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$35.00',
            image: 'images/maaj3.png',
            button: 'Buy Now'
        },
        5: {
            title: 'T-105',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$30.00',
            image: 'images/maaj5.png',
            button: 'Buy Now'
        },
        6: {
            title: 'T-106',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$45.00',
            image: 'images/maaj6.png',
            button: 'Buy Now'
        },
        7: {
            title: 'T-107',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$30.00',
            image: 'images/maaj7.png',
            button: 'Buy Now'
        },
        8: {
            title: 'T-108',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$50.00',
            image: 'images/maaj8.png',
            button: 'Buy Now'
        },
        9: {
            title: 'T-109',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$30.00',
            image: 'images/maaj9.png',
            button: 'Buy Now'
        },
        10: {
            title: 'T-110',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj10.png',
            button: 'Buy Now'
        },
        11: {
            title: 'T-111',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$45.00',
            image: 'images/maaj11.png',
            button: 'Buy Now'
        },
        12: {
            title: 'T-112',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$30.00',
            image: 'images/maaj12.png',
            button: 'Buy Now'
        },
        13: {
            title: 'T-113',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$55.00',
            image: 'images/maaj13.png',
            button: 'Buy Now'
        },
        14: {
            title: 'T-114',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj14.png',
            button: 'Buy Now'
        },
        15: {
            title: 'T-115',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$45.00',
            image: 'images/maaj15.png',
            button: 'Buy Now'
        },
        16: {
            title: 'T-116',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj16.png',
            button: 'Buy Now'
        },
        17: {
            title: 'T-117',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$30.00',
            image: 'images/maaj17.png',
            button: 'Buy Now'
        },
        18: {
            title: 'T-118',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$35.00',
            image: 'images/maaj18.png',
            button: 'Buy Now'
        },
        19: {
            title: 'T-119',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj19.png',
            button: 'Buy Now'
        },
        20: {
            title: 'T-120',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$35.00',
            image: 'images/maaj20.png',
            button: 'Buy Now'
        },
        21: {
            title: 'T-121',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj21.png',
            button: 'Buy Now'
        },
        22: {
            title: 'T-122',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$45.00',
            image: 'images/maaj22.png',
            button: 'Buy Now'
        },
        23: {
            title: 'T-123',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$35.00',
            image: 'images/maaj23.png',
            button: 'Buy Now'
        },
        24: {
            title: 'T-124',
            description: 'Gear to experience the limited edition pair of Nike available in every size',
            price: '$40.00',
            image: 'images/maaj24.png',
            button: 'Buy Now'
        },
        
    };

    const containerDetails = details[containerId];
    if (containerDetails) {
        detail_modal.innerHTML = `
            <h2>${containerDetails.title}</h2>
            <p>${containerDetails.description}</p>
            <p>Price: ${containerDetails.price}</p>
            <img src="${containerDetails.image}" class="w-20 h-20" alt="${containerDetails.title}">
            <button class="font-bold bg-red-600 text-white rounded-xl hover:bg-slate-300 hover:border border-slate-600 w-fit px-5 py-2 text-lg hover:text-black">${containerDetails.button}</button>
        `;
        modal.style.display = 'block';
    } 
}
});


// github page
document.addEventListener("DOMContentLoaded", () => {
document.getElementById('github').addEventListener('click',()=>{
    document.getElementById('gitcon').classList.remove('hidden')
})
document.getElementById('gitcross').addEventListener('click',()=>{
    document.getElementById('gitcon').classList.add('hidden')
})

   document.getElementById('github').addEventListener('click', async () => {
    try {
        const response = await fetchData("https://api.github.com/users/iammaaj10");
       // document.getElementById('result').innerText = JSON.stringify(response,null,2);
        const followers = response.followers
        document.getElementById('followers-count').innerText =`Followers = ${followers}`;
        const avatar_url=response.avatar_url
        const imageElement=document.getElementById('pic')
         imageElement.src=avatar_url
        imageElement.style.display='block '
    } catch (error) {
        document.getElementById('followers-count').innerText = error;
    }
});
async function fetchData(url) {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        let toastbox = document.getElementById('toastbox');
        let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Added ';
    
        document.querySelectorAll('.btn-hard').forEach(button => {
            button.addEventListener('click', () => {
                let toast = document.createElement('div');
                toast.classList.add('toast');
                toast.innerHTML = successMsg;
                toastbox.appendChild(toast);
    
                setTimeout(() => {
                    toast.remove();
                }, 3000);
            });
        });
    });
    
    
    // gsap.to('#men',{
    //     y: 100,
    //     x:0,
    //     duration:2,
    //     delay:1
    // })
    