import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-ican-900 mb-2 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-ican-500 rounded-full opacity-50"></span>
      </h2>
      {subtitle && <p className="text-gray-600 mt-2 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;