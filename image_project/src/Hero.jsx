import myimg from './assets/images.jpeg'
const Hero =()=>{
    return(
        <>
        <h1>from public folder</h1>
        <img src="flower.jpg" alt="" />
        <h1>from src folder</h1>
        <img src={myimg} alt="" height="200px" />

        <section id='hero'>
            <article>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <button>Submit</button>
            </article>
            <article>
                <img src="flower.jpg" alt="" />
            </article>
        </section>
        </>
    )
}
export default Hero