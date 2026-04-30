'use client';

import { Download } from 'lucide-react';

export default function DownloadAndScrollButton() {
  function handleClick() {
    const a = document.createElement('a');
    a.href = '/documents/curantis-referral-form.pdf';
    a.download = 'curantis-referral-form.pdf';
    a.click();
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button type="button" onClick={handleClick} className="btn-primary text-sm inline-flex">
      <Download className="w-4 h-4 mr-2" />
      Download PDF
    </button>
  );
}
