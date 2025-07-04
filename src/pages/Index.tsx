import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Code" className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-800">
              CodeSprouts Academy
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#courses"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Courses
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Where Young Minds Learn to{" "}
              <span className="text-blue-600">Code</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nurturing the next generation of programmers through fun,
              interactive, and age-appropriate coding courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Book Free Trial
              </Button>
            </div>
            <div className="relative max-w-2xl mx-auto">
              <img
                src="/img/dce79e22-6c21-4255-bec2-a7539736e1d7.jpg"
                alt="Kids learning programming"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold rotate-12">
                Fun & Interactive! 🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section id="courses" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Courses by Age Group
            </h3>
            <p className="text-xl text-gray-600">
              Tailored learning paths for every stage of development
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ages 6-8 */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Baby" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Ages 6-8
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Little Sprouts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Icon name="Blocks" className="mr-1" size={14} />
                    Visual Programming
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Icon name="Gamepad2" className="mr-1" size={14} />
                    Game Creation
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Icon name="Puzzle" className="mr-1" size={14} />
                    Logic Puzzles
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  Introduction to programming concepts through colorful blocks
                  and fun activities
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Ages 9-12 */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="TreePine" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Ages 9-12
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Growing Coders
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    <Icon name="Code" className="mr-1" size={14} />
                    Real Programming
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    <Icon name="Smartphone" className="mr-1" size={14} />
                    App Development
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    <Icon name="Globe" className="mr-1" size={14} />
                    Web Projects
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  Building real projects with beginner-friendly programming
                  languages
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Ages 13-16 */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Rocket" className="text-orange-600" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Ages 13-16
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Future Developers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    <Icon name="Terminal" className="mr-1" size={14} />
                    Advanced Coding
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    <Icon name="Users" className="mr-1" size={14} />
                    Team Projects
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-800"
                  >
                    <Icon name="Trophy" className="mr-1" size={14} />
                    Competitions
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  Advanced programming concepts and real-world application
                  development
                </p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Programming Languages We Teach
            </h3>
            <p className="text-xl text-gray-600">
              From visual blocks to professional code
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Scratch */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon name="Blocks" className="text-orange-600" size={40} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Scratch
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Visual Programming
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn programming fundamentals through drag-and-drop blocks.
                  Perfect for beginners!
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Ages 6-12</Badge>
                  <Badge variant="outline">Beginner</Badge>
                  <Badge variant="outline">Visual</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Python */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="FileText" className="text-green-600" size={40} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Python
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Beginner-Friendly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Easy-to-read syntax makes Python perfect for learning real
                  programming concepts.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Ages 9-16</Badge>
                  <Badge variant="outline">Beginner</Badge>
                  <Badge variant="outline">Text-based</Badge>
                </div>
              </CardContent>
            </Card>

            {/* JavaScript */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Globe" className="text-blue-600" size={40} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  JavaScript
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Web Development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build interactive websites and web applications with the
                  language of the web.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Ages 12-16</Badge>
                  <Badge variant="outline">Intermediate</Badge>
                  <Badge variant="outline">Web</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Code" className="text-blue-400" size={24} />
            <h4 className="text-xl font-bold">CodeSprouts Academy</h4>
          </div>
          <p className="text-gray-400 mb-4">
            Nurturing young programmers for a digital future
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Phone" size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="MapPin" size={20} />
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © 2024 CodeSprouts Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
