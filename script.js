document.getElementById('recommenderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const foodType = document.getElementById('foodType').value;
    const disease = document.getElementById('disease').value;
    const allergies = document.getElementById('allergies').value;
    const region = document.getElementById('region').value;

    // Debugging console log
    console.log(`Age: ${age}, Gender: ${gender}, Weight: ${weight}, Height: ${height}, Food Type: ${foodType}, Disease: ${disease}, Allergies: ${allergies}, Region: ${region}`);

    // Get diet recommendation
    let recommendation = getDietRecommendation(region, foodType);
    let workoutRecommendation = getWorkoutRecommendation(region, disease, allergies);

    if (!recommendation) {
        document.getElementById('recommendation').innerHTML = "Sorry, no recommendation available for this combination.";
        document.getElementById('recommendation').style.display = 'block';
        return;
    }

    // Update the recommendation box content with both diet and workout
    document.getElementById('recommendation').innerHTML = `
        <h2>Your Personalized Diet Plan</h2>
        <p><strong>Breakfast (7:00 AM - 8:00 AM):</strong> ${recommendation.breakfast}</p>
        <p><strong>Mid-Morning (10:00 AM - 11:00 AM):</strong> ${recommendation.midMorning}</p>
        <p><strong>Lunch (12:30 PM - 1:30 PM):</strong> ${recommendation.lunch}</p>
        <p><strong>Evening Snack (4:00 PM - 5:00 PM):</strong> ${recommendation.evening}</p>
        <p><strong>Dinner (7:30 PM - 8:30 PM):</strong> ${recommendation.dinner}</p>
        <h2>Your Personalized Workout Plan</h2>
        <p><strong>Workout Recommendations:</strong> ${workoutRecommendation}</p>
    `;
    document.getElementById('recommendation').style.display = 'block';
});

function getDietRecommendation(region, foodType) {
    let breakfast = '';
    let midMorning = '';
    let lunch = '';
    let evening = '';
    let dinner = '';

    if (region === 'indian') {
        if (foodType === 'veg') {
            breakfast = 'Vegetable poha or upma with fresh juice.';
            midMorning = 'Fruit salad or buttermilk.';
            lunch = 'Dal, roti, sabzi, and curd.';
            evening = 'Nuts or a bowl of sprouts.';
            dinner = 'Vegetable pulao or roti with paneer curry.';
        } else {
            breakfast = 'Eggs with whole grain toast and fresh juice.';
            midMorning = 'Fruit smoothie or lassi.';
            lunch = 'Chicken curry with rice and roti.';
            evening = 'Boiled eggs or grilled chicken salad.';
            dinner = 'Grilled fish or chicken with vegetables.';
        }
    } else if (region === 'chinese') {
        if (foodType === 'veg') {
            breakfast = 'Steamed buns with soy milk.';
            midMorning = 'Fresh fruit or green tea.';
            lunch = 'Vegetable stir-fry with tofu and rice.';
            evening = 'Edamame or a small bowl of miso soup.';
            dinner = 'Vegetable fried rice or noodles with tofu.';
        } else {
            breakfast = 'Congee with boiled eggs and pickled vegetables.';
            midMorning = 'Green tea or a fruit salad.';
            lunch = 'Chicken stir-fry with rice or noodles.';
            evening = 'Prawn crackers or grilled fish skewers.';
            dinner = 'Beef or chicken stir-fry with vegetables and rice.';
        }
    } else if (region === 'brazilian') {
        if (foodType === 'veg') {
            breakfast = 'Acai bowl with granola and fruit.';
            midMorning = 'Fresh coconut water or tropical fruits.';
            lunch = 'Feijoada (black bean stew) with rice and vegetables.';
            evening = 'Cheese bread (Pão de Queijo) or a smoothie.';
            dinner = 'Vegetable stew with rice and beans.';
        } else {
            breakfast = 'Scrambled eggs with ham and pão de queijo.';
            midMorning = 'Fresh tropical fruit or coconut water.';
            lunch = 'Feijoada with pork and rice.';
            evening = 'Grilled meat skewers or fried shrimp.';
            dinner = 'Grilled beef with rice, beans, and salad.';
        }
    } else if (region === 'mexican') {
        if (foodType === 'veg') {
            breakfast = 'Chilaquiles with salsa and refried beans.';
            midMorning = 'Fresh fruit with a sprinkle of chili powder.';
            lunch = 'Vegetarian tacos with beans and salsa.';
            evening = 'Guacamole with tortilla chips or a vegetable quesadilla.';
            dinner = 'Vegetable enchiladas with rice and beans.';
        } else {
            breakfast = 'Huevos rancheros with chorizo and salsa.';
            midMorning = 'Fruit salad or tamales with meat.';
            lunch = 'Chicken or beef tacos with salsa and guacamole.';
            evening = 'Grilled chicken or shrimp quesadilla.';
            dinner = 'Beef fajitas with rice, beans, and tortillas.';
        }
    } else if (region === 'argentinian') {
        if (foodType === 'veg') {
            breakfast = 'Medialunas (sweet croissants) with coffee.';
            midMorning = 'Fresh fruit or a small salad.';
            lunch = 'Vegetarian empanadas with salad.';
            evening = 'Cheese platter or grilled vegetables.';
            dinner = 'Vegetable stew or pasta with a light sauce.';
        } else {
            breakfast = 'Scrambled eggs with medialunas and coffee.';
            midMorning = 'Fresh fruit or yogurt.';
            lunch = 'Beef empanadas with salad.';
            evening = 'Grilled meat skewers or cheese with crackers.';
            dinner = 'Grilled steak with potatoes and salad.';
        }
    } else if (region === 'middleEastern') {
        if (foodType === 'veg') {
            breakfast = 'Hummus and pita bread with fresh vegetables.';
            midMorning = 'Fresh fruit or a handful of nuts.';
            lunch = 'Falafel with tabbouleh and hummus.';
            evening = 'Pita chips with baba ganoush or labneh.';
            dinner = 'Vegetarian kebabs with couscous and salad.';
        } else {
            breakfast = 'Shakshuka with pita bread and olives.';
            midMorning = 'Fresh fruit or nuts.';
            lunch = 'Grilled chicken shawarma with tabbouleh and hummus.';
            evening = 'Lamb kebabs or grilled chicken skewers.';
            dinner = 'Lamb stew with couscous and vegetables.';
        }
    } else if (region === 'moroccan') {
        if (foodType === 'veg') {
            breakfast = 'Moroccan pancakes with honey and tea.';
            midMorning = 'Fresh fruit or almonds.';
            lunch = 'Vegetable tagine with couscous.';
            evening = 'Olives with Moroccan flatbread.';
            dinner = 'Vegetable couscous or lentil soup.';
        } else {
            breakfast = 'Eggs with Moroccan pancakes and honey.';
            midMorning = 'Almonds or fresh fruit.';
            lunch = 'Chicken tagine with couscous and vegetables.';
            evening = 'Lamb skewers or Moroccan sausages (Merguez).';
            dinner = 'Lamb tagine with couscous and vegetables.';
        }
    } else if (region === 'west_african') {
        if (foodType === 'veg') {
            breakfast = 'Fried plantains with beans and vegetables.';
            midMorning = 'Fresh fruit or a smoothie.';
            lunch = 'Jollof rice with beans and fried plantains.';
            evening = 'Spicy roasted peanuts or akara (bean cakes).';
            dinner = 'Vegetable stew with rice or fufu.';
        } else {
            breakfast = 'Eggs with fried plantains and meat.';
            midMorning = 'Fruit smoothie or roasted peanuts.';
            lunch = 'Jollof rice with grilled chicken or beef.';
            evening = 'Grilled meat or fish skewers.';
            dinner = 'Spicy chicken stew with rice or fufu.';
        }
    } else if (region === 'south_african') {
        if (foodType === 'veg') {
            breakfast = 'Pap (porridge) with fresh fruit.';
            midMorning = 'Rooibos tea with a light snack.';
            lunch = 'Vegetarian bobotie with rice and salad.';
            evening = 'Biltong (vegan) or dried fruit snacks.';
            dinner = 'Vegetable curry with rice or samp and beans.';
        } else {
            breakfast = 'Boerewors sausage with pap and eggs.';
            midMorning = 'Biltong or dried meat.';
            lunch = 'Bobotie with rice and salad.';
            evening = 'Grilled steak or lamb chops.';
            dinner = 'Braai (BBQ) meat with vegetables and potatoes.';
        }
    } else if (region === 'french') {
        if (foodType === 'veg') {
            breakfast = 'Croissant with fruit jam and coffee.';
            midMorning = 'Fresh fruit or cheese.';
            lunch = 'Vegetarian quiche with salad.';
            evening = 'Cheese platter or baguette with butter.';
            dinner = 'Ratatouille with French bread.';
        } else {
            breakfast = 'Omelette with ham and croissant.';
            midMorning = 'Cheese or charcuterie.';
            lunch = 'Chicken with ratatouille and French fries.';
            evening = 'Baguette with pâté or grilled meat.';
            dinner = 'Beef bourguignon with mashed potatoes.';
        }
    }
    return { breakfast, midMorning, lunch, evening, dinner };
}

function getWorkoutRecommendation(region, disease, allergies) {
    let workout = '';

    // Disease-specific workout recommendations
    if (disease === 'asthma') {
        workout = 'Light exercises: Walking, yoga, swimming (low-intensity). Avoid running or intense cardio.';
    } else if (disease === 'diabetes') {
        workout = 'Moderate exercises: Brisk walking, cycling, strength training. Avoid high-intensity without proper monitoring.';
    } else if (disease === 'arthritis') {
        workout = 'Joint-friendly exercises: Water aerobics, cycling, yoga. Avoid high-impact exercises like running.';
    } else if (disease === 'heart disease') {
        workout = 'Heart-healthy exercises: Walking, low-intensity cycling, and stretching. Avoid high-intensity cardio.';
    } else {
        // Default workout based on region if no disease condition is provided
        switch (region) {
            case 'indian':
                workout = 'Yoga, walking, light jogging, and bodyweight exercises. Avoid high-impact exercises if necessary.';
                break;
            case 'chinese':
                workout = 'Tai Chi, walking, light martial arts (such as wushu), and light cardio.';
                break;
            case 'brazilian':
                workout = 'Capoeira, beach running, bodyweight exercises.';
                break;
            case 'mexican':
                workout = 'Boxing, jogging, and core exercises (light to moderate).';
                break;
            case 'argentinian':
                workout = 'Football (soccer) drills, walking, and light jogging.';
                break;
            case 'middleEastern':
                workout = 'Walking, light calisthenics, and yoga for flexibility.';
                break;
            case 'moroccan':
                workout = 'Walking, light jogging, and stretching exercises.';
                break;
            case 'west_african':
                workout = 'Walking, bodyweight exercises, and light jogging.';
                break;
            case 'south_african':
                workout = 'Walking, cycling, and bodyweight exercises.';
                break;
            case 'french':
                workout = 'Pilates, brisk walking, and light cardio.';
                break;
            // Add more regions here...
            default:
                workout = 'Light cardio, walking, and yoga.';
                break;
        }
    }

    // Modify workout based on allergies
    if (allergies.includes('dust')) {
        workout += ' Avoid outdoor activities on dusty days. Opt for indoor exercises like yoga or swimming in clean pools.';
    }
    if (allergies.includes('pollen')) {
        workout += ' Stick to indoor workouts, like yoga or stationary cycling. Avoid outdoor runs.';
    }
    return workout;
}