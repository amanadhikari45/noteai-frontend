import React, { useState } from "react";
import { Mic, MicOff, Trash2 } from "lucide-react";

const DashboardVoice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");

  const handleRecord = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    setIsRecording(true);

    setTimeout(() => {
      setText((prev) => prev + " Sample converted text added...");
    }, 2000);
  };

  const stopRecording = () => setIsRecording(false);

  const clearText = () => setText("");

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6  text-gray-100">
      <h1 className="text-2xl font-semibold text-gray-900">Voice to Text Converter</h1>
      <div className="flex flex-col items-center space-y-4 bg-gray-900 p-10 rounded-2xl shadow-lg border border-gray-700">
        <button
          onClick={handleRecord}
          className={`p-6 rounded-full shadow-xl transition-all 
            ${isRecording 
              ? "bg-red-500 text-white scale-110" 
              : "bg-gray-700 text-gray-200 hover:bg-gray-600"}`}
        >
          {isRecording ? <MicOff size={32} /> : <Mic size={32} />}
        </button>

        <p className="text-gray-400">
          {isRecording ? "Recording… Speak now" : "Tap the mic to start recording"}
        </p>
        {isRecording && (
          <div className="animate-ping h-4 w-4 bg-red-400 rounded-full"></div>
        )}
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-inner relative min-h-[150px]">
        <textarea
          className="w-full bg-transparent outline-none text-gray-200 resize-none"
          rows="6"
          placeholder="Converted text will appear here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {text && (
          <button
            onClick={clearText}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardVoice;
