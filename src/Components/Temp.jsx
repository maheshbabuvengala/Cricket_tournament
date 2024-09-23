import React, { useState } from "react";
import { FiZap, FiGlobe, FiUsers, FiBarChart2 } from "react-icons/fi"; // Importing icons from react-icons

// Custom Button component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Custom Input component
const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
    {...props}
  />
);

// Custom Label component
const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium ${className}`}>
    {children}
  </label>
);

// Custom Tabs components
const Tabs = ({ children, defaultValue, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabsList = ({ children }) => <div className="flex mb-4">{children}</div>;

const TabsTrigger = ({ children, value, activeTab, setActiveTab }) => (
  <button
    className={`flex-1 py-2 text-center ${
      activeTab === value
        ? "bg-yellow-400 text-black"
        : "bg-gray-700 text-white"
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab }) =>
  activeTab === value ? children : null;

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signup"); // Default to signup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === "signup") {
      // Simulate sign-up logic
      alert(`User signed up with email: ${formData.email}`);
      setActiveTab("signin"); // Navigate to Sign In after sign-up
    } else if (activeTab === "signin") {
      // Simulate sign-in logic
      alert(`User signed in with email: ${formData.email}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <Tabs defaultValue="signup" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="signup"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                Sign Up
              </TabsTrigger>
              <TabsTrigger
                value="signin"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                Sign In
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signup" activeTab={activeTab}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-[#1a1f2e] border-gray-700 text-white"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-[#1a1f2e] border-gray-700 text-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="bg-[#1a1f2e] border-gray-700 text-white"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Sign Up
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signin" activeTab={activeTab}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="signin-email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-[#1a1f2e] border-gray-700 text-white"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="signin-password"
                    type="password"
                    required
                    className="bg-[#1a1f2e] border-gray-700 text-white"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#1a1f2e] p-4 rounded-lg text-center">
              <FiGlobe className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Global Tournaments</h3>
              <p className="text-sm text-gray-400">
                Compete with players worldwide
              </p>
            </div>
            <div className="bg-[#1a1f2e] p-4 rounded-lg text-center">
              <FiUsers className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Virtual Teams</h3>
              <p className="text-sm text-gray-400">
                Form alliances across borders
              </p>
            </div>
            <div className="bg-[#1a1f2e] p-4 rounded-lg text-center">
              <FiBarChart2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">AI Analytics</h3>
              <p className="text-sm text-gray-400">
                Get insights from advanced AI
              </p>
            </div>
            <div className="bg-[#1a1f2e] p-4 rounded-lg text-center">
              <FiZap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Instant Matches</h3>
              <p className="text-sm text-gray-400">Play anytime, anywhere</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
