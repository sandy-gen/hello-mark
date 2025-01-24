import Image from "next/image";
import Navigation from "@/components/Navigation";

const features = [
  {
    title: "Advanced Training Tools",
    description: "Interactive poker training with real-time feedback and analysis.",
    icon: "🎓"
  },
  {
    title: "Live Tournaments",
    description: "Compete in daily tournaments with players worldwide.",
    icon: "🏆"
  },
  {
    title: "Strategy Guides",
    description: "Access comprehensive poker guides and hand analysis.",
    icon: "📚"
  },
  {
    title: "Community Support",
    description: "Join a thriving community of poker enthusiasts.",
    icon: "👥"
  }
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Professional Player",
    quote: "The training tools have completely transformed my game. I've seen a 40% increase in my win rate.",
    image: "/images/testimonials/player1.webp"
  },
  {
    name: "Sarah Miller",
    role: "Tournament Champion",
    quote: "The community and support here are unmatched. I went from amateur to winning my first tournament.",
    image: "/images/testimonials/player2.webp"
  },
  {
    name: "Mike Johnson",
    role: "Cash Game Specialist",
    quote: "Best poker platform I've used. The strategy guides are incredibly detailed and practical.",
    image: "/images/testimonials/player3.webp"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-indigo-900">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <Navigation />

        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.webp"
            alt="Poker Table Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-indigo-900/80 to-transparent"></div>
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-between container mx-auto px-4 z-10">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block px-4 py-1 bg-indigo-800/50 backdrop-blur-sm rounded-full text-yellow-400 font-medium mb-4 border border-indigo-700/50 hover:bg-indigo-800/70 transition-colors cursor-default animate-pulse-slow">
              Welcome to Poker Dice
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Master the Game of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300">
                Online Poker
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join our elite poker training platform and learn from the pros. Compete in tournaments with prizes up to{" "}
              <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors">$399,726</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg relative overflow-hidden">
                <span className="relative z-10">Start Training Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button className="group border-2 border-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105 relative overflow-hidden">
                <span className="relative z-10">View Courses</span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { value: "50K+", label: "Active Students" },
                { value: "100+", label: "Pro Courses" },
                { value: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover-trigger">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                  <div className="hover-target h-0.5 bg-yellow-400 mt-2 mx-auto w-0 group-hover:w-1/2 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in-delayed">
            <div className="relative w-[400px] h-[600px] hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-3xl"></div>
              <Image
                src="/images/app-mockup.svg"
                alt="Mobile App Mockup"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              {/* Floating Cards */}
              <div className="absolute -left-20 top-1/4 animate-float hover:scale-110 transition-transform">
                <Image
                  src="/images/cards/ace-spades.webp"
                  alt="Ace of Spades"
                  width={120}
                  height={160}
                  className="drop-shadow-2xl rounded-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="absolute -right-16 top-1/3 animate-float-delayed hover:scale-110 transition-transform">
                <Image
                  src="/images/cards/king-hearts.webp"
                  alt="King of Hearts"
                  width={120}
                  height={160}
                  className="drop-shadow-2xl rounded-xl transform rotate-12 hover:rotate-0 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="absolute -left-10 bottom-1/4 animate-float-delayed-more hover:scale-110 transition-transform">
                <Image
                  src="/images/chips.webp"
                  alt="Poker Chips"
                  width={100}
                  height={100}
                  className="drop-shadow-2xl rounded-full hover:rotate-180 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-indigo-950/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Poker Dice</h2>
            <p className="text-xl text-gray-300">Comprehensive training and tools to elevate your poker game</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-300">Hear from our community of poker champions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-yellow-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Master Poker?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players who have transformed their poker game with our comprehensive training program.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-12 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
}
