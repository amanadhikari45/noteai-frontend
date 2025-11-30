"use client"

import { useState, useRef } from "react"
import { Trash2, RefreshCw, Pause, Play, X, Search, Filter, Clock } from "lucide-react"

export default function DashboardList() {
  const [selected, setSelected] = useState(null)
  const [sortOrder, setSortOrder] = useState("newest")
  const [search, setSearch] = useState("")
  const [selectedTag, setSelectedTag] = useState("All")
  const [playingId, setPlayingId] = useState(null)
  const speechRef = useRef(null)

  const [summaries, setSummaries] = useState([
    {
      id: 1,
      title: "Chapter 1 Summary",
      date: "2025-01-10",
      tags: ["Study", "AI"],
      short: "Overview of AI and learning...",
      full: "Full summary: Artificial intelligence improves decision making by...",
    },
    {
      id: 2,
      title: "Business Report Summary",
      date: "2025-01-05",
      tags: ["Work", "Reports"],
      short: "Quarterly revenue details...",
      full: "Full summary: This business report outlines revenue performance...",
    },
    {
      id: 3,
      title: "Research Paper Summary",
      date: "2025-01-01",
      tags: ["Study", "Climate"],
      short: "Climate change effects...",
      full: "Full summary: This study explains how ecosystems are impacted by...",
    },
  ])

  const deleteSummary = (id) => {
    setSummaries((prev) => prev.filter((item) => item.id !== id))
    if (selected?.id === id) setSelected(null)
    if (playingId === id) stopSpeech()
  }

  const improveSummary = (id) => {
    setSummaries((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              full: item.full + " (Improved with AI ✅)",
            }
          : item,
      ),
    )
  }

  const filteredSummaries = summaries
    .filter((item) => (selectedTag === "All" ? true : item.tags.includes(selectedTag)))
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.full.toLowerCase().includes(search.toLowerCase()),
    )

  const sortedSummaries = [...filteredSummaries].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date) - new Date(a.date)
    }
    return new Date(a.date) - new Date(b.date)
  })

  const playSpeech = (text, id) => {
    stopSpeech()
    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = "en-US"
    speechRef.current = speech
    window.speechSynthesis.speak(speech)
    setPlayingId(id)
    speech.onend = () => setPlayingId(null)
  }

  const pauseSpeech = () => {
    window.speechSynthesis.pause()
  }

  const resumeSpeech = () => {
    window.speechSynthesis.resume()
  }

  const stopSpeech = () => {
    window.speechSynthesis.cancel()
    setPlayingId(null)
  }

  const tagOptions = ["All", "Study", "Work", "AI", "Reports", "Climate"]

  return (
    <div className="min-h-screen p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Summaries</h1>
        <p className="text-gray-700">Manage and organize your saved summaries</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search summaries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
          >
            {tagOptions.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedSummaries.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group bg-gray-800 backdrop-blur border border-gray-700 rounded-xl p-5  hover:border-gray-600 cursor-pointer transition-all duration-300 flex flex-col"
          >
            <div className="mb-4 flex-1">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{item.short}</p>
            </div>
            <div className="mb-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="h-4 w-4" />
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="flex flex-wrap gap-1 justify-end">
                {item.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-4 border-t border-gray-700/50">
              {playingId === item.id ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.speechSynthesis.paused ? resumeSpeech() : pauseSpeech()
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-900 hover:bg-gray-700 rounded-lg text-white text-sm font-medium transition"
                >
                  <Pause className="h-4 w-4" />
                  Pause
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    playSpeech(item.full, item.id)
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-900 hover:bg-gray-700 rounded-lg text-white text-sm font-medium transition"
                >
                  <Play className="h-4 w-4" />
                  Play
                </button>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteSummary(item.id)
                }}
                className="p-2 bg-gray-700 hover:bg-red-600/80 rounded-lg text-gray-300 hover:text-white transition"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {sortedSummaries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No summaries found</p>
        </div>
      )}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-6 py-5 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">{selected.title}</h2>
              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{selected.full}</p>
            </div>
            <div className="border-t border-gray-700 px-6 py-5 bg-gray-800 flex gap-3">
              {playingId === selected.id ? (
                <button
                  onClick={() => {
                    window.speechSynthesis.paused ? resumeSpeech() : pauseSpeech()
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-700 rounded-lg text-white font-medium transition"
                >
                  <Pause className="h-5 w-5" />
                  Pause
                </button>
              ) : (
                <button
                  onClick={() => playSpeech(selected.full, selected.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-700 rounded-lg text-white font-medium transition"
                >
                  <Play className="h-5 w-5" />
                  Play
                </button>
              )}

              <button
                onClick={() => improveSummary(selected.id)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition"
              >
                <RefreshCw className="h-5 w-5" />
                Improve
              </button>

              <button
                onClick={() => deleteSummary(selected.id)}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-600/80 hover:bg-red-700 rounded-lg text-white font-medium transition"
              >
                <Trash2 className="h-5 w-5" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
