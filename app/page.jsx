import Feed from '@components/Feed'
import Register from '@components/Register'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center text-red-600">Best wings in the 253/206
      <br className="max-md:hidden" />

      </h1>

    <Feed/>
    </section>

  )
}

export default Home;