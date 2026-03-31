"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaDownload, FaFilePdf } from "react-icons/fa";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  const googleDriveUrl = "https://drive.google.com/file/d/1wi8TLqxmGrDWF0xYxoqccFE62MnFdv13/preview";

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-surface border border-border rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/10 to-purple-500/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <FaFilePdf className="text-primary text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">Syed Shurem Ali - CV</h3>
              <p className="text-xs text-textMuted">Frontend Developer & AI Specialist</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://drive.google.com/file/d/1wi8TLqxmGrDWF0xYxoqccFE62MnFdv13/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-full text-sm font-medium hover:bg-primaryHover transition-all"
            >
              <FaDownload /> Download
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-all hover:scale-110"
              aria-label="Close"
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative w-full" style={{ height: 'calc(90vh - 100px)' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-textMuted">Loading CV...</p>
              </div>
            </div>
          )}
          <iframe
            src={googleDriveUrl}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title="CV Preview"
          />
        </div>
      </div>
    </div>
  );
}
