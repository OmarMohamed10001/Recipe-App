const recipes = [
  {
    status: "success",
    results: 53,
    data: {
      recipes: [
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/100111309d9.jpg",
          title: "Double Crust Stuffed Pizza",
          id: "664c8f193e7aa067e94e8297",
        },
        {
          publisher: "BBC Good Food",
          image_url:
            "http://forkify-api.herokuapp.com/images/2150654_MEDIUM6068.jpg",
          title: "Pizza bianco with artichoke hearts",
          id: "664c8f193e7aa067e94e897b",
        },
        {
          publisher: "Vintage Mixer",
          image_url:
            "http://forkify-api.herokuapp.com/images/CauliflowerPizzaCrustRecipe06fdc.jpg",
          title: "Cauliflower Pizza Crust Recipe",
          id: "664c8f193e7aa067e94e8906",
        },
        {
          publisher: "101 Cookbooks",
          image_url:
            "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
          title: "Best Pizza Dough Ever",
          id: "664c8f193e7aa067e94e8704",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
          title: "PW’s Favorite Pizza",
          id: "664c8f193e7aa067e94e86ba",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/steakhousepizza0b87.jpg",
          title: "One Basic Pizza Crust",
          id: "664c8f193e7aa067e94e8673",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/5278973957_3f9f9a21c2_o7a1b.jpg",
          title: "Fig-Prosciutto Pizza with Arugula",
          id: "664c8f193e7aa067e94e866f",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
          title: "Deep Dish Fruit Pizza",
          id: "664c8f193e7aa067e94e8658",
        },
        {
          publisher: "Real Simple",
          image_url:
            "http://forkify-api.herokuapp.com/images/pizza_30061a5d763.jpg",
          title: "Salami and Brussels Sprouts Pizza",
          id: "664c8f193e7aa067e94e8605",
        },
        {
          publisher: "Real Simple",
          image_url:
            "http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg",
          title: "English-Muffin Egg Pizzas",
          id: "664c8f193e7aa067e94e85be",
        },
        {
          publisher: "BBC Good Food",
          image_url:
            "http://forkify-api.herokuapp.com/images/1813674_MEDIUM6f4a.jpg",
          title: "Salami &amp; peppadew pizza",
          id: "664c8f193e7aa067e94e856b",
        },
        {
          publisher: "Closet Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
          title: "Pizza Quesadillas (aka Pizzadillas)",
          id: "664c8f193e7aa067e94e84c2",
        },
        {
          publisher: "What's Gaby Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/PepperoniPizzaMonkeyBread8cd5.jpg",
          title: "Pepperoni Pizza Monkey Bread",
          id: "664c8f193e7aa067e94e8433",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/191121d99d.jpg",
          title: "Fast English Muffin Pizzas",
          id: "664c8f193e7aa067e94e82b4",
        },
        {
          publisher: "Whats Gaby Cooking",
          image_url: "http://forkify-api.herokuapp.com/images/IMG_98428b96.jpg",
          title: "Loaded Veggie and Prosciutto Pizza",
          id: "664c8f193e7aa067e94e898a",
        },
        {
          publisher: "My Baking Addiction",
          image_url:
            "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg",
          title: "Spicy Chicken and Pepper Jack Pizza",
          id: "5ed6604591c37cdc054bc886",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/237891b5e4.jpg",
          title: "Jay’s Signature Pizza Crust",
          id: "5ed6604591c37cdc054bc990",
        },
        {
          publisher: "Two Peas and Their Pod",
          image_url:
            "http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg",
          title: "Peach, Basil, Mozzarella, & Balsamic Pizza",
          id: "664c8f193e7aa067e94e882f",
        },
        {
          publisher: "Two Peas and Their Pod",
          image_url:
            "http://forkify-api.herokuapp.com/images/avocadopizzawithcilantrosauce4bf5.jpg",
          title: "Avocado Pita Pizza with Cilantro Sauce",
          id: "664c8f193e7aa067e94e880c",
        },
        {
          publisher: "Bon Appetit",
          image_url:
            "http://forkify-api.herokuapp.com/images/figandgoatcheesepizzawitharugula646698d.jpg",
          title: "Fig and Goat Cheese Pizza with Arugula",
          id: "664c8f193e7aa067e94e877e",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/4433733640_8b0a5d19fbace0.jpg",
          title: "CPK’s BBQ Chicken Pizza",
          id: "664c8f193e7aa067e94e86b9",
        },
        {
          publisher: "Closet Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg",
          title: "Avocado Breakfast Pizza with Fried Egg",
          id: "664c8f193e7aa067e94e8476",
        },
        {
          publisher: "Real Simple",
          image_url:
            "http://forkify-api.herokuapp.com/images/20meals14_30007e78232.jpg",
          title: "Artichoke Pizzas With Lemony Green Bean Salad",
          id: "664c8f193e7aa067e94e85a2",
        },
        {
          publisher: "Closet Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg",
          title: "Thai Chicken Pizza with Sweet Chili Sauce",
          id: "664c8f193e7aa067e94e84e2",
        },
        {
          publisher: "Two Peas and Their Pod",
          image_url:
            "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
          title: "Sweet Potato Kale Pizza with Rosemary & Red Onion",
          id: "664c8f193e7aa067e94e8823",
        },
        {
          publisher: "Closet Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/Strawberry2BBalsamic2BPizza2Bwith2BChicken252C2BSweet2BOnion2Band2BSmoked2BBacon2B5002B300939d125e2.jpg",
          title:
            "Balsamic Strawberry and Chicken Pizza with Sweet Onions and Smoked Bacon",
          id: "664c8f193e7aa067e94e8482",
        },
        {
          publisher: "Jamie Oliver",
          image_url:
            "http://forkify-api.herokuapp.com/images/395_1_1350903959_lrgdd8a.jpg",
          title:
            "Egg, prosciutto, artichokes, olives, mozzarella, tomato sauce &amp; basil pizza topping",
          id: "664c8f193e7aa067e94e8937",
        },
        {
          publisher: "Two Peas and Their Pod",
          image_url:
            "http://forkify-api.herokuapp.com/images/minifruitpizzas52c00.jpg",
          title: "Mini Fruit Pizzas",
          id: "664c8f193e7aa067e94e880a",
        },
        {
          publisher: "A Spicy Perspective",
          image_url:
            "http://forkify-api.herokuapp.com/images/IMG_4351180x1804f4a.jpg",
          title: "Greek Pizza",
          id: "664c8f193e7aa067e94e8438",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/391236ba85.jpg",
          title: "Veggie Pizza",
          id: "664c8f193e7aa067e94e845a",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/7988559586.jpg",
          title: "Valentine Pizza",
          id: "664c8f193e7aa067e94e8454",
        },
        {
          publisher: "My Baking Addiction",
          image_url:
            "http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg",
          title: "Pizza Dip",
          id: "664c8f193e7aa067e94e840d",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/5100898cc5.jpg",
          title: "Pizza Casserole",
          id: "664c8f193e7aa067e94e836b",
        },
        {
          publisher: "BBC Good Food",
          image_url:
            "http://forkify-api.herokuapp.com/images/1649634_MEDIUMd3fc.jpg",
          title: "Pitta pizzas",
          id: "664c8f193e7aa067e94e838d",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/567c8fe.jpg",
          title: "Pizza Pinwheels",
          id: "664c8f193e7aa067e94e836e",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/104254d419.jpg",
          title: "Pesto Pizza",
          id: "664c8f193e7aa067e94e8355",
        },
        {
          publisher: "BBC Good Food",
          image_url:
            "http://forkify-api.herokuapp.com/images/679637_MEDIUM765c.jpg",
          title: "Puff pizza tart",
          id: "664c8f193e7aa067e94e8abd",
        },
        {
          publisher: "My Baking Addiction",
          image_url:
            "http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg",
          title: "Barbecue Chicken Pizza",
          id: "664c8f193e7aa067e94e89c9",
        },
        {
          publisher: "Epicurious",
          image_url: "http://forkify-api.herokuapp.com/images/51150600f4cb.jpg",
          title: "Veggi-Prosciutto Pizza",
          id: "664c8f193e7aa067e94e89af",
        },
        {
          publisher: "The Pioneer Woman",
          image_url: "http://forkify-api.herokuapp.com/images/pizza3464.jpg",
          title: "Pizza Potato Skins",
          id: "664c8f193e7aa067e94e88b9",
        },
        {
          publisher: "Closet Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
          title: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
          id: "664c8f193e7aa067e94e8706",
        },
        {
          publisher: "Bon Appetit",
          image_url:
            "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
          title: "No-Knead Pizza Dough",
          id: "664c8f193e7aa067e94e8783",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/4797377235_c07589b7d4_be953.jpg",
          title: "Mexican “Flatbread” Pizza",
          id: "664c8f193e7aa067e94e86af",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/grilledveggie79bd.jpg",
          title: "Grilled Veggie Pizza",
          id: "664c8f193e7aa067e94e867b",
        },
        {
          publisher: "The Pioneer Woman",
          image_url: "http://forkify-api.herokuapp.com/images/burger53be.jpg",
          title: "Supreme Pizza Burgers",
          id: "664c8f193e7aa067e94e863b",
        },
        {
          publisher: "The Pioneer Woman",
          image_url:
            "http://forkify-api.herokuapp.com/images/pizzaburgera5bd.jpg",
          title: "Pepperoni Pizza Burgers",
          id: "664c8f193e7aa067e94e863d",
        },
        {
          publisher: "Closet Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg",
          title: "Taco Quesadilla Pizzas",
          id: "664c8f193e7aa067e94e84de",
        },
        {
          publisher: "All Recipes",
          image_url: "http://forkify-api.herokuapp.com/images/580542e3ec.jpg",
          title: "Hot Pizza Dip",
          id: "664c8f193e7aa067e94e82f4",
        },
        {
          publisher: "Lisa's Kitchen",
          image_url:
            "http://forkify-api.herokuapp.com/images/hummus_pizza25f37.jpg",
          title: "Homemade Spicy Hummus Pizza",
          id: "664c8f193e7aa067e94e8ad1",
        },
        {
          publisher: "My Baking Addiction",
          image_url:
            "http://forkify-api.herokuapp.com/images/PizzaDough1of12edit5779.jpg",
          title: "Simple No Knead Pizza Dough",
          id: "664c8f193e7aa067e94e8a79",
        },
        {
          publisher: "Chow",
          image_url:
            "http://forkify-api.herokuapp.com/images/30624_RecipeImage_620x413_pepperoni_pizza_dip_4774d.jpg",
          title: "Pepperoni Pizza Dip Recipe",
          id: "664c8f193e7aa067e94e8a31",
        },
        {
          publisher: "What's Gaby Cooking",
          image_url:
            "http://forkify-api.herokuapp.com/images/PizzaHandPie4e08.jpg",
          title: "Pepperoni Pizza Hand Pies",
          id: "664c8f193e7aa067e94e8a13",
        },
        {
          publisher: "What's Gaby Cooking",
          image_url: "http://forkify-api.herokuapp.com/images/IMG_15866d21.jpg",
          title: "Grilled BBQ Chicken Pizza",
          id: "664c8f193e7aa067e94e8a12",
        },
      ],
    },
  },
];

// =====================================================
// RECIPE APP LOGIC
// Requires recipes.js (your Forkify data) to be loaded first.
// =====================================================

// ---------- 1. Your data (from recipes.js) ----------
// Your file is: const recipes = [ { status, results, data: { recipes: [...] } } ]
const allRecipes = recipes[0].data.recipes;

// ---------- 2. Settings ----------
// The search list only has title / image / publisher / id, so we fetch
// the rest (cooking time, servings, ingredients, source link) by id.
const API_BASES = [
  "https://forkify-api.jonas.io/api/v2/recipes",
  "https://forkify-api.herokuapp.com/api/v2/recipes",
];
const FALLBACK_IMAGE = "images/food-image.jpg";
const detailsCache = new Map();

// ---------- 3. Helpers ----------
const $ = (selector) => document.querySelector(selector);

// "Salami &amp; peppadew pizza" -> "Salami & peppadew pizza"
function decodeEntities(str = "") {
  return new DOMParser().parseFromString(str, "text/html").documentElement
    .textContent;
}

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// decode + escape, for safe use inside innerHTML
const clean = (str) => escapeHtml(decodeEntities(str));

// http -> https so images load on https pages
const toHttps = (url = "") => url.replace(/^http:\/\//i, "https://");

// 75 -> "1 hr 15 min", 30 -> "30 min"
function formatTime(minutes) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

// 4.8 out of 5 -> 96
const ratingPercent = (rating) => Math.round((rating / 5) * 100);

function formatIngredient({ quantity, unit, description }) {
  const qty = quantity ? String(Number(quantity.toFixed(2))) : "";
  return [qty, unit, description].filter(Boolean).join(" ");
}

// ---------- 4. Placeholder data ----------
// The API has NO rating, reviews, prep time, nutrition or chef's tips.
// These values are generated from the recipe id, so each recipe always
// gets the same numbers. Replace them with real data when you have it.
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function seededRandom(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const tipPool = [
  "Prep all your ingredients before you start cooking",
  "Let the dish rest a few minutes before serving",
  "Taste and adjust the seasoning at the end",
  "Preheat your oven fully for even cooking",
  "Use fresh ingredients whenever you can",
  "Leftovers keep well in the fridge for up to 2 days",
  "Don't overcrowd the pan - it helps everything brown properly",
];

function buildPlaceholders(id) {
  const rand = seededRandom(hashString(id));
  const between = (min, max) => min + Math.floor(rand() * (max - min + 1));

  const tips = [...tipPool].sort(() => rand() - 0.5).slice(0, 3);

  return {
    rating: 4 + between(0, 10) / 10, // 4.0 - 5.0
    reviews: between(40, 600),
    prepTime: between(2, 6) * 5, // 10 - 30 min
    nutrition: {
      calories: between(250, 700),
      protein: between(8, 40),
      carbs: between(15, 70),
      fat: between(8, 40),
      fiber: between(2, 10),
      sodium: between(300, 1100),
    },
    tips,
  };
}

// ---------- 5. Level (based on the real data) ----------
function getLevel(cookTime, ingredientCount) {
  if (cookTime <= 30 && ingredientCount <= 8) return "Easy";
  if (cookTime >= 60 || ingredientCount >= 14) return "Hard";
  return "Intermediate";
}

const levelClasses = {
  Easy: "level-easy",
  Intermediate: "level-intermediate",
  Hard: "level-hard",
};

const nutritionRows = [
  { key: "calories", label: "Calories", unit: " kcal", icon: "fa-fire", box: "fire-icon-box", cls: "calories" },
  { key: "protein", label: "Protein", unit: "g", icon: "fa-dumbbell", box: "protein-icon-box", cls: "protein" },
  { key: "carbs", label: "Carbohydrates", unit: "g", icon: "fa-wheat-awn", box: "carbohydrates-icon-box", cls: "carbohydrates" },
  { key: "fat", label: "Fat", unit: "g", icon: "fa-droplet", box: "fat-icon-box", cls: "fat" },
  { key: "fiber", label: "Fiber", unit: "g", icon: "fa-seedling", box: "fiber-icon-box", cls: "fiber" },
  { key: "sodium", label: "Sodium", unit: "mg", icon: "fa-cube", box: "cube-icon-box", cls: "sodium" },
];

// ---------- 6. Fetch details by id ----------
async function fetchDetails(id) {
  if (detailsCache.has(id)) return detailsCache.get(id);

  for (const base of API_BASES) {
    try {
      const res = await fetch(`${base}/${id}`);
      if (!res.ok) continue;
      const json = await res.json();
      const details = json.data.recipe;
      detailsCache.set(id, details);
      return details;
    } catch (err) {
      // try the next base URL
    }
  }
  return null; // everything failed
}

// ---------- 7. Build the full recipe object ----------
async function buildRecipe(base) {
  const details = await fetchDetails(base.id);
  const placeholders = buildPlaceholders(base.id);

  const cookTime = details?.cooking_time ?? 30;
  const servings = details?.servings ?? 4;
  const ingredients = details?.ingredients?.length
    ? details.ingredients.map(formatIngredient)
    : ["Ingredients couldn't be loaded. Check your internet connection."];

  return {
    id: base.id,
    name: base.title,
    publisher: base.publisher,
    image: toHttps(base.image_url),
    sourceUrl: details?.source_url ?? "",
    cookTime,
    servings,
    ingredients,
    level: getLevel(cookTime, details?.ingredients?.length ?? 0),
    ...placeholders,
  };
}

// ---------- 8. Render ----------
function renderRecipe(recipe) {
  // Image (falls back to your default image if it fails to load)
  const img = $(".food-image > img");
  img.alt = decodeEntities(recipe.name);
  img.onerror = () => {
    img.onerror = null;
    img.src = FALLBACK_IMAGE;
  };
  img.src = recipe.image;

  // Rating + reviews (hover shows the percentage out of 5 stars)
  $(".rate-reviews h6").textContent = recipe.rating.toFixed(1);
  $(".rate-reviews p").textContent = `(${recipe.reviews} reviews)`;
  $(".rate-reviews").title = `${ratingPercent(recipe.rating)}% of 5 stars`;

  // Prep / cook / servings
  $(".prep-time h6").textContent = formatTime(recipe.prepTime);
  $(".cook-time h6").textContent = formatTime(recipe.cookTime);
  $(".servings h6").textContent =
    recipe.servings === 1 ? "1 person" : `${recipe.servings} people`;

  // Level + publisher badges
  const levelBadge = $(".food-details-badges .badge-1");
  levelBadge.textContent = recipe.level;
  levelBadge.classList.remove("level-easy", "level-intermediate", "level-hard");
  levelBadge.classList.add(levelClasses[recipe.level]);
  $(".food-details-badges .badge-2").textContent = decodeEntities(
    recipe.publisher
  );

  // Title + description
  $(".food-names h3").textContent = decodeEntities(recipe.name);
  const description = $(".food-names > p");
  description.textContent = `A recipe from ${decodeEntities(recipe.publisher)}`;

  // Long cook time warning (> 45 min)
  const oldWarning = $("#cook-warning");
  if (oldWarning) oldWarning.remove();

  if (recipe.cookTime > 45) {
    const warning = document.createElement("p");
    warning.id = "cook-warning";
    warning.className =
      "text-white p-2 px-3 rounded-3 mb-0 mt-3 fs-6";
    warning.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-2 text-danger"></i><h5>Extended Preparation Time</h5><p class="text-danger">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>.`;
    description.after(warning);
  }

  // Ingredients
  $(".Ingredients-section").innerHTML = recipe.ingredients
    .map(
      (item, i) => `
        <div class="d-flex align-items-center">
          <span class="text-white py-2 px-3 mb-3 rounded-circle fw-bold">${i + 1}</span>
          <p class="ms-3 fs-5">${clean(item)}</p>
        </div>`
    )
    .join("");

  // Instructions: the API doesn't provide steps, so link to the original recipe
  const sourceLink = recipe.sourceUrl
    ? `<a href="${escapeHtml(recipe.sourceUrl)}" target="_blank" rel="noopener noreferrer"
          class="btn btn-danger rounded-3 mt-2">
          <i class="fa-solid fa-arrow-up-right-from-square me-2"></i>View full instructions
       </a>`
    : "";

  $(".Instructions-section").innerHTML = `
    <div class="d-flex flex-column align-items-start">
      <p class="fs-5">
        The step-by-step directions for this recipe are on
        <strong>${clean(recipe.publisher)}</strong>'s website.
      </p>
      ${sourceLink}
    </div>`;

  // Nutrition
  $(".Nutrition-info").innerHTML = nutritionRows
    .map(
      (row) => `
        <div class="${row.cls} p-2 d-flex justify-content-between align-items-center fs-5 rounded-3">
          <div class="d-flex align-items-center">
            <div class="${row.box} p-2 rounded-3">
              <i class="fa-solid ${row.icon}"></i>
            </div>
            <p class="ms-2 mb-0">${row.label}</p>
          </div>
          <h5 class="mb-0 fw-bold">${recipe.nutrition[row.key]}${row.unit}</h5>
        </div>`
    )
    .join("");

  // Chef's tips
  $(".Chef-tips-section").innerHTML = recipe.tips
    .map(
      (tip) => `
        <div class="Chef-tips-item d-flex align-items-center mb-3 p-4 rounded-3">
          <div><i class="fa-solid fa-circle-check fs-5"></i></div>
          <p class="ms-2 mb-1">${escapeHtml(tip)}</p>
        </div>`
    )
    .join("");

  // Back to the first tab and scroll to the top
  bootstrap.Tab.getOrCreateInstance($("#pills-Ingredients-tab")).show();
  $(".food-details").scrollTop = 0;
}

// ---------- 9. "Try Another Recipe" ----------
let currentIndex = -1;
const button = $(".recipe-button button");
const buttonHTML = button.innerHTML;

async function showRandomRecipe() {
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * allRecipes.length);
  } while (nextIndex === currentIndex && allRecipes.length > 1);
  currentIndex = nextIndex;

  // loading state
  button.disabled = true;
  button.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span>Loading...`;

  const recipe = await buildRecipe(allRecipes[currentIndex]);
  renderRecipe(recipe);

  button.disabled = false;
  button.innerHTML = buttonHTML;
}

button.addEventListener("click", showRandomRecipe);

// Show a recipe when the page loads
showRandomRecipe();