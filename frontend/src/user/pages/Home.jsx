import Header from '../components/Header'
import Footer from '../../components/Footer'

function Home() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section id='home' className='min-h-[80vh] bg-green-50 px-6 py-16 flex items-center'>
                <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
                    <div>
                        <p className='text-green-700 font-semibold mb-4'>
                            YOUR HEALTH, YOUR WAY
                        </p>

                        <h2 className='text-4xl sm:text-5xl font-bold text-gray-800 leading-tight'>
                            Eat Better.
                            <span className='text-green-700'> Live Healthier.</span>
                        </h2>

                        <p className='mt-6 text-gray-600 text-lg leading-relaxed'>
                            Make healthy eating easier with personalized meal
                            planning, nutrition tracking, and simple daily goals.
                        </p>

                        <div className='mt-8 flex flex-wrap gap-4'>
                            <button className='bg-green-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-green-700 transition duration-300 cursor-pointer'>
                                Get Started
                            </button>

                            <a href='#features' className='border border-green-700 text-green-700 px-7 py-3 rounded-xl font-semibold hover:bg-green-100 transition duration-300'>
                                Explore Features
                            </a>
                        </div>

                        <p className='mt-5 text-sm text-gray-500'>
                            Simple planning. Smarter food choices.
                        </p>
                    </div>

                    {/* Hero Visual */}
                    <div className='bg-white rounded-3xl p-8 shadow-lg border border-green-100'>
                        <div className='bg-green-100 rounded-2xl p-8 text-center'>
                            <div className='text-7xl mb-4'>🥗</div>
                            <h3 className='text-2xl font-bold text-green-800'>
                                Your Daily Nutrition
                            </h3>
                            <p className='mt-2 text-gray-600'>
                                Build healthy habits, one meal at a time.
                            </p>
                        </div>

                        <div className='grid grid-cols-3 gap-3 mt-6 text-center'>
                            <div className='bg-green-50 p-3 rounded-xl'>
                                <p className='text-xl'>🍎</p>
                                <p className='text-sm font-medium text-gray-700'>
                                    Balanced
                                </p>
                            </div>

                            <div className='bg-green-50 p-3 rounded-xl'>
                                <p className='text-xl'>🥑</p>
                                <p className='text-sm font-medium text-gray-700'>
                                    Fresh
                                </p>
                            </div>

                            <div className='bg-green-50 p-3 rounded-xl'>
                                <p className='text-xl'>💧</p>
                                <p className='text-sm font-medium text-gray-700'>
                                    Hydrated
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id='features' className='px-6 py-20 bg-white'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center max-w-2xl mx-auto'>
                        <p className='text-green-700 font-semibold'>
                            WHAT NUTRIPLAN OFFERS
                        </p>

                        <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-gray-800'>
                            Everything You Need to Eat Well
                        </h2>

                        <p className='mt-4 text-gray-600 leading-relaxed'>
                            Simple tools to help you organize meals and build
                            healthier everyday habits.
                        </p>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                        <div className='p-7 rounded-2xl border border-green-100 hover:shadow-lg transition duration-300'>
                            <div className='text-4xl'>🍽️</div>
                            <h3 className='mt-5 text-xl font-bold text-gray-800'>
                                Meal Planning
                            </h3>
                            <p className='mt-3 text-gray-600 leading-relaxed'>
                                Organize your daily meals and make planning
                                your food easier.
                            </p>
                        </div>

                        <div className='p-7 rounded-2xl border border-green-100 hover:shadow-lg transition duration-300'>
                            <div className='text-4xl'>📊</div>
                            <h3 className='mt-5 text-xl font-bold text-gray-800'>
                                Nutrition Tracking
                            </h3>
                            <p className='mt-3 text-gray-600 leading-relaxed'>
                                Keep track of your food choices and understand
                                your nutrition habits.
                            </p>
                        </div>

                        <div className='p-7 rounded-2xl border border-green-100 hover:shadow-lg transition duration-300'>
                            <div className='text-4xl'>🎯</div>
                            <h3 className='mt-5 text-xl font-bold text-gray-800'>
                                Personal Goals
                            </h3>
                            <p className='mt-3 text-gray-600 leading-relaxed'>
                                Set practical nutrition goals that fit your
                                everyday routine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id='how-it-works' className='bg-green-50 px-6 py-20'>
                <div className='max-w-6xl mx-auto'>
                    <div className='text-center'>
                        <p className='text-green-700 font-semibold'>
                            GET STARTED IN THREE STEPS
                        </p>

                        <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-gray-800'>
                            A Simpler Way to Eat Well
                        </h2>
                    </div>

                    <div className='grid md:grid-cols-3 gap-8 mt-12'>
                        <div className='bg-white p-7 rounded-2xl text-center shadow-sm'>
                            <div className='mx-auto w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold'>
                                1
                            </div>
                            <h3 className='mt-5 text-xl font-bold text-gray-800'>
                                Set Your Goals
                            </h3>
                            <p className='mt-3 text-gray-600 leading-relaxed'>
                                Start with your personal preferences and
                                nutrition goals.
                            </p>
                        </div>

                        <div className='bg-white p-7 rounded-2xl text-center shadow-sm'>
                            <div className='mx-auto w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold'>
                                2
                            </div>
                            <h3 className='mt-5 text-xl font-bold text-gray-800'>
                                Plan Your Meals
                            </h3>
                            <p className='mt-3 text-gray-600 leading-relaxed'>
                                Organize meals around your routine and food
                                preferences.
                            </p>
                        </div>

                        <div className='bg-white p-7 rounded-2xl text-center shadow-sm'>
                            <div className='mx-auto w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold'>
                                3
                            </div>
                            <h3 className='mt-5 text-xl font-bold text-gray-800'>
                                Track Your Progress
                            </h3>
                            <p className='mt-3 text-gray-600 leading-relaxed'>
                                Review your habits and work toward your goals
                                over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className='px-6 py-20 bg-white'>
                <div className='max-w-4xl mx-auto bg-green-700 rounded-3xl p-10 sm:p-14 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-white'>
                        Ready to Build Healthier Habits?
                    </h2>

                    <p className='mt-4 text-green-100 leading-relaxed'>
                        Start planning your meals and take a more organized
                        approach to everyday nutrition.
                    </p>

                    <button className='mt-8 bg-white text-green-800 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition duration-300 cursor-pointer'>
                        Get Started
                    </button>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home