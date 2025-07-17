document.addEventListener('DOMContentLoaded', () => {
  const products = [
      // LAPTOPS
      {
          id: 'laptop-hp-15',
          category: 'Laptops',
          name: 'HP 15, 13th Gen Intel Core i5-1334U Laptop',
          description: '16GB DDR4, 512GB SSD, Anti-Glare, Micro-edge, 15.6\'\'/39.6cm, FHD, Win11, M365, Office24, Silver, 1.59kg, Iris Xe Graphics, FHD Camera w/privacy shutter, fd0577TU',
          image: 'https://m.media-amazon.com/images/I/71bagLp2sXL._AC_UY218_.jpg',
          originalPrice: 70000, // Estimated price in INR
      },
      {
          id: 'laptop-lenovo-ideapad-slim-3-i7',
          category: 'Laptops',
          name: 'Lenovo Smartchoice Ideapad Slim 3 13th Gen Intel Core I7-13620H',
          description: '15.3 Inch(38.8Cm) WUXGA IPS Laptop, 16GB RAM/512GB SSD/Windows 11/Office Home 2024/Backlit Keyboard/1Yr ADP Free/Grey/1.6Kg, 83K100CJIN',
          image: 'https://m.media-amazon.com/images/I/71HMPbAf-iL._SX569_.jpg',
          originalPrice: 90000, // Estimated price in INR
      },
      {
          id: 'laptop-lenovo-yoga-slim-7',
          category: 'Laptops',
          name: 'Lenovo Smartchoice Yoga Slim 7 Intel Core Ultra 5 125H Built-in AI',
          description: '14"(35.5cm) WUXGA-OLED 400Nits Laptop (16GB/512GB SSD/60Hz/100% DCI-P3/Win11/MSO 21/1Yr ADP Free/Alexa/Grey/1.39Kg), 83CV003MIN',
          image: 'https://m.media-amazon.com/images/I/71pxTqUJOhL._SX569_.jpg',
          originalPrice: 110000, // Estimated price in INR
      },
      {
          id: 'laptop-asus-vivobook-15',
          category: 'Laptops',
          name: 'ASUS Vivobook 15, 13th Gen, Intel Core i5-13420H',
          description: 'Intel UHD iGPU/16GB RAM/512GB SSD/FHD/15.6"/60Hz/Backlit Keyboard/Windows 11/M365 Basic (1Year)*/Office Home 2024/Cool Silver/1.70 kg, X1502VA-BQ835WS',
          image: 'https://m.media-amazon.com/images/I/718goB02iNL._SL1500_.jpg',
          originalPrice: 65000, // Estimated price in INR
      },
      {
          id: 'laptop-dell-inspiron-15',
          category: 'Laptops',
          name: 'Dell Inspiron 15-3530 Laptop',
          description: '15.6 inch FHD, 13th Gen Intel Core i7-1355U, 16GB DDR4 RAM, 512GB SSD, Backlit Keyboard, Windows 11 Home, Platinum Silver, 1.62 Kg, 1 Year Onsite Hardware Service',
          image: 'https://m.media-amazon.com/images/I/814WFVz-BCL._SL1500_.jpg',
          originalPrice: 85000, // Estimated price in INR
      },
      {
          id: 'laptop-hp-pavilion-x360',
          category: 'Laptops',
          name: 'HP Pavilion x360, 13th Gen Intel Core i5-1335U',
          description: '16GB DDR4, 512GB SSD, FHD, IPS, Micro-Edge, 14"/35.6cm, Touchscreen 2-in-1, Win11, Office21, Silver, 1.51kg, ek1074TU, Iris Xe, FPR, 5MP Camera Laptop',
          image: 'https://m.media-amazon.com/images/I/618zAXbM4uL._SL1500_.jpg',
          originalPrice: 95000, // Estimated price in INR
      },

      // PHONES
      {
          id: 'phone-iphone-15',
          category: 'Phones',
          name: 'Apple iPhone 15 (128 GB) - Black',
          description: 'The latest iPhone 15 with stunning display and powerful camera.',
          image: 'https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg',
          originalPrice: 79900, // Estimated price in INR
      },
      {
          id: 'phone-iphone-16',
          category: 'Phones',
          name: 'iPhone 16 128 GB: 5G Mobile Phone with Camera Control',
          description: 'A18 Chip and a Big Boost in Battery Life. Works with AirPods; Black',
          image: 'https://m.media-amazon.com/images/I/61135j8fPJL._SL1500_.jpg',
          originalPrice: 89900, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'phone-iphone-16-pro-max',
          category: 'Phones',
          name: 'iPhone 16 Pro Max 256 GB',
          description: '5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium',
          image: 'https://m.media-amazon.com/images/I/61giwQtR1qL._SL1500_.jpg',
          originalPrice: 149900, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'phone-nokia-105-classic',
          category: 'Phones',
          name: 'Nokia 105 Classic | Single SIM Keypad Phone',
          description: 'Built-in UPI Payments, Long-Lasting Battery, Wireless FM Radio, Without Charger | Charcoal',
          image: 'https://m.media-amazon.com/images/I/51GSe9rxsoL._SL1080_.jpg',
          originalPrice: 1500, // Estimated price in INR
      },
      {
          id: 'phone-nokia-all-new-105',
          category: 'Phones',
          name: 'Nokia All-New 105 Single Sim Keypad Phone',
          description: 'Built-in UPI Payments, Long-Lasting Battery, Wireless FM Radio | Charcoal',
          image: 'https://m.media-amazon.com/images/I/61FX8qveBNL._SL1500_.jpg',
          originalPrice: 1600, // Estimated price in INR
      },
      {
          id: 'phone-samsung-zfold7',
          category: 'Phones',
          name: 'Samsung Galaxy Z Fold7 5G Smartphone with Galaxy AI',
          description: 'JetBlack, 12GB RAM, 256GB Storage, Ultra Sleek Design with 200MP Camera, Powerful Snapdragon 8 Elite, Google Gemini',
          image: 'https://m.media-amazon.com/images/I/61Q1AgNSO3L._SL1500_.jpg',
          originalPrice: 170000, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'phone-samsung-s25',
          category: 'Phones',
          name: 'Samsung Galaxy S25 5G Smartphone with Galaxy AI',
          description: 'Navy, 12GB RAM, 256GB Storage, Snapdragon 8 Elite, 50 MP Camera with ProVisual Engine and 4000mAh Battery',
          image: 'https://m.media-amazon.com/images/I/61w7JQ+BFOL._SL1500_.jpg',
          originalPrice: 95000, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'phone-redmi-note-14-pro',
          category: 'Phones',
          name: 'Redmi Note 14 Pro 5G Champagne Gold',
          description: '8GB RAM 256GB Storage | 50 MP Sony Camera Setup | Corning Gorilla Glass Victus 2 | 1.5K 3D Curved AMOLED | Mediatek Dimensity 7300-Ultra | IP68 IP69',
          image: 'https://m.media-amazon.com/images/I/81sueO-H9mL._SL1500_.jpg',
          originalPrice: 25000, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'phone-redmi-a5',
          category: 'Phones',
          name: 'Redmi A5 Jaisalmer Gold',
          description: '4GB RAM 128GB ROM, an affordable and stylish smartphone for everyday use.',
          image: 'https://m.media-amazon.com/images/I/51mcySOjwFL._SL1200_.jpg',
          originalPrice: 8000, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'phone-vivo-x200-fe',
          category: 'Phones',
          name: 'VIVO X200 FE 5G (Amber Yellow)',
          description: '12GB RAM, 256GB Storage with No Cost EMI/Additional Exchange Offers',
          image: 'https://m.media-amazon.com/images/I/71QkSIVns8L._SL1500_.jpg',
          originalPrice: 30000, // Estimated price in INR (Hypothetical)
      },

      // TV
      {
          id: 'tv-acer-55-inch',
          category: 'TV',
          name: 'acer 139 cm (55 inches) G Plus Series 4K Ultra HD LED Smart Google TV',
          description: 'AR55UDGGR2851AD - Stunning 4K clarity and smart features.',
          image: 'https://m.media-amazon.com/images/I/71rxao2gVVL._SL1500_.jpg',
          originalPrice: 45000, // Estimated price in INR
      },
      {
          id: 'tv-samsung-32-inch',
          category: 'TV',
          name: 'Samsung 80 cm (32 inches) HD Smart LED TV',
          description: 'UA32H4550FUXXL - Compact and smart TV for any room.',
          image: 'https://m.media-amazon.com/images/I/71dxcllI6RL._SL1500_.jpg',
          originalPrice: 18000, // Estimated price in INR
      },
      {
          id: 'tv-redmi-xiaomi-32-inch',
          category: 'TV',
          name: 'Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV',
          description: 'L32MA-FVIN (Black) - Integrated Fire TV experience.',
          image: 'https://m.media-amazon.com/images/I/81XdceRvZaL._SL1500_.jpg',
          originalPrice: 17000, // Estimated price in INR
      },
      {
          id: 'tv-sony-55-inch-bravia',
          category: 'TV',
          name: 'Sony 139 cm (55 inches) BRAVIA 2 4K Ultra HD Smart LED Google TV',
          description: 'K-55S25B (Black) - Premium Sony picture and sound quality.',
          image: 'https://m.media-amazon.com/images/I/81fTiaf5qCL._SL1500_.jpg',
          originalPrice: 70000, // Estimated price in INR
      },

      // TABLET (Assuming this is a keyboard for a tablet based on description)
      {
          id: 'tablet-lenovo-ideatab-pro-keyboard',
          category: 'Tablets', // Listed under tablet section, but it's a keyboard
          name: 'Lenovo Original Ideatab Pro Keyboard',
          description: 'Detachable 3-Point Pogo-Pin Connectors | Wireless Keyboard with Touchpad (Ultra Thin, Productivity Enabling Hot Keys, 16 Intuitive Function Keys, ZG38C06035), Black',
          image: 'https://m.media-amazon.com/images/I/611pAM0eX4L._SL1500_.jpg',
          originalPrice: 8000, // Estimated price in INR (for a keyboard accessory)
      },

      // FRIDGES
      {
          id: 'fridge-haier-side-by-side',
          category: 'Fridges',
          name: 'Haier 598 L, 3 Star, 83% Convertible Fridge Space',
          description: 'Expert Inverter, Frost Free, Side by Side Refrigerator, (HRT-683GK, Graphite Black)',
          image: 'https://m.media-amazon.com/images/I/61KRrwz1rvL._SL1500_.jpg',
          originalPrice: 65000, // Estimated price in INR
      },
      {
          id: 'fridge-whirlpool-single-door',
          category: 'Fridges',
          name: 'Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator',
          description: '205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue, 2023 Model - Efficient and compact.',
          image: 'https://m.media-amazon.com/images/I/51yVxCR8VfL._SL1369_.jpg',
          originalPrice: 15000, // Estimated price in INR
      },

      // HEADPHONES
      {
          id: 'headphones-boult-fluid-x',
          category: 'Headphones',
          name: 'Boult Newly Launched Fluid X Headphones Bluetooth Wireless',
          description: '60H Playtime, 40mm Bass Driver, Zen ENC Mic, Type-C Charging, Combat™ Gaming Mode, BTv 5.4, Headphones Wireless with mic (Ivory White)',
          image: 'https://m.media-amazon.com/images/I/711Y31WRzbL._SL1500_.jpg',
          originalPrice: 2500, // Estimated price in INR
      },
      {
          id: 'headphones-boat-rockerz-450',
          category: 'Headphones',
          name: 'boAt Rockerz 450, 15 HRS Battery',
          description: '40mm Drivers, Padded Ear Cushions, Integrated Controls, Dual Modes, On Ear Bluetooth Headphones, Wireless Headphone with Mic (Luscious Black)',
          image: 'https://m.media-amazon.com/images/I/51FNnHjzhQL._SL1200_.jpg',
          originalPrice: 1800, // Estimated price in INR
      },

      // EARPODS
      {
          id: 'earpods-apple-airpods-4',
          category: 'Earpods',
          name: 'Apple AirPods 4 Wireless Earbuds',
          description: 'Bluetooth Headphones, Personalised Spatial Audio, Sweat and Water Resistant, USB-C Charging Case, H2 Chip, Up to 30 Hours of Battery Life, Effortless Setup for iPhone',
          image: 'https://m.media-amazon.com/images/I/61oCISLE+PL._SL1500_.jpg',
          originalPrice: 20000, // Estimated price in INR (Hypothetical)
      },
      {
          id: 'earpods-oneplus-nord-buds-2r',
          category: 'Earpods',
          name: 'OnePlus Nord Buds 2r True Wireless in Ear Earbuds with Mic',
          description: '12.4mm Drivers, Playback:Upto 38hr case, 4-Mic Design, IP55 Rating [Deep Grey]',
          image: 'https://m.media-amazon.com/images/I/51oMWaW7tKL._SL1500_.jpg',
          originalPrice: 3000, // Estimated price in INR
      },

      // SMART WATCHES
      {
          id: 'smartwatch-noisefit-halo',
          category: 'Smartwatches',
          name: 'NoiseFit Halo 1.43" AMOLED Display, Bluetooth Calling Round Dial Smart Watch',
          description: 'Premium Metallic Build, Always on Display, Smart Gesture Control, 100 Sports Modes (Forest Green)',
          image: 'https://m.media-amazon.com/images/I/71qvHi7qXEL._SL1500_.jpg',
          originalPrice: 4000, // Estimated price in INR
      },
      {
          id: 'smartwatch-noise-twist-go',
          category: 'Smartwatches',
          name: 'Noise Twist Go Round dial Smartwatch with BT Calling',
          description: '1.39" Display, Metal Build, 100+ Watch Faces, IP68, Sleep Tracking, 100+ Sports Modes, 24/7 Heart Rate Monitoring (Rose Pink)',
          image: 'https://m.media-amazon.com/images/I/61Y6E3Y9heL._SL1500_.jpg',
          originalPrice: 3500, // Estimated price in INR
      },

      // BLUETOOTH SPEAKERS
      {
          id: 'speaker-amazon-echo-dot-5th-gen',
          category: 'Bluetooth Speakers',
          name: 'Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound',
          description: 'Motion Detection, Temperature Sensor, Alexa and Bluetooth| Blue',
          image: 'https://m.media-amazon.com/images/I/81hgjKwsdHL._SL1500_.jpg',
          originalPrice: 5000, // Estimated price in INR
      },
      {
          id: 'speaker-boat-aavante-bar-610',
          category: 'Bluetooth Speakers',
          name: 'boAt Aavante Bar 610, 25W Signature Sound',
          description: '2.0 CH with Dual Passive Radiators, 7 HRS Battery, Sleek Design, Multi Connectivity, Bluetooth Sound Bar, Soundbar Speaker (Charcoal Black)',
          image: 'https://m.media-amazon.com/images/I/51SFh0i5HHL._SL1500_.jpg',
          originalPrice: 3500, // Estimated price in INR
      },
  ];

  // Calculate discounted price for each product
  products.forEach(product => {
      product.discountedPrice = (product.originalPrice * 0.01).toFixed(2);
  });

  const productGrid = document.getElementById('productGrid');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const categoriesNav = document.querySelector('.categories-nav ul');
  const cartIcon = document.getElementById('cartIcon');
  const cartSidebar = document.getElementById('cartSidebar');
  const closeCartButton = document.getElementById('closeCart');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCountSpan = document.getElementById('cartCount');
  const cartTotalItemsSpan = document.getElementById('cartTotalItems');
  const cartTotalPriceSpan = document.getElementById('cartTotalPrice');
  const checkoutButton = document.getElementById('checkoutButton');
  const orderConfirmationOverlay = document.getElementById('orderConfirmationOverlay');
  const closeOrderConfirmationButton = document.getElementById('closeOrderConfirmation');

  let cart = []; // Array to store items in the cart

  // Function to display products
  function displayProducts(filteredProducts = products) {
      productGrid.innerHTML = ''; // Clear existing products
      if (filteredProducts.length === 0) {
          productGrid.innerHTML = '<p class="no-results">No products found matching your search or category.</p>';
          return;
      }

      filteredProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <p class="description">${product.description}</p>
                  <div class="price-section">
                      <span class="original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                      <span class="discounted-price">₹${parseFloat(product.discountedPrice).toLocaleString('en-IN')}</span>
                  </div>
                  <button class="add-to-cart-button" data-id="${product.id}">Add to Cart</button>
              </div>
          `;
          productGrid.appendChild(productCard);
      });

      // Add event listeners to "Add to Cart" buttons
      document.querySelectorAll('.add-to-cart-button').forEach(button => {
          button.addEventListener('click', (event) => {
              const productId = event.target.dataset.id;
              const productToAdd = products.find(p => p.id === productId);
              if (productToAdd) {
                  addToCart(productToAdd);
              }
          });
      });
  }

  // Function to add product to cart
  function addToCart(product) {
      const existingItemIndex = cart.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
          cart[existingItemIndex].quantity++;
      } else {
          cart.push({ ...product, quantity: 1 });
      }
      updateCartDisplay();
      openCartSidebar(); // Open cart sidebar when item is added
  }

  // Function to remove product from cart
  function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      updateCartDisplay();
  }

  // Function to update cart display
  function updateCartDisplay() {
      cartItemsContainer.innerHTML = '';
      if (cart.length === 0) {
          cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
      } else {
          cart.forEach(item => {
              const cartItemDiv = document.createElement('div');
              cartItemDiv.classList.add('cart-item');
              cartItemDiv.innerHTML = `
                  <img src="${item.image}" alt="${item.name}">
                  <div class="cart-item-details">
                      <h4>${item.name}</h4>
                      <p>Quantity: ${item.quantity}</p>
                      <p class="item-price">₹${(parseFloat(item.discountedPrice) * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                  <button class="remove-item-button" data-id="${item.id}">&times;</button>
              `;
              cartItemsContainer.appendChild(cartItemDiv);
          });
      }

      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cart.reduce((sum, item) => sum + (parseFloat(item.discountedPrice) * item.quantity), 0);

      cartCountSpan.textContent = totalItems;
      cartTotalItemsSpan.textContent = totalItems;
      cartTotalPriceSpan.textContent = totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // Add event listeners to remove buttons
      document.querySelectorAll('.remove-item-button').forEach(button => {
          button.addEventListener('click', (event) => {
              const productId = event.target.dataset.id;
              removeFromCart(productId);
          });
      });
  }

  // Search functionality
  searchButton.addEventListener('click', () => {
      performSearch();
  });

  searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          performSearch();
      }
  });

  function performSearch() {
      const searchTerm = searchInput.value.toLowerCase();
      const filtered = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
      displayProducts(filtered);
      // Deselect any active category when searching
      document.querySelectorAll('.categories-nav li').forEach(li => li.classList.remove('active'));
  }

  // Category filtering
  categoriesNav.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
          const selectedCategory = event.target.dataset.category;

          // Update active class
          document.querySelectorAll('.categories-nav li').forEach(li => li.classList.remove('active'));
          event.target.classList.add('active');

          if (selectedCategory === 'all') {
              displayProducts();
          } else {
              const filtered = products.filter(product => product.category === selectedCategory);
              displayProducts(filtered);
          }
          searchInput.value = ''; // Clear search input when category is selected
      }
  });

  // Cart sidebar toggle
  cartIcon.addEventListener('click', () => {
      toggleCartSidebar();
  });

  closeCartButton.addEventListener('click', () => {
      closeCartSidebar();
  });

  function openCartSidebar() {
      cartSidebar.classList.add('open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
  }

  function closeCartSidebar() {
      cartSidebar.classList.remove('open');
      document.body.style.overflow = ''; // Re-enable scrolling
  }

  function toggleCartSidebar() {
      if (cartSidebar.classList.contains('open')) {
          closeCartSidebar();
      } else {
          openCartSidebar();
      }
  }

  // Checkout / Order Simulation
  checkoutButton.addEventListener('click', () => {
      if (cart.length > 0) {
          closeCartSidebar();
          showOrderConfirmation();
          cart = []; // Clear cart after "checkout"
          updateCartDisplay();
      } else {
          alert('Your cart is empty. Please add items before checking out.');
      }
  });

  function showOrderConfirmation() {
      orderConfirmationOverlay.classList.add('show');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  closeOrderConfirmationButton.addEventListener('click', () => {
      orderConfirmationOverlay.classList.remove('show');
      document.body.style.overflow = ''; // Re-enable scrolling
  });

  // Initial display of all products
  displayProducts();
  updateCartDisplay(); // Initialize cart display
});