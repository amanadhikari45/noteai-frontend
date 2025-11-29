import { useState } from "react"
import { UploadCloud, FileText, CheckCircle } from "lucide-react"

const DashboardHome = () => {
  const [file, setFile] = useState(null)
  const [summary, setSummary] = useState("")
  const [loading, setLoading] = useState(false)

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setSummary("") // reset previous summary
    } else {
      alert("Please upload a PDF file.")
    }
  }

  // Simulate AI summary
  const handleSummarize = async () => {
    if (!file) return

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000)) // simulate API call
    setSummary("This is a dummy summary of your PDF document. The AI will extract key points here.")
    setLoading(false)
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">AI Notes Summarizer</h1>

      {/* Upload Box */}
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center">
        <UploadCloud className="h-12 w-12 text-primary mb-4" />
        <h2 className="text-xl font-semibold mb-2">Upload your PDF</h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Select a PDF file containing your notes. AI will summarize it for you.
        </p>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-primary file:text-white hover:file:bg-primary/90"
        />

        {file && (
          <div className="flex items-center space-x-2 mb-4 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span>{file.name}</span>
          </div>
        )}

        <button
          onClick={handleSummarize}
          disabled={!file || loading}
          className="w-full bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-2 px-4 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? "Summarizing..." : "Summarize"}
        </button>
      </div>

      {/* Summary Result */}
      {summary && (
        <div className="mt-6 w-full max-w-lg bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2 text-gray">Summary</h3>
          <p className="text-gray-700 dark:text-gray-300">{summary}</p>
        </div>
      )}
    </div>
  )
}

export default DashboardHome
