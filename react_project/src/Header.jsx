import React from "react";

function Header(){
    return(
        <>
         <div className="navbar">
            <div className="logo">
                <a href="#">Explore Essence</a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Login</a></li>    
            </ul>

            <div className='bar'>
                <a href="#"><i className="fa-solid fa-bars"></i></a>
            </div>
        </div>


        <div className="header1">
            <div className="hcontainer">
            <h1>Find next place to Trip</h1>
            <small>Discover New Place at Exclusive Deals</small>

            <form>
                <div className="headinp">
                  <label htmlFor="location">Location</label>
                  <input type="text" placeholder="Enter location" />
                </div>
                <div className="headinp">
                  <label htmlFor="checkin">Check In/Check Out</label>
                  <input type="datetime-local" placeholder="" />
                </div>

                <button><i className="fa-solid fa-magnifying-glass"></i>Search</button>
            </form>
            </div>
        </div>

        <section className="grid">
            <div className="card" >
                <img src="paris.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Paris</h5>
                  <p className="card-text">Paris, the enchanting 'City of Lights', captivates with its blend of history, art, and romance. Its cobblestone streets lead to iconic landmarks like the Eiffel Tower and Notre-Dame. By night, the Seine River reflects shimmering illuminations, echoing the city's luminous spirit. An epicenter of culture and elegance, Paris remains an eternal muse for visitors from around the globe.</p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="london.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">London</h5>
                  <p className="card-text">London, the heart of England, stands as a vibrant mosaic of history, culture, and innovation. From the regal Buckingham Palace and the echoing bells of Big Ben to the modern Shard piercing the skyline, the city embodies the nation's heritage. Cobblestone streets, iconic red buses, and the River Thames intertwining its fabric, London offers an immersive journey through centuries, celebrating the essence of English tradition while embracing the future.</p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="dubai.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Dubai</h5>
                  <p className="card-text">Dubai, a jewel in the UAE's crown, stands as a testament to ambition and innovation. Rising from desert sands, its skyline boasts architectural marvels like the Burj Khalifa, piercing the heavens. Luxury shopping malls coexist with historic souks, offering a blend of tradition and modernity. As a city that never stops evolving, Dubai dazzles with its opulence, technological feats, and a vision that ceaselessly pushes the boundaries of urban development.</p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="maldives.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Maldives</h5>
                  <p className="card-text">The Maldives, an archipelago of over a thousand islands, emerges from the Indian Ocean as a tropical haven. Each atoll, with its aquamarine waters and powdery white sands, paints a picture of paradise. Overwater bungalows offer uninterrupted vistas of endless horizons, while vibrant coral reefs beneath the surface teem with marine life. For those seeking solitude and luxury embraced by nature's beauty, the Maldives is the quintessential retreat.</p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="thiland.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Thailand</h5>
                  <p className="card-text">Bangkok, the pulsating heart of Thailand, is a blend of modernity and tradition. Skyscrapers tower over ancient temples, while the scent of sizzling street food fills bustling alleyways. By night, the city transforms, with markets illuminating streets and rooftop bars offering panoramic city views. From the sacred spaces of the Grand Palace to the frenzied energy of Khao San Road, Bangkok delivers a whirlwind of flavors, sights, and unending nights of revelry.</p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="bali.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Bali</h5>
                  <p className="card-text">Bali, nestled within the vast Indonesian archipelago, stands as an idyllic retreat for souls seeking tranquility and enchantment. Its landscapes, where verdant rice terraces merge with sun-drenched beaches, create a tapestry of natural beauty. Ancient temples, the gentle hum of Gamelan, and the intricate dance performances narrate tales of tradition and spirituality. From the bustling streets of Seminyak to the serene vibes of Ubud, Bali promises a rejuvenating escape into a tropical dream.</p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="mumbai.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Mumbai</h5>
                  <p className="card-text">Mumbai, the bustling heart of Maharashtra, is often hailed as the 'City of Dreams'. Its skyline, a blend of colonial architecture and modern high-rises, tells tales of aspiration and evolution. From the vibrant lanes of Colaba to the serene Marine Drive promenade, Mumbai pulsates with energy. As the home of Bollywood and a melting pot of cultures, it promises a tapestry of experiences, where dreams take flight amidst its chaotic yet charismatic embrace. </p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>

            <div className="card" >
                <img src="italy.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Italy</h5>
                  <p className="card-text">Amalfi, nestled along Italy's rugged southern coastline, is a tapestry of sunlit cliffs and azure seas. This historic maritime town, with its maze of narrow alleys, boasts centuries-old architecture and bustling piazzas. Lemon groves scent the air, while vibrant bougainvillea drapes over stone walls. With its serene beaches and iconic cathedral, Amalfi perfectly captures the charm and romance of the Mediterranean, offering a slice of Italian paradise to every visitor.

                  </p>
                  <a href="#" className="btn btn-primary">Book</a>
                </div>
            </div>
        </section>

        <footer>
            <article>
              <div>Explore Essence</div>
            </article>
            
            <article className="Follow">
              <div>Follow us :</div>
              <div><a href="https://www.Linkedin.com/twinklethakre"><i className="fa-brands fa-linkedin"></i></a>Linkedin</div>
                <div><a href="https://www.Facebook.com/tinklethakre"><i className="fa-brands fa-facebook"></i></a>Facebook</div>
                <div><a href="https://www.Whatsapp.com/6267002715"><i className="fa-brands fa-whatsapp"></i></a>Whatsapp</div>
                <div><a href="https://www.instagram.com/twinklethakre"><i className="fa-brands fa-instagram"></i></a>Instagram</div>
            </article>
            
            <article className="address">
              <div>Address : tulip 145 signature 360 Katara hills bhopal</div>
              <div><a href="#">Contact : 9213456789</a></div>
              <div><a href="#"> Email : twinklethakre1998@gmail.com</a></div>
            </article>
            </footer>
        
        </>
    )
}
export default Header