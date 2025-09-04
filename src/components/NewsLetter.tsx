import '../App.css'
export const Newsletter = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto m-3 py-12 px-6 rounded-2xl text-center bg-[#F45600]">
        <h2 className="text-white text-4xl md:text-4xl  mb-4 urbanist-700">Subscribe our fitness tips</h2>
        <p className="text-white/90  text-lg mb-8 poppins-medium">
          Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.
        </p>

        {/* Email Subscription Form */}
        <div className="flex flex-col sm:flex-row gap-4 bg-white text-black  max-w-md mx-auto p-3 poppins-medium rounded-lg">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-900"
          />
          <button className="bg-black text-white px-8 py-3 rounded-lg poppins-medium hover:bg-gray-900 transition whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
