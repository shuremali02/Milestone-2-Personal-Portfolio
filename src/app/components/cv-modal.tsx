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
    <div className="fixed inset-0 z-[9999999] flex items-center justify-center p-2 sm:p-4" style={{ zIndex: 9999999 }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
        style={{ zIndex: 9999999 }}
      />

      {/* Modal Content */}
      <div className="relative bg-surface border border-border rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] overflow-hidden animate-slide-up" style={{ zIndex: 10000000 }}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border bg-primary/10 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FaFilePdf className="text-primary text-lg sm:text-xl" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-primary truncate">Syed Shurem Ali - CV</h3>
              <p className="text-xs text-textMuted hidden sm:block">Full-Stack Developer & AI Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://drive.google.com/file/d/1wi8TLqxmGrDWF0xYxoqccFE62MnFdv13/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-primary text-background rounded-lg text-xs sm:text-sm font-medium hover:bg-primaryHover transition-all whitespace-nowrap"
            >
              <FaDownload /> <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-surface border border-border flex items-center justify-center text-textMuted hover:text-primary hover:border-primary transition-all hover:scale-110 flex-shrink-0"
              aria-label="Close"
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative w-full h-[calc(100%-70px)] bg-background">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-textMuted text-sm sm:text-base">Loading CV...</p>
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
