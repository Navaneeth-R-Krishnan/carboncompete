import { useState } from 'react';
import { 
  Menu,
  ChevronDown,
  Leaf,
  BarChart2,
  Building2,
  Phone,
  LineChart,
  Lightbulb,
  Rocket,
  Target,
  PieChart,
  TrendingUp,
  Shield,
  Award,
  Zap,
  Settings,
  Factory,
  Bot
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const features = [
    {
      title: "Carbon Score",
      description: "Real-time assessment of your organization's carbon footprint with AI-powered accuracy",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Carbon Canvas",
      description: "Visual dashboard to map and track your emission reduction journey",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: "Carbon Confidence",
      description: "Industry-leading verification system ensuring data reliability",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Performance Metrics",
      description: "Comprehensive analytics to measure and optimize your sustainability efforts",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Certification Ready",
      description: "Automated reporting aligned with global sustainability standards",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Smart Automation",
      description: "AI-driven suggestions for carbon reduction opportunities",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const products = [
    {
      title: "Carbon Tracking",
      description: "Real-time monitoring and reporting of carbon emissions",
      icon: <BarChart2 className="w-8 h-8 text-green-500" />
    },
    {
      title: "Sustainability Solutions",
      description: "Comprehensive tools for environmental management",
      icon: <Leaf className="w-8 h-8 text-green-500" />
    },
    {
      title: "Enterprise Dashboard",
      description: "Centralized platform for carbon management",
      icon: <Building2 className="w-8 h-8 text-green-500" />
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Analyze",
      description: "We conduct a comprehensive analysis of your carbon footprint across all operations, using advanced AI and machine learning to identify key emission sources.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Advise",
      description: "Our experts provide tailored recommendations and strategies to reduce emissions, backed by data-driven insights and industry best practices.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Adapt",
      description: "Implement sustainable changes with our support, tracking progress and adjusting strategies in real-time for optimal results.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const missionFeatures = [
    {
      title: "Industry Challenge",
      description: "Addressing complex carbon tracking needs across diverse industrial sectors",
      icon: <Settings className="w-6 h-6" />,
      color: "from-orange-400 to-pink-500"
    },
    {
      title: "Greenwashing",
      description: "Eliminating false environmental claims with verified data and transparency",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Lack of Scope 3 Accounting",
      description: "Comprehensive tracking of indirect emissions across the value chain",
      icon: <Factory className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Lack Of Automation",
      description: "Streamlining data collection and analysis with AI-powered solutions",
      icon: <Bot className="w-6 h-6" />,
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Leaf className="w-8 h-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">CarbonCompete</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <div className="relative">
                  <button
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                    className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                  >
                    Solutions
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {isSolutionsOpen && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Enterprise</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">SMB</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Startups</a>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Resources</a>
                <a href="#" className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Login and Demo Buttons */}
            <div className="hidden md:flex items-center">
              <button className="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">Login</button>
              <button className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-green-400 hover:bg-green-500 transition-colors">
                Book a Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500">Solutions</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500">Resources</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Reduce your</span>
                    <span className="block text-green-500">carbon footprint</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Join the revolution in corporate sustainability. Monitor, reduce, and offset your carbon emissions with our comprehensive platform.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10">
                        Sign up free →
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                        Request demo
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Sustainable future"
            />
          </div>
        </div>
      </div>

      {/* Recognition Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
            Globally Recognised
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center items-center">
              <img
                className="h-12 grayscale hover:grayscale-0 transition-all"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png"
                alt="Microsoft"
              />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img
                className="h-12 grayscale hover:grayscale-0 transition-all"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png"
                alt="Google"
              />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img
                className="h-12 grayscale hover:grayscale-0 transition-all"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png"
                alt="IBM"
              />
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <img
                className="h-12 grayscale hover:grayscale-0 transition-all"
                src="https://commons.wikimedia.org/wiki/File:Salesforce.com_logo.svg"
                alt="Salesforce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 bg-gray-900">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Our Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-white sm:text-4xl">
              Comprehensive Tools for Carbon Management
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-500/10 rounded-xl transform transition-transform group-hover:scale-105"></div>
                <div className="relative p-8 rounded-xl backdrop-blur-lg border border-white/10 bg-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mb-5">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Carbon Management
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-6">
                    <div className="flex items-center">
                      {product.icon}
                      <h3 className="ml-3 text-lg font-medium text-gray-900">{product.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">{product.description}</p>
                    <div className="mt-4">
                      <a href="#" className="text-sm font-medium text-green-500 hover:text-green-600">
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Features Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Text */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold mb-2">Our <span className="text-green-500">Mission</span></h2>
              <p className="text-gray-600 mb-6">
                CarbonCompete has developed an innovative software platform, Carbon Intel, to progress an integrated solution for sustainability management. Our advanced capabilities allow monitoring, reporting and verification while producing results ahead of time capabilities. Our solution integrates with existing systems and workflows while allowing ecosystem players to:
              </p>
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Smart City"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent"></div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {missionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-xl transform transition-all duration-300 group-hover:opacity-20`}></div>
                  <div className="relative p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UN Goals Section */}
          <div className="mt-20">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-12">
              Contribution to the United Nation Goals On Sustainable Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[13, 12, 9, 7].map((goal, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={`https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-${goal}.jpg`}
                    alt={`UN Sustainable Development Goal ${goal}`}
                    className="w-24 h-24 mx-auto mb-4"
                  />
                  <p className="text-sm text-gray-600 text-center">
                    Goal {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center">
                <Leaf className="w-8 h-8 text-green-400" />
                <span className="ml-2 text-xl font-bold text-white">CarbonCompete</span>
              </div>
              <p className="mt-2 text-sm text-gray-300">
                Making carbon neutrality achievable for businesses worldwide.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Enterprise</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">SMB</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Startups</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">support@carboncompete.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 CarbonCompete. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;