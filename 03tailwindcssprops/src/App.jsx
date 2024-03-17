import './App.css'

function App() {
  

  return (
    <>
      <h1 class='bg-slate-400 p-4 text-white rounded-xl'>Tailwind Css</h1>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/15288410/pexels-photo-15288410/free-photo-of-saint-james-church-in-bruges-belgium.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium text-white">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium text-white">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-white-100">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
<h2 className="bg-slate-400 text-white p-4 rounded-xl">First Time Muskan Hamal using TailwindCSS</h2>
    </>
  )
}

export default App
