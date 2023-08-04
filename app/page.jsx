import Feed from '@components/Feed'
import Register from '@components/Register'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Best wings in the 253/206
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center size-medium">Full stop</span>
      </h1>
      <p className="desc text-center">These wings are really good. You must trust me on this one.</p>
    
    <Register/>

    <Feed/>
    </section>

  )
}

export default Home;