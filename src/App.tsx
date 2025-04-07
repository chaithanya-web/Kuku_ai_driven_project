import React, { useState } from 'react';
import { Headphones, BookOpen, Sparkles, Clock, History, Heart } from 'lucide-react';

interface Story {
  title: string;
  duration: string;
  category: string;
  likes: number;
}

function App() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);

  const recommendedStories: Story[] = [
    { title: "The Mystery of the Ancient Temple", duration: "25 mins", category: "Adventure", likes: 1200 },
    { title: "Mindfulness in Modern Life", duration: "15 mins", category: "Self-Help", likes: 856 },
    { title: "Tales from the Future", duration: "30 mins", category: "Sci-Fi", likes: 2300 },
  ];

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2000);
  };

  const formatLikes = (likes: number) => {
    return likes >= 1000 ? `${(likes / 1000).toFixed(1)}k` : likes.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Headphones className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">KUKU FM</span>
          </div>
          <nav className="flex space-x-4">
            <button className="px-4 py-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
              Library
            </button>
            <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
              Create Story
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* AI Story Generator */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">AI Story Generator</h2>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={4}
              placeholder="Describe the type of story you'd like to hear (e.g., 'A motivational story about overcoming challenges')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                onClick={handleGenerate}
                disabled={generating || !prompt}
                className={`px-6 py-2 rounded-full flex items-center space-x-2 ${
                  generating || !prompt
                    ? 'bg-gray-200 text-gray-500'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {generating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    <span>Generate Story</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Stories */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Recommended for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">{story.title}</h3>
                  <span className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {story.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                    {story.category}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Heart className="h-4 w-4 mr-1" />
                    <span>{formatLikes(story.likes)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-12 space-y-6">
          <div className="flex items-center space-x-2">
            <History className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Recent Activity</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center space-x-4 py-2 border-b last:border-0">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Headphones className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">You listened to "The Power of Habits"</h4>
                    <p className="text-sm text-gray-500">2 hours ago • 15 minutes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;