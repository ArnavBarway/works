// src/components/Works.jsx
const Works = () => {
    return (
      <section className="py-20 min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">My Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
            {/* Repeat this block for each work */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                className="w-full h-64 object-cover" 
                src="https://i.ibb.co/L5Zds1f/kindnodes.png" 
                alt="Work Title" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2"><a href="https://kind-nodes.vercel.app">KindNodes</a></h3>
                <p className="text-gray-600">This is a dashboard for minecraft server hosting, with pages: Home, Pricing, Features, Support, About Us, Contact Us, SignUp and Login.</p>
              </div>
            </div>
             {/* Next Work */}
            <h1><a href="http://arnxv.is-a.dev">I'll add more works later</a></h1>
            {/* Add more works here */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Works;
  
