import Feed from '@components/Feed'
import Register from '@components/Register'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Best wings in the 253/206
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center size-medium">Don't say things like "Full Stop"</span>
      </h1>


      <h3>CTA button to make an account</h3>

    
  
    <Feed/>
    </section>

  )
}

export default Home;