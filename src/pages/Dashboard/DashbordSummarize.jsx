import { useState } from "react"
import { Play, Pause } from "lucide-react"

const DashboardSummarize = () => {
  const [summary, setSummary] = useState(
    "This is a dummy AI-generated summary. The AI has extracted key points from your notes. You can listen to it or read it here. This is just sample text for testing the design and voice-over functionality."
  )
  const [speaking, setSpeaking] = useState(false)
  const handleSpeak = () => {
    if (!summary) return

    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
    } else {
      const utterance = new SpeechSynthesisUtterance(summary)
      utterance.onend = () => setSpeaking(false)
      window.speechSynthesis.speak(utterance)
      setSpeaking(true)
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        AI Notes Summarizer & Reader
      </h1>

      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Summary Preview
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
          {summary}
        </p>

        <button
          onClick={handleSpeak}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
        >
          {speaking ? (
            <>
              <Pause className="h-5 w-5" /> Pause Reading
            </>
          ) : (
            <>
              <Play className="h-5 w-5" /> Play Reading
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default DashboardSummarize
