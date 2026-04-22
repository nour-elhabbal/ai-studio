'use client';

export function CTAButton({ content }: { content: string }) {
  return (
    <div>
      <button
        onClick={() => {
          document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-flex items-center justify-center rounded-full bg-secondary/10 px-8 py-4 text-lg font-semibold text-secondary transition-colors hover:bg-secondary/20"
      >
        {content}
      </button>
    </div>
  );
}
