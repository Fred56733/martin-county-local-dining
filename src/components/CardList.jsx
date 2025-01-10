import React from "react";
import Card from "./Card";
import "./Card.css";

const CardList = () => {
    const restaurants = [
        {
            image: "src/assets/Palm & Ivy.png",
            name: "Palm & Ivy",
            cuisine: "American",
            price: "$50-100",
            location: "Hobe Sound",
            description: "Palm & Ivy offers a fresh take on American cuisine with chef-inspired dishes crafted from locally sourced ingredients. Enjoy a relaxed yet elegant dining atmosphere perfect for any occasion.",
            link: "https://palmandivyrestaurant.com/"
        },
        {
            image: "src/assets/Fredgies.png",
            name: "Fredgie's World Famous Hot Dogs",
            cuisine: "American, Fast Food",
            price: "$5-25",
            location: "Downtown Jensen",
            description: "Fredgie's serves the best Sabrett hot dogs, hamburgers, and Italian sausages with peppers and onions. Enjoy your meal with the best view of the Indian River.",
            link: "https://www.fredgiesworldfamoushotdogs.com/"
        },
        {
            image: "src/assets/Noodle World.png",
            name: "Noodle World",
            cuisine: "Thai, Sushi",
            price: "$15-30",
            location: "Downtown Stuart",
            description: "Authentic Thai and sushi dishes served in a cozy, family-friendly setting in Downtown Stuart. Experience flavorful classics crafted with fresh ingredients.",
            link: "https://noodleworldatstuart.com/"
        },
        {
            image: "src/assets/Shrimpers.png",
            name: "Shrimpers",
            cuisine: "American, Bar, Seafood",
            price: "$20-40",
            location: "Port Salerno",
            description: "A Port Salerno staple offering fresh seafood, waterfront views, and a relaxed atmosphere. Enjoy their famous shrimp dishes and tropical cocktails.",
            link: "https://shrimpersgrill.com/"
        },
        {
            image: "src/assets/Dolphin Bar.png",
            name: "Dolphin Bar",
            cuisine: "American, Seafood",
            price: "$20-40",
            location: "Jensen Beach",
            description: "Experience a Jensen Beach landmark offering a mix of American and seafood favorites. Dine on the deck overlooking the river for stunning views.",
            link: "https://dolphinbar.com/reservations/"
        },
        {
            image: "src/assets/Waterfront.png",
            name: "Waterfront",
            cuisine: "New American",
            price: "$30-60",
            location: "Downtown Stuart",
            description: "Modern New American cuisine served in an elegant setting in Downtown Stuart. Known for its exceptional service and fresh, locally sourced ingredients.",
            link: "https://thewaterfrontstuart.com/"
        },
        {
            image: "src/assets/The District.png",
            name: "The District",
            cuisine: "New American",
            price: "$30-50",
            location: "Port Salerno",
            description: "A refined dining experience in Port Salerno featuring inventive New American cuisine. Perfect for a sophisticated evening out.",
            link: "https://www.districttableandbar.com/"
        },
        {
            image: "src/assets/2 Georges.png",
            name: "Two Georges",
            cuisine: "American, Seafood",
            price: "$20-40",
            location: "Port Salerno",
            description: "A Port Salerno waterfront icon offering fresh seafood, tropical drinks, and a laid-back atmosphere. Perfect for lunch or dinner by the water.",
            link: "https://www.twogeorgesrestaurant.com/port-salerno"
        },
        {
            image: "src/assets/Berry Fresh.png",
            name: "Berry Fresh",
            cuisine: "Cafe",
            price: "$15-30",
            location: "Stuart",
            description: "A cozy cafe in Stuart serving up fresh, locally sourced breakfast, brunch, and lunch favorites. Don't miss their signature pancakes and omelets!",
            link: "https://www.berryfresh.cafe/?utm_source=google&utm_medium=local&utm_campaign=gmb"
        },
        {
            image: "src/assets/Black Marlin.png",
            name: "Black Marlin",
            cuisine: "American, Seafood",
            price: "$30-50",
            location: "Downtown Stuart",
            description: "A Downtown Stuart dining favorite offering American and seafood classics. Enjoy a mix of upscale dishes and casual charm.",
            link: "https://theblackmarlin.net/"
        },
        {
            image: "src/assets/Hudsons.png",
            name: "Hudsons on the River",
            cuisine: "Seafood",
            price: "$30-55",
            location: "Downtown Stuart",
            description: "A scenic Downtown Stuart destination serving fresh seafood and tropical drinks. Relax with stunning river views and vibrant ambiance.",
            link: "https://www.hudsonontheriver.com/"
        },
        {
            image: "src/assets/Spritz.png",
            name: "Spritz",
            cuisine: "Americans, Bar",
            price: "20-50",
            location: "Downtown Stuart",
            description: "A modern bistro and bar in Downtown Stuart featuring creative American dishes and craft cocktails. Perfect for all occasions.",
            link: "https://www.spritzcitybistro.com/"
        },
        {
            image: "src/assets/Tijuana Flats.png",
            name: "Tijuana Flats",
            cuisine: "Tex-Mex",
            price: "10-20",
            location: "Stuart",
            description: "A lively spot in Stuart serving bold Tex-Mex flavors, including tacos, burritos, and signature hot sauces. Casual dining with big flavor.",
            link: "https://www.tijuanaflats.com/locations/stuart"
        },
        {
            image: "src/assets/Fujiyama.png",
            name: "Fujiyama",
            cuisine: "Japanese",
            price: "20-30",
            location: "Stuart",
            description: "Experience authentic Japanese cuisine in Stuart, featuring sushi, hibachi, and traditional dishes in a welcoming atmosphere.",
            link: "https://www.tijuanaflats.com/locations/stuart"
        },
    ];
    
    return (
        <div className="card-list">
            {restaurants.map((restaurant, index) => (
                <Card 
                    key={index}
                    image={restaurant.image}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    price={restaurant.price}
                    location={restaurant.location}
                    description={restaurant.description}
                    link={restaurant.link}
                />
            ))}
        </div>
    );
};

export default CardList;