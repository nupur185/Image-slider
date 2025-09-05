const images = {
    flowers: ["https://thvnext.bing.com/th/id/OIP.ykL5JKv1vMoBoHeJXdi96gHaEo?w=258&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.Me_GXvFlOxYDal03e43vFQHaEK?w=225&h=180&c=7&r=0&o=5&cb=ucfimgc2&dpr=1.3&pid=1.7",
            "https://thvnext.bing.com/th/id/OIP.CmVliHEClMOwhhzWb3K0TgHaEK?w=379&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.8Rb3AGWHqqAkF7_APNcJsQHaEo?w=262&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
        ],
    nature: ["https://thvnext.bing.com/th/id/OIP.n7Fhe-A6ad_g6JQrLru0ZwHaEK?w=310&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.R-nJY_wcufSB2m1zj9CYAwHaEK?w=281&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.UYk_EnLFFHv_Bw6D7u2MVAHaEK?w=281&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.zvTcKp9RZsP7deXhl6EJcAHaEK?w=264&h=180&c=7&r=0&o=5&cb=ucfimgc2&dpr=1.3&pid=1.7"
        ],
    animals: ["https://thvnext.bing.com/th/id/OIP.jZan4LYYrGakayWUnl3snQHaEo?w=262&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.lujNxni4cK0eapPPC7wr6wHaEo?w=248&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.qLcr9LxXhYp2rQlbn_nrbAHaEK?w=280&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://www.bing.com/th/id/OIP.fZ_J9a8qvMVGNZW0J1bDAAHaEK?w=275&h=180&c=7&r=0&o=5&cb=ucfimgc2&dpr=1.3&pid=1.7",
    ],
    monuments: ["https://thvnext.bing.com/th/id/OIP.v6RuDk2mpkF88xzfjNRfLgHaE9?w=272&h=182&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.5hZgZTXaCngA2RcK4ZzcaQHaFH?w=263&h=182&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.erPuGcsuhBb8s3n0d1B8TwHaEf?w=262&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.nolG_jwRXPmDOY5FxtYKqgHaE8?w=191&h=180&c=7&r=0&o=5&cb=ucfimgc2&dpr=1.3&pid=1.7"
    ],
    foods: ["https://thvnext.bing.com/th/id/OIP.L7gVEfFeBhsZcwixAOs3TgHaFj?w=234&h=180&c=7&r=0&o=5&cb=ucfimgc2&dpr=1.3&pid=1.7",
            "https://thvnext.bing.com/th/id/OIP.W2TiiddFwFL_ApWuIP_aBwHaEo?w=213&h=180&c=7&r=0&o=5&cb=ucfimgc2&dpr=1.3&pid=1.7",
            "https://thvnext.bing.com/th/id/OIP.nG9SVlvANCym3YzZUU8uTgHaFj?w=205&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
            "https://thvnext.bing.com/th/id/OIP.xOY2Nsmb0S3NaE1mFhCHCwHaEK?w=286&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3",
    ]
};

images.all = [
    ...images.flowers,
    ...images.nature,
    ...images.animals,
    ...images.monuments,
    ...images.foods
  ];

let currentTab= document.querySelector('.currentTab');
currentTab.textContent= "all";
let currentCategory = "all";
let currentIndex = 0;
let autoSlide;
const imageContainer = document.querySelector(".Image");

const animations = ["fade",  "rotateIn", "bounceIn", "slide-left", "flipInY", "slide-right", "zoom-in", "zoom-out"];
let animIndex = 0; 

// Create image elements 
function setupImages(category) {
    imageContainer.innerHTML = "";
    images[category].forEach((src, idx) => {
        const img = document.createElement("img");
        img.src = src;
        if (idx === 0) img.classList.add("active");
        imageContainer.appendChild(img);
    });
    currentIndex = 0;
}


function showImage(index) {
    const imgs = document.querySelectorAll(".Image img");
    const anim = animations[animIndex];

    imgs.forEach((img, i) => {
        img.className = ""; 
        if (i === index) {
            img.classList.add("active", anim);
        }
    });

    animIndex = (animIndex+1) % animations.length;
}

setupImages("all");

function nextImage() {
    const imgs = images[currentCategory];
    currentIndex = (currentIndex+1) % imgs.length;
    showImage(currentIndex);
}

function prevImage() {
    const imgs = images[currentCategory];
    currentIndex = (currentIndex-1+imgs.length) % imgs.length;
    showImage(currentIndex);
}

function startAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextImage, 3000);
}
startAutoSlide();

// Left/Right icon controls
document.querySelector(".leftCircle").addEventListener("click", () => {
    prevImage();
    startAutoSlide();
});
document.querySelector(".rightCircle").addEventListener("click", () => {
    nextImage();
    startAutoSlide();
});

// Category filter
document.querySelectorAll(".headerRight h3").forEach(tab => {
    tab.addEventListener("click", () => {
        const category = tab.textContent.toLowerCase();
        currentCategory = category;
        setupImages(currentCategory);
        currentTab.textContent= currentCategory;
        showImage(currentIndex);
        startAutoSlide();
    });
});
