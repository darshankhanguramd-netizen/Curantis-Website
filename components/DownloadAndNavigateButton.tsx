'use client';

import { useRouter } from 'next/navigation';
import { Download } from 'lucide-react';

interface Props {
  className?: string;
  label?: string;
  iconColor?: string;
}

export default function DownloadAndNavigateButton({
  className = 'btn-primary',
  label = 'Download Referral Form & Fax Instructions',
  iconColor,
}: Props) {
  const router = useRouter();

  function handleClick() {
    const a = document.createElement('a');
    a.href = '/documents/curantis-referral-form.pdf';
    a.download = 'curantis-referral-form.pdf';
    a.click();
    router.push('/refer#download');
  }

  return (
    <button type="button" onClick={handleClick} className={`inline-flex items-center gap-2 ${className}`}>
      <Download className={`w-4 h-4 ${iconColor ?? ''}`} />
      {label}
    </button>
  );
}
