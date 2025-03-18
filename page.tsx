import Image from "next/image"
import { Search, ChevronDown, MapPin, Clock, Users, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobSearchPlatform() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo"
              width={40}
              height={40}
              className="text-blue-600"
            />
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-blue-600 font-medium">
                Find Jobs
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Top Companies
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Job Tracker
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                My Calendar
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Documents
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Messages
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Notifications
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-64 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Resume Builder</Button>
            <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt="Profile" width={32} height={32} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar - Profile */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative">
                <div className="h-40 bg-gray-200">
                  <Image
                    src="/placeholder.svg?height=160&width=400"
                    alt="Cover"
                    width={400}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                  <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Albert Flores"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-20 pb-6 px-4 text-center">
                <h2 className="text-xl font-semibold text-gray-900">Albert Flores</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Senior Product Designer | UI/UX Designer | Graphic Designer | Web Designer
                </p>
                <p className="text-sm text-gray-500 mt-1">Clinton, Maryland</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow mt-6 p-4">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Profile Visitors</span>
                <span className="text-blue-600 font-medium">140</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Resume Viewers</span>
                <span className="text-blue-600 font-medium">20</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">My Jobs</span>
                <span className="text-blue-600 font-medium">88</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow mt-6 p-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">My calendar</h3>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>
              <p className="text-sm text-gray-600 mt-1">Upcoming Interviews</p>
            </div>
          </div>

          {/* Right Content - Job Search */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Find your Dream Job, <span className="text-blue-600">Albert!</span>
              </h1>
              <p className="text-gray-600 mt-1">
                Explore the latest job openings and apply for the best opportunities available today!
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-1">
                  <Input
                    type="text"
                    placeholder="Job Title, Company, or Keywords"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-1 md:col-span-1">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="europe">Europe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1 md:col-span-1 flex gap-2">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm text-gray-600">Similar:</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button variant="outline" className="rounded-md text-sm px-4 py-1">
                    Frontend
                  </Button>
                  <Button variant="outline" className="rounded-md text-sm px-4 py-1">
                    Backend
                  </Button>
                  <Button variant="outline" className="rounded-md text-sm px-4 py-1">
                    Graphic Designer
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Jobs */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Featured Jobs</h2>
                <a href="#" className="text-blue-600 text-sm">
                  See Featured Jobs
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((job) => (
                  <JobCard key={job} />
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div className="mt-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Recommended Jobs</h2>
                <a href="#" className="text-blue-600 text-sm">
                  See Recommended Jobs
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((job) => (
                  <JobCard key={job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function JobCard() {
  return (
    <div className="bg-white rounded-lg shadow p-4 relative">
      <div className="absolute top-4 right-4 text-xs bg-gray-100 px-2 py-1 rounded">Promoted</div>
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 bg-blue-100 rounded flex items-center justify-center">
          <Image src="/placeholder.svg?height=40&width=40" alt="Company" width={40} height={40} />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">UI/UX Designer</h3>
          <p className="text-sm text-gray-600">Teams</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          Seattle, USA (Remote)
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-2 text-gray-400" />1 day ago
          <span className="mx-2">|</span>
          <Users className="h-4 w-4 mr-1 text-gray-400" />
          <span className="text-blue-600">22 applicants</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">Apply Now</Button>
        <Button variant="ghost" size="icon">
          <Bookmark className="h-5 w-5 text-gray-400" />
        </Button>
      </div>
    </div>
  )
}

