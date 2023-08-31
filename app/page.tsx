import {CustomFilter, Hero,SearchBar} from "./components"

const page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discouver">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalogue</h1>
          <p>Explore the cars that you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default page