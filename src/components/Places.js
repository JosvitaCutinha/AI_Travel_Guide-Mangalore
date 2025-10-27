import React from 'react';
import './Places.css';

const Places = () => {
    const places = [
        {
            name: "Panambur Beach",
            category: "Beach",
            description: "A popular and well-maintained beach known for its beautiful sunsets, food stalls, and vibrant festivals.",
            imagePath: "https://s3.india.com/wp-content/uploads/2024/02/Panambur-Beach.jpg?impolicy=Medium_Widthonly&w=800&h=541"
        },
        {
            name: "Tannirbhavi Beach",
            category: "Beach",
            description: "A serene and less-crowded beach, perfect for a quiet walk amidst nature and casuarina trees.",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Tannirubhavi_beach_02.JPG/500px-Tannirubhavi_beach_02.JPG"
        },
        {
            name: "Kadri Manjunatha Temple",
            category: "Historic Site",
            description: "An ancient temple with a unique blend of Vijayanagara and Buddhist architectural influences.",
            imagePath: "https://s7ap1.scene7.com/is/image/incredibleindia/kadri-manjunatha-temple-mangalore-karnataka-2-attr-hero?qlt=82&ts=1726722417435"
        },
        {
            name: "Sultan Battery",
            category: "Historic Site",
            description: "A historic watchtower built by Tipu Sultan, offering scenic views of the Gurupura river.",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sultan_Battery_2163.JPG"
        },
        {
            name: "Saavira Kambada Basadi",
            category: "Historic Site",
            description: "Located in Moodabidri, this famous Jain temple is renowned for its 1000 intricately carved pillars.",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Thousand_Piller_Temple%2C_Moodbidri.jpg"
        },
        {
            name: "St. Aloysius Chapel",
            category: "Church",
            description: "A stunning chapel famous for its magnificent interior paintings that adorn the walls and ceilings.",
            imagePath: "https://media.assettype.com/outlooktraveller%2F2025-06-17%2Fwt2af1ob%2Fst-aloysius-chapel-3.jpg?rect=0%2C0%2C1200%2C675&w=1024&auto=format%2Ccompress&fit=max"
        },
        {
            name: "Rosario Cathedral",
            category: "Church",
            description: "One of the oldest churches in the region, featuring a beautiful dome said to be inspired by St. Peter's Basilica in Rome.",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Rosario_Cathedral.jpg/500px-Rosario_Cathedral.jpg"
        },
        {
            name: "Milagres Church",
            category: "Church",
            description: "A historic Catholic church built in 1680, known for its miraculous statue of Our Lady of Miracles and beautiful Gothic architecture.",
            imagePath: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/rayan_151022_Milagres1.jpg"
        },
        {
            name: "Infant Jesus Shrine",
            category: "Church",
            description: "A popular pilgrimage site dedicated to the Infant Jesus, known for its peaceful atmosphere and spiritual significance among devotees.",
            imagePath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a5/e5/b8/infant-jesus-shrine.jpg?w=600&h=400&s=1"
        },
        {
            name: "Pilikula Nisargadhama",
            category: "Nature Park",
            description: "A beautiful ecological park featuring a zoo, lake, botanical garden, and various recreational activities.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPNh6yoeb6LG5cE3ZDIZWkIlEwt_j_6yLww&s"
        },
        {
            name: "Sammilan Shetty's Butterfly Park",
            category: "Nature Park",
            description: "A unique butterfly conservatory showcasing various species of butterflies in their natural habitat.",
            imagePath: "https://media-cdn.tripadvisor.com/media/photo-s/14/ea/97/43/img20180922121917-largejpg.jpg"
        },
        {
            name: "Someshwara Temple",
            category: "Temple",
            description: "A historic temple dedicated to Lord Shiva, known for its beautiful architecture and spiritual significance.",
            imagePath: "https://mangaloreheritage.com/wp-content/uploads/2020/05/someshwara.jpg"
        },
        {
            name: "Bekal Fort",
            category: "Historic Site",
            description: "A magnificent 16th-century fort offering stunning views of the Arabian Sea and rich historical significance.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0nD1TZDCIDfVH4ghWoIn1hFfRZPBlvz1mw&s"
        },
        {
            name: "The Fiza Mall",
            category: "Shopping",
            description: "A modern shopping mall with various retail stores, restaurants, and entertainment options.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_Q9Nf5r-brNG9AhK6phhGTa6Kz9eRu2lYg&s"
        },
        {
            name: "Village Restaurant",
            category: "Restaurant",
            description: "Authentic Mangalorean cuisine served in a traditional village-style setting with local flavors.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-7eGQwkYE8IYHZ7Ng3klAWx5wYUAo313-Q&s"
        },
        {
            name: "Machali",
            category: "Restaurant",
            description: "Popular seafood restaurant known for its fresh catch and traditional Mangalorean fish preparations.",
            imagePath: "https://b.zmtcdn.com/data/pictures/2/3100302/eb08931cb77cd0ac365c58d115361a1f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        },
        {
            name: "Shetty Lunch Home",
            category: "Restaurant",
            description: "Famous local eatery serving authentic Mangalorean dishes, especially known for their fish curry and rice.",
            imagePath: "https://media-cdn.tripadvisor.com/media/photo-s/11/c8/29/b8/view-from-the-gate.jpg"
        },
        {
            name: "Ocean Pearl",
            category: "Restaurant",
            description: "Upscale dining restaurant offering a mix of local and international cuisine with excellent service.",
            imagePath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/72/a7/b4/ocean-pearl.jpg?w=600&h=400&s=1"
        },
        {
            name: "Naturals Ice Cream",
            category: "Ice Cream",
            description: "Popular ice cream chain known for fresh, natural flavors and premium quality ingredients without artificial additives.",
            imagePath: "https://aroundmangalore.com/wp-content/uploads/2016/08/Natural-Ice-Creams-Mannagudda-Mangalore-P11.jpg"
        },
        {
            name: "Ideals Ice Cream",
            category: "Ice Cream",
            description: "Local favorite ice cream parlor offering a wide variety of flavors and traditional ice cream treats.",
            imagePath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/97/f8/4c/ideal-s-cafe.jpg?w=1400&h=800&s=1"
        },
        {
            name: "Pabba's Ice Cream",
            category: "Ice Cream",
            description: "Well-known local ice cream spot famous for its creamy textures and unique flavor combinations.",
            imagePath: "https://b.zmtcdn.com/data/pictures/6/3100196/3b6cd7bafbe299545cd2b8b7c5873709.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            name: "Bonda Factory",
            category: "Restaurant",
            description: "Popular local eatery famous for its delicious bondas and traditional South Indian snacks served fresh and hot.",
            imagePath: "https://naturalicecreams.in/wp-content/uploads/2024/01/Bonda-Factory-blog-image-1.jpg"
        },
        {
            name: "Adyar Hill",
            category: "Viewpoint",
            description: "Scenic hilltop location offering panoramic views of Mangalore city and surrounding landscapes, perfect for sunset viewing.",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwi5HJZXTPM8iOg1LUBuGvUhVF5t33W6ph4w&s"
        },
        {
            name: "City Centre Mall",
            category: "Shopping",
            description: "Large shopping complex with multiple retail stores, food courts, entertainment zones, and modern amenities.",
            imagePath: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            name: "Hanuman Gundi Waterfalls",
            category: "Waterfall",
            description: "Beautiful natural waterfall surrounded by lush greenery, ideal for nature lovers and adventure enthusiasts.",
            imagePath: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/hanuman-gundi-waterfalls-sheerlu.jpg"
        },
        {
            name: "Devaragundi Falls",
            category: "Waterfall",
            description: "Spectacular waterfall cascading down rocky cliffs, offering a refreshing escape into nature's beauty.",
            imagePath: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/devaragundi-falls-doddakumeri.jpg"
        },
        {
            name: "Dondole Falls",
            category: "Waterfall",
            description: "Spectacular waterfall cascading down rocky cliffs, offering a refreshing escape into nature's beauty.",
            imagePath: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/dondole-falls-dharmastala-road.jpg"
        }
    ];

    return (
        <section id="places" className="places-section">
            <div className="places-container">
                <h2>Explore Mangalore</h2>
                <p className="places-subtitle">Discover the beautiful attractions this coastal city has to offer</p>

                <div className="places-grid">
                    {places.map((place, index) => (
                        <div key={index} className="place-card">
                            <div className="place-image">
                                <img src={place.imagePath} alt={place.name} />
                                <div className="place-category">{place.category}</div>
                            </div>
                            <div className="place-content">
                                <h3>{place.name}</h3>
                                <p>{place.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Places;