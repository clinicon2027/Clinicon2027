import React, { useState } from 'react';
import { X, CheckCircle2, Send, FileText } from 'lucide-react';

interface AbstractSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AbstractSubmissionModal: React.FC<AbstractSubmissionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    university: '',
    category: 'Clinical Case Study',
    title: '',
    abstractText: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      authorName: '',
      email: '',
      university: '',
      category: 'Clinical Case Study',
      title: '',
      abstractText: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#e8e8ea] flex justify-between items-center bg-[#f9f9fb] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#005ab7]" />
            <h3 className="text-xl font-bold text-black font-['Hanken_Grotesk']">
              Research Showcase Abstract
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6e6e73] hover:text-black p-1.5 rounded-full hover:bg-[#eeeef0] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-black font-['Hanken_Grotesk']">
                Abstract Submitted!
              </h4>
              <p className="text-sm text-[#6e6e73] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-black">{formData.authorName}</strong>. Your
                submission for <strong className="text-black">"{formData.title}"</strong> has been
                received by the Scientific Committee. We will email notifications regarding review
                status.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-black text-white rounded-xl font-medium text-sm hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#6e6e73]">
                Submit your medical or clinical research summary to present before our distinguished
                international academic committee at CLINICON 2027.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c1d] mb-1">
                  Primary Presenter / Author *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. Jane Doe"
                  value={formData.authorName}
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#cfc4c5] focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c1d] mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#cfc4c5] focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c1d] mb-1">
                    University / Faculty *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Faculty of Medicine..."
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#cfc4c5] focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c1d] mb-1">
                  Research Track *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#cfc4c5] focus:outline-none focus:border-black bg-white"
                >
                  <option>Clinical Case Study</option>
                  <option>Original Biomedical Research</option>
                  <option>Epidemiology & Public Health</option>
                  <option>Diagnostic Radiology & Imaging</option>
                  <option>Surgical Innovations</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c1d] mb-1">
                  Abstract Title *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Title of your research paper"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#cfc4c5] focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1c1d] mb-1">
                  Abstract Content (Max 300 words) *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Include Background, Methods, Results, and Conclusion..."
                  value={formData.abstractText}
                  onChange={(e) => setFormData({ ...formData, abstractText: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#cfc4c5] focus:outline-none focus:border-black leading-relaxed"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-[#6e6e73] hover:text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white text-sm font-bold rounded-xl hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Submit Abstract
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
